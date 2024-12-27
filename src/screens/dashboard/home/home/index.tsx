import { ScrollView, View } from 'react-native-virtualized-view';
import React, { useEffect, useState } from 'react';
import { Chat, Notification } from '@utils/icons';
import Header from '@commonComponents/header';
import { GlobalStyle } from '@style/styles';
import { TotalPayBackBalance } from '../AccountInformation/totalBalance';
import { DashBoard } from '../dashBoard';
import HeadingRow from '@commonComponents/headingRow';
import { BookingData } from '../data';
import BookingList from '@screens/booking/allBooking/bookingList';
import BlogView from '../blogList';
import StaticsDetail from '../staticsDetail';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'src/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CommonModal from '@commonComponents/commonModal';
import WalletModal from '@otherComponent/wallet/walletModal';
import CancelBooking from '@otherComponent/booking/cancelBooking';
import { windowHeight } from '@theme/appConstant';
import ModalComponent from '@commonComponents/modal';
import { acceptBooking } from '@utils/images';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../App';
import { Provider } from '@screens/dashboard/serviceMan/home';
import { ServiceMenDashBoard } from '@screens/dashboard/serviceMan/home';
import { ServiceMen } from './serviceMen';
import { ProviderLogin } from './provider';
import { Alert, RefreshControl, TouchableOpacity } from 'react-native';
import SkeletonLoader from '@src/commonComponents/SkeletonLoader';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
 

import HomeNoFataFound from '@src/commonComponents/homeNoDataFound';
 
import HomeBookingList from '@src/commonComponents/homeBookingList';
import { homeDataActions } from '@src/store/redux/home-data-redux';
import useHomeDataLoader from '@src/hooks/useHomeDataLoader';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { saveFcmTokenProcess } from '@src/services/profile.service';
import { getAuthUserService } from '@src/services/auth.service';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { Text } from 'react-native';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { serviceManAccountDataActions } from '@src/store/redux/serviceman/service-man-account-data.redux';
import RecentBookingActivities from './homeBookingList';
import { getHomeData } from '@src/services/home.service';


type navigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
}

export function Home() {
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [cancelBookingModal, setCancelBookingModal] = useState(false);
  const [acceptBookingModal, setAcceptBookingModal] = useState(false);
  const { navigate,replace } = useNavigation<navigationProp>();
  const { isDark, isDeliveryManLogin, t, loggedInUserType } = useValues();
  const [showSkeletonLoader, setSkeletonLoader] = useState(false)
  const [needSkeletonLoader,setNeedSkeletonLoader] =  useState(true)
  const [refreshing, setRefreshing] = React.useState(false);
 
  const dispatch = useDispatch()

  const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        setNeedSkeletonLoader(false)
        const responseuser = await getAuthUserService()
        if (responseuser?.data?.response_code === 'default_200' && responseuser?.data?.content?.id) {
          dispatch(serviceManAccountDataActions.setData(responseuser?.data?.content))
        }else{
          replace('IntroSlider');
        }
        setTimeout(() => {
          setRefreshing(false);
        }, 1000);
  }, []);

  
  //on display notification
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
 
  //==== Save fcm token ======//
  const saveFcmTokenData = async (fcmToken:string) =>{
     console.log({fcmToken})
     const formData = new FormData()
     formData.append('fcm_token',fcmToken)
     saveFcmTokenProcess(formData)
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
            onPress: () => navigate('Notification') 
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


  const loadHomeData = async ()=>{
      const response:Response = await getHomeData()
      console.log(JSON.stringify(response?.data))
  }

  useEffect(()=>{
     loadHomeData()
  },[])
  

  return (
    <ScrollView
      style={[
        GlobalStyle.mainView,
        { backgroundColor: isDark ? appColors.darkTheme : appColors.white },
         
      ]}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}>
      {showSkeletonLoader && <SkeletonLoader />}
      {!showSkeletonLoader && <>
        <Header
          showBackArrow={false}
          title={'bottomTab.home'}
          trailIcon={
            <Chat color={isDark ? appColors.white : appColors.darkText} />
          }
          gotoScreen={() => navigate('ChatHistory')}
          trailIcon1={
            <Notification color={isDark ? appColors.white : appColors.darkText} />
          }
          onTrailIcon={() => navigate('Notification')}
        />
        {/* <TouchableOpacity onPress={()=>onDisplayNotification('testing title','testing body')}><Text>Click test notification</Text></TouchableOpacity> */}
         

        <ServiceMenDashBoard />
        
        <StaticsDetail />

        <RecentBookingActivities/>

         
        
      </>}

    </ScrollView>
  );
}
