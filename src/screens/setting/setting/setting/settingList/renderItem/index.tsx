import {View, Text, TouchableOpacity} from 'react-native';
 
import React from 'react';
import {styles} from './styles';
import {settingType} from '../data/types';
import {RightArrow} from '@utils/icons';
import appColors from '@theme/appColors';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useValues} from '../../../../../../../App';
import {clearServiceMenCredential} from '@utils/functions';
import { Alert } from 'react-native';
import { deleteAuthTokens } from '@src/config/auth';
import { serviceProviderAccountDataActions } from '@src/store/redux/service-provider-account-data.redux';
import { useDispatch } from 'react-redux';
type routeProps = NativeStackNavigationProp<RootStackParamList>;
import { logoutClearReduxState } from '@src/services/logout.service';

export default function RenderItem({
  item,
}: {
  item: settingType;
}) {
  const {replace, navigate} = useNavigation<routeProps>();
  const {isDark, t} = useValues();
  const dispatch = useDispatch()

  const handleOnPress = async (data: any) => {
    navigate(data.gotoScreen)
    //PromotionalCost
  };
  return (
    <View
      style={{
        backgroundColor: isDark
          ? appColors.darkTheme
          : item.showDivider
          ? appColors.lightRed
          : appColors.boxBg,
      }}>
      {item.showDivider && (
        <View
          style={[
            styles.divider,
            {
              borderWidth: isDark ? 0 : 1,
              backgroundColor: isDark ? appColors.darkCardBg : appColors.white,
            },
          ]}
        />
      )}
      {/* <Text
        style={[
          styles.title,
          {
            color: item.showDivider
              ? isDark
                ? appColors.primary
                : appColors.error
              : isDark
              ? appColors.primary
              : appColors.darkText,
          },
        ]}>
        {t(item.title)}
      </Text> */}

      {item.data.map(data => (
        <View
        key={data.name}
          style={{
            backgroundColor: item.showDivider
              ? isDark
                ? appColors.darkText
                : appColors.lightRed
              : isDark
              ? appColors.darkText
              : appColors.boxBg,
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleOnPress(data)}
            style={styles.innerContainer}>
            <View style={styles.row}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    borderColor: isDark
                      ? appColors.darkBorder
                      : appColors.border,
                    backgroundColor: isDark
                      ? appColors.darkCard
                      : appColors.white,
                  },
                ]}>
                {isDark ? data.darkIcon : data.icon}
              </View>
              <View>
                <Text
                  style={[
                    styles.name,
                    {
                      color: isDark
                        ? appColors.white
                        : item.showDivider
                        ? appColors.error
                        : appColors.darkText,
                    },
                  ]}>
                  {t(data.name)}
                </Text>
                {data.subTitle && (
                  <Text style={styles.subTitle}>{t(data.subTitle)}</Text>
                )}
              </View>
            </View>
            {!item.showDivider && (
              <View style={styles.iconView}>
                <RightArrow />
              </View>
            )}
          </TouchableOpacity>

          <View
            style={[
              styles.border,
              {
                borderColor: isDark
                  ? appColors.darkBorder
                  : item.showDivider
                  ? appColors.dividerColor
                  : appColors.border,
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
}
