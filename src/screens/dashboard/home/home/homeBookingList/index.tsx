import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { useValues } from '../../../../../../App';
import appColors from '@src/theme/appColors';

interface Booking {
  id: string;
  image: string;
  date: string;
  status: string;
}

const recentBookings: Booking[] = [
  {
    id: '100849',
    image: 'https://via.placeholder.com/50',
    date: '24 Dec, 2024, 08:38 PM',
    status: 'Accepted',
  },
  {
    id: '100848',
    image: 'https://via.placeholder.com/50',
    date: '24 Dec, 2024, 08:38 PM',
    status: 'Accepted',
  },
  {
    id: '100846',
    image: 'https://via.placeholder.com/50',
    date: '24 Dec, 2024, 08:34 PM',
    status: 'Accepted',
  },
];

interface BookingItemProps {
  item: Booking;
}

const BookingItem: React.FC<{item:Booking,isDark:boolean}> = ({ item , isDark}) => (
     
  <View style={[styles.bookingItem,{backgroundColor: isDark ? appColors.darkTheme : appColors.boxBg}]}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.details}>
      <Text style={[styles.bookingText,{color: isDark ? appColors.white : appColors.darkText,}]}>Booking# {item.id}</Text>
      <Text style={[styles.dateText,{color: isDark ? appColors.darkSubText : appColors.darkText,}]}>{item.date}</Text>
    </View>
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>{item.status}</Text>
    </View>
  </View>
);

const RecentBookingActivities: React.FC = () => {
  const { isDark, isDeliveryManLogin, t, loggedInUserType } = useValues();
  const renderItem: ListRenderItem<Booking> = ({ item }) => <BookingItem item={item} isDark={isDark} />;

  return (
    <View style={[styles.container,{backgroundColor:isDark ? appColors.darkCardBg : appColors.white  }]}>
      <Text style={[styles.headerText,{color: isDark ? appColors.white : appColors.darkText,}]}>Recent Booking Activities</Text>
      <FlatList
        data={recentBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'bold',
  },
  bookingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  bookingText: {
    color: '#fff',
    fontSize: 16,
  },
  dateText: {
    color: '#ccc',
    fontSize: 14,
  },
  statusContainer: {
    backgroundColor: appColors.primary,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  statusText: {
    fontSize: 14,
  },
});

export default RecentBookingActivities;
