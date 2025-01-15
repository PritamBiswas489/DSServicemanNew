import appColors from '@src/theme/appColors';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useValues } from '../../../../../App';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { customer_marker, delivery_man_marker, marker_store, restaurant_marker } from '@src/utils/images';
const ViewMapModal = () => {
    const [isModalVisible, setModalVisible] = useState(true);
    const { isDark, t, currSymbol } = useValues();
    // Dummy coordinates
    const customerLocation = {
        latitude: 23.4922, // Replace with real coordinates
        longitude: 88.2523,
    };

    const storeLocation = {
        latitude: 23.5005, // Replace with real coordinates
        longitude: 88.2636,
    };

    return (

        <Modal visible={isModalVisible} transparent animationType="slide">
            <View style={[styles.modalContainer, { backgroundColor: isDark ? appColors.darkCardBg : appColors.white }]}>
            <View style={styles.headerContainer}>
          <Text style={styles.header}>Order Location</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Icon name="close" size={24} color={isDark ? appColors.white : appColors.darkText} /> 
          </TouchableOpacity>
        </View>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: (customerLocation.latitude + storeLocation.latitude) / 2,
                        longitude: (customerLocation.longitude + storeLocation.longitude) / 2,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    {/* Customer Marker */}
                    <Marker
                        coordinate={customerLocation}
                        title="Customer Location"
                        description="This is the customer's location"

                    >
                        <Image
                            source={customer_marker} // Replace with your image path
                            style={{ width: 40, height: 40 }} // Set custom size here
                        />
                    </Marker>
                    {/* Store Marker */}
                    <Marker
                        coordinate={storeLocation}
                        title="Store Location"
                        description="This is the store's location"


                    >
                        <Image
                            source={marker_store} // Replace with your image path
                            style={{ width: 40, height: 40 }} // Set custom size here
                        />

                    </Marker>
                </MapView>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        Your Distance from Restaurant: <Text style={styles.bold}>142.06 Km Approx</Text>
                    </Text>
                    <Text style={styles.infoText}>
                        From Customer to Restaurant Distance: <Text style={styles.bold}>1.87 Km Approx</Text>
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonIgnore} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonText}>Ignore</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAccept} onPress={() => Alert.alert('Accepted')}>
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,

        borderRadius: 10,
        margin: 20,
        padding: 10,
        justifyContent: 'space-between',
        elevation: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    closeButton: {
        padding: 8,
        borderRadius: 16,
      },
    map: {
        flex: 3,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
        padding: 10,
    },
    infoText: {
        fontSize: 16,
        marginVertical: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    buttonIgnore: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    buttonAccept: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ViewMapModal;
