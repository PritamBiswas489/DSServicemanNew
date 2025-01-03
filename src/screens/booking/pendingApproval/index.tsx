import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyle} from '@style/styles';
import {BookingDetail} from '@otherComponent/index';
import {styles} from './styles';
import {Description, BookingStatus} from '@otherComponent/index';
import CommonModal from '@commonComponents/commonModal';
import {StatusView} from './statusView';
import {useValues} from '../../../../App';
import appColors from '@theme/appColors';

export function PendingApproval({route}: any) {
  const [bookStatusModal, setBookStatusModal] = useState(false);
  const {isDark} = useValues();
  return (
    <>
      <ScrollView
        style={[
          GlobalStyle.mainView,
          {backgroundColor: isDark ? appColors.darkTheme : appColors.white},
        ]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <BookingDetail title="bookingDetail.pendingApproval" />
        <View
          style={[
            styles.mainContainer,
            {
              backgroundColor: isDark ? appColors.darkCardBg : appColors.boxBg,
              borderBottomColor: isDark
                ? appColors.darkBorder
                : appColors.border,
              borderBottomWidth: isDark ? 0.1 : 1,
            },
          ]}>
          <View
            style={[
              styles.innerContainer,
              {borderColor: isDark ? appColors.darkBorder : appColors.border},
            ]}>
            <Description
              contactOptions={true}
              setBookingStatus={setBookStatusModal}
              item={route?.params?.bookingData}
            />
          </View>
        </View>
        <CommonModal
          modal={<BookingStatus setShowModal={setBookStatusModal} />}
          showModal={bookStatusModal}
          visibleModal={() => setBookStatusModal(true)}
        />
      </ScrollView>
      <StatusView />
    </>
  );
}
