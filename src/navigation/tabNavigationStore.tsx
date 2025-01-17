import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './myTabBar';
import {
  HomeIcon,
  WalletIcon,
  BookingIcon,
  SettingIcon,
  ActiveSetting,
  ActiveHomeIcon,
  ActiveWallet,
  ActiveBooking,
  Plus,
  Services,
  MenuIcon,
  ActiveMenuIcon
} from '@utils/icons';
import appColors from '../theme/appColors';
import { Home, Wallet, Setting, Booking, ServiceList, MoreMenus } from '../screens/index';
import { View, Text } from 'react-native';
 
import StoreCartModal from '@src/otherComponent/cartModal/storeModal';
import { windowHeight } from '@theme/appConstant';
import Spinner from 'react-native-loading-spinner-overlay';
import { MoreMenusVendor } from '@src/screens/dashboard/home/MoreMenusVendor';
import StoreHome from '@src/screens/dashboard/home/StoreHome';
import StoreWallet from '@src/screens/dashboard/home/StoreWallet';
import StoreOrders from '@src/screens/dashboard/home/StoreOrders';
import { storeHomeOrderActions } from '@src/store/redux/store/store-home-order';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import StoreRunningOrders from '@src/screens/dashboard/home/StoreRunningOrders';
import StoreCompletedOrders from '@src/screens/dashboard/home/StoreCompletedOrders';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export function BottomTabSeller() {
  const [selected, setSelected] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [processingSpinner, setProcessingLoader] = useState(false)
  const dispatch = useDispatch()
  const tabData = [
    {
        // name: 'bottomTab.home',
        activeIcon: <Icon name="home" size={24} color={appColors.primary} />,
        tabBarIcon: <Icon name="home" size={24} color="gray" />,
    },
    {
        // name: 'newDeveloper.RunningOrders',
        activeIcon:<Icon name="list-alt" size={24} color={appColors.primary} />,
        tabBarIcon: <Icon name="list-alt" size={24} color="gray" />,
    },
    {
        // name: 'newDeveloper.MyOrders',
        activeIcon: <Icon name="shopping-bag" size={24} color={appColors.primary} />,
        tabBarIcon:  <Icon name="shopping-bag" size={24} color="gray" />,
    },
    {
        // name: 'newDeveloper.moreMenuText',
        activeIcon: <Icon name="bars" size={24} color={appColors.primary} />,
        tabBarIcon: <Icon name="bars" size={24} color="gray" />,
    },
  ];

  const onPress = (key: number) => {
    if(selected === 0 ){
      dispatch(storeHomeOrderActions.setData({field:'refreshOrders','data':true}))
    }
    setSelected(key);
   
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingBottom: windowHeight(9), flex: 1 }}>
        {selected == 0 ? (
          <StoreHome />
        ) : selected == 1 ? (
          <StoreRunningOrders />
        ) : selected == 2 ? (
          <StoreCompletedOrders />
        ) : (
          <MoreMenusVendor />
        )}
      </View>
      <MyTabBar onPress={onPress} selected={selected} tabData={tabData} />
      <StoreCartModal
        setModalVisible={setModalVisible}
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
      <Spinner
        visible={processingSpinner}
        textContent={'Processing.....'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}
