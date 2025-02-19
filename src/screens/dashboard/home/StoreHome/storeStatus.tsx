import appColors from '@src/theme/appColors';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@src/store';
import { useValues } from '../../../../../App';
import SwitchContainer from '@src/otherComponent/switchContainer';

const StoreStatus: React.FC<{updateStoreStatus:()=>void}> = ({updateStoreStatus}) => {
  const { isDark, t, currSymbol } = useValues();
  
  const profileData = useSelector(
      (state: RootState) => state['storeProfileData']
    );

   


  //switch profile and update status
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.walletContainer}>
          <Icon name="account-balance-wallet" size={60} color="#fff" />
          <Text style={styles.walletText}>{t('newDeveloper.Balance')}</Text>
          <Text style={styles.walletAmount}>{currSymbol} {profileData?.balance}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.balanceContainer}>
          <View style={styles.balanceColumn}>
            <Text style={styles.balanceText}>{t('newDeveloper.Today')}</Text>
            <Text style={styles.balanceAmount}>{currSymbol} {profileData.todays_earning}</Text>
          </View>
          <View style={styles.balanceColumn}>
            <Text style={styles.balanceText}>{t('newDeveloper.ThisWeek')}</Text>
            <Text style={styles.balanceAmount}>{currSymbol} {profileData.this_week_earning}</Text>
          </View>
          <View style={styles.balanceColumn}>
            <Text style={styles.balanceText}>{t('newDeveloper.ThisMonth')}</Text>
            <Text style={styles.balanceAmount}>{currSymbol} {profileData.this_month_earning}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: appColors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  walletContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  walletIcon: {
    marginBottom: 8,
  },
  walletText: {
    color: '#fff',
    fontSize: 16,
  },
  walletAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  balanceColumn: {
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StoreStatus;
