import React, {useState, createContext, useContext, useEffect} from 'react';
import Navigation from './src/navigation';
import {ThemeContextType} from './src/utils/types';
import {useTranslation} from 'react-i18next';

import {ScrollView, TouchableOpacity, View,Text, Alert, PermissionsAndroid} from 'react-native';
import { checkLoggedInUserType, getDistanceFromLatLonInKm } from '@src/utils/functions';
import { recordLocationData, saveVendorFcmTokenProcess, listRecordLocationData } from '@src/services/store/profile.service';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { setValue, clearValue } from '@src/utils/localstorage';
import { saveFcmTokenProcess } from '@src/services/profile.service';
import Geolocation, { GeolocationResponse, GeolocationError } from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { geoCodeApi } from '@src/services/store/settings.service';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@src/store'
import { currentLocationActions } from '@src/store/redux/store/current-location-redux';

const initialContextVal = {
  currSymbol: '$',
  currValue: 1,
  isDark: true,
  setIsDark: () => {},
  notificationSound:true,
  setNotificationSound:()=>{},
  setCurrValue: () => {},
  setCurrSymbol: () => {},
  isDeliveryManLogin: false,
  setIsDeliveryManLogin: () => {},
  isFreelancerLogin: false,
  setIsFreeLancerLogin: () => {},
  loggedInUserType:'', //logged in user type
  setLoggedInUserType:()=>{}, 
  t: '',
};
interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}
export const ThemeContext = createContext<ThemeContextType>(initialContextVal);

const App: React.FC = () => {
   
  const [currSymbol, setCurrSymbol] = useState('₹');
  const [currValue, setCurrValue] = useState(1);
  const [isDark, setIsDark] = useState(initialContextVal.isDark);
  const [notificationSound, setNotificationSound] = useState(initialContextVal.notificationSound);
  const [isDeliveryManLogin, setIsDeliveryManLogin] = useState(initialContextVal.isDeliveryManLogin);
  const [isFreelancerLogin, setIsFreeLancerLogin] = useState(initialContextVal.isFreelancerLogin);
  const [loggedInUserType, setLoggedInUserType] = useState(initialContextVal.loggedInUserType);
  const [canStartTracking,setCanStartTracking] = useState(false)
  const [loaderRecordCurrentLocation, setLoaderRecordCurrentLocation]  = useState(false)

  const dispatch = useDispatch()


  const [location, setLocation] = useState<GeolocationResponse | null>(null);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const reduxValueCurrentLocation = useSelector((state: RootState)=>state.currentLocation)

  const {t} = useTranslation();
  const contextValue = {
    currSymbol,
    setCurrSymbol,
    currValue,
    setCurrValue,
    isDark,
    setIsDark,
    notificationSound,
    setNotificationSound,
    isDeliveryManLogin,
    setIsDeliveryManLogin,
    isFreelancerLogin,
    setIsFreeLancerLogin,
    t,
    loggedInUserType,
    setLoggedInUserType
  };

  async function onDisplayNotification(title:string,body:string) {
    //==== Create a channel =====//
    await notifee.createChannel({
      id: 'default_channel_id',
      name: 'Default Channel',
      sound: 'notification_sound', // Use the same name as the MP3 file without extension
      importance: AndroidImportance.HIGH,
    });
  
    //========= Display a notification ============//
    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId: 'default_channel_id',
        smallIcon: 'ic_launcher', // optional, defaults to your app icon
      },
    });
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
   //save fcm token
   const saveFcmTokenData = async (fcmToken:string) =>{
        console.log(fcmToken);
        const getLoggedInUserType = await checkLoggedInUserType()
        if(getLoggedInUserType === 'Seller'){
          const formData = new FormData()
          formData.append('fcm_token',fcmToken)
          const response:Response =  await saveVendorFcmTokenProcess(formData)
          console.log(response?.data)
          clearValue('fcmTokenStorage')

        }else if(getLoggedInUserType === 'Provider'){
          const formData = new FormData()
          formData.append('fcm_token',fcmToken)
          const response:Response =  await saveFcmTokenProcess(formData)
          console.log(response?.data)
          clearValue('fcmTokenStorage')

        }else{
          setValue('fcmTokenStorage',fcmToken)
        }
    }
    const getFCMToken = async () => {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          saveFcmTokenData(fcmToken)
        } else {
          console.log('Failed to get FCM token');
        }
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    useEffect(() => {
      requestUserPermission();
      getFCMToken();
  
      const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
        onDisplayNotification(remoteMessage.notification?.title || '',remoteMessage.notification?.body || '')
              Alert.alert(remoteMessage.notification?.title || t('newDeveloper.NewNotification'), remoteMessage.notification?.body,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",     
                  },
                  { 
                    text: "OK", 
                    onPress: () => {}
                  }
                ]
              );
      });
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification caused app to open from background state:', remoteMessage.notification);
      });
       
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log('Notification caused app to open from quit state:', remoteMessage.notification);
          }
        });
      const unsubscribeOnTokenRefresh = messaging().onTokenRefresh(token => {
        saveFcmTokenData(token)
      });
  
      return () => {
        unsubscribeOnMessage();
        unsubscribeOnTokenRefresh();
      };
    }, []);

    //current location
    const startLocationTrackingbk = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log("================== Watch position =======================")
          if(position?.coords?.latitude && position?.coords?.longitude){
            console.log({
              lat:position?.coords?.latitude,
              lng: position?.coords?.longitude
            })
          }
        },
        (error) => {
          console.error('Error:', error);
        },
        { enableHighAccuracy: true }
      );
    }; 

    const startLocationTracking = async () => {
     
  
      const id = Geolocation.watchPosition(
        (position: GeolocationResponse) => {
          console.log(`============${JSON.stringify({position})} =================`)
          setLocation(position);
          
        },
        (error: GeolocationError) => {
          console.error('Error:', error.message);
          setErrorMsg(error.message);
        },
        {
          enableHighAccuracy: true,   // Use GPS for more accurate results
          distanceFilter: 3000,         // Minimum distance in meters to trigger updates
          interval: 5000,             // Android: Update every 5 seconds
          fastestInterval: 2000,      // Android: Fastest updates every 2 seconds
          timeout: 10000,             // Max time to wait for a location
          maximumAge: 1000,           // Cache duration for locations
          useSignificantChanges: false // iOS: Set to true for low power mode
        }
      );
  
      setWatchId(id);
    };

    const stopLocationTracking = () => {
      if (watchId !== null) {
        Geolocation.clearWatch(watchId);
        Geolocation.stopObserving();
        console.log('Location tracking stopped');
        setWatchId(null);
      }
    };

    useEffect(() => {
       console.log({canStartTracking})
      if(canStartTracking){
        startLocationTracking();
        return () => {
          stopLocationTracking();
        };
      }
    }, [canStartTracking]);
    

    //get address from coordinates
    const getAddressFromCoordinates = async (latitude:any, longitude:any) => {
      try {
        const json:Response = await geoCodeApi(latitude, longitude);
        const addressComponent = json?.data?.results?.[0].formatted_address;
        return {addressComponent}
      } catch (error) {
        console.error('Error:', error);
      }
    };

    useEffect(()=>{
      console.log(`=============== ${JSON.stringify({location})} ===========================`)
     const f = async ()=>{
        if(location?.coords?.latitude && location?.coords?.longitude){
          setLoaderRecordCurrentLocation(true)
          let currentlocation:string = 'Not found'
          let needUpdatedLocation = true

          if(reduxValueCurrentLocation.latitude && reduxValueCurrentLocation.longitude && reduxValueCurrentLocation.location!==''){
           const distance =  getDistanceFromLatLonInKm(
              Number(reduxValueCurrentLocation?.latitude),
              Number(reduxValueCurrentLocation?.longitude),
              Number(location?.coords?.latitude),
              Number(location?.coords?.longitude),
            )
            console.log(`================== ${JSON.stringify({distance})} ==========================`)
            if(distance < 3){
              needUpdatedLocation = false
              currentlocation = reduxValueCurrentLocation.location
            }
          }
          console.log(`=================${JSON.stringify({needUpdatedLocation})} ==========================`)

         
          if(needUpdatedLocation){
            const getAddr = await getAddressFromCoordinates(location?.coords?.latitude,location?.coords?.longitude)
            if(getAddr?.addressComponent){
              currentlocation = getAddr?.addressComponent
            }
          }

          console.log(`=======================${JSON.stringify({formData:{lat:location?.coords?.latitude,long:location?.coords?.longitude,currentlocation}})}    ========================`)
         
          const formData = new FormData()
          formData.append('latitude',location?.coords?.latitude)
          formData.append('longitude',location?.coords?.longitude)
          formData.append('location',currentlocation)
 
          const response:Response = await recordLocationData(formData)
          console.log("========= location record response =================")
          console.log(response?.data)
          setLoaderRecordCurrentLocation(false)
          dispatch(currentLocationActions.setData({'field':'latitude','data':location?.coords?.latitude}))
          dispatch(currentLocationActions.setData({'field':'longitude','data':location?.coords?.longitude}))
          if(currentlocation!=='Not found'){
            dispatch(currentLocationActions.setData({'field':'location','data':currentlocation}))
          }


        }

     }
     f()

    },[location])

    useEffect(()=>{
        console.log(`===========${JSON.stringify({reduxValueCurrentLocation})}   =========`)
    },[reduxValueCurrentLocation])


    // useEffect(()=>{
    //   const g = async ()=>{
    //       const response:Response = await listRecordLocationData()
    //       console.log("===== list recorded location data =====")
    //       console.log(JSON.stringify(response?.data))
    //   } 
    //   g()
    // },[])




    const checkingSellerLocationPermission = async ()=>{
      const checkUserType = await checkLoggedInUserType()
      if(checkUserType === 'Seller'){
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        const tt = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
        );
         
        const backgroundGranted = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
                  );
                  
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setCanStartTracking(true)
         }
      }
    }
    useEffect(()=>{
      checkingSellerLocationPermission()

    },[])
 
  return (
    <ThemeContext.Provider value={contextValue}>
      <Navigation />
      <Spinner
          visible={loaderRecordCurrentLocation}
          textContent={t('newDeveloper.RecordLocation')}
          textStyle={{ color: '#FFF' }}
        />
    </ThemeContext.Provider>
  );
};

export default App;

export const useValues = () => useContext(ThemeContext);
