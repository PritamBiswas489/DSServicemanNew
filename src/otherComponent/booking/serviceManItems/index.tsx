import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { GlobalStyle } from '@style/styles';
import appColors from '@theme/appColors';

import { useValues } from '../../../../App';
import { BookingListingInterface } from '@src/interfaces/bookingListingInterface';
import { maleDefault, femaleDefault } from '@src/utils/images';
import { getMediaUrl } from '@src/config/utility'

export function ServiceManItems({ item }: { item: BookingListingInterface }) {
  const { isDark, t } = useValues();
  const defaultImageValue = item.servicemenGender !== 'female' ? femaleDefault : maleDefault

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {item.servicemenProfileImage && item.servicemenProfileImage !== 'default.png' ? <Image source={{ uri: `${getMediaUrl()}/serviceman/profile/${item.servicemenProfileImage}` }} style={styles.serviceImage} /> : <Image source={defaultImageValue} style={styles.serviceImage} />}
        <Text
          style={[
            styles.name,
            { color: isDark ? appColors.lightText : appColors.darkText },
          ]}>
          {t(item.servicemenName)}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={[GlobalStyle.dot, { backgroundColor: appColors.primary }]} />
        <Text style={styles.titleStyle}>{t('serviceManDetails.serviceMan')}</Text>
      </View>
    </View>
  );
}