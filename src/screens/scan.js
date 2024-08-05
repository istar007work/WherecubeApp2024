// src/screens/ScanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, NativeEventEmitter, NativeModules, Platform, Alert } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { PermissionsAndroid } from 'react-native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const ScanScreen = () => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBluetoothAvailable, setIsBluetoothAvailable] = useState(true);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
      const allGranted = Object.values(granted).every((status) => status === PermissionsAndroid.RESULTS.GRANTED);
      if (!allGranted) {
        setIsBluetoothAvailable(false);
        Alert.alert("Permission Denied", "Unable to scan for Bluetooth devices without the necessary permissions.");
      }
    }
  };

  useEffect(() => {
    const initBluetooth = async () => {
      if (Platform.OS === 'android') {
        await requestPermissions();
      }

      try {
        await BleManager.start({ showAlert: false });
      } catch (error) {
        setIsBluetoothAvailable(false);
        Alert.alert("Error", "Unable to start Bluetooth manager.");
        console.log('Error starting BleManager:', error);
        return;
      }

      const handleDiscoverPeripheral = (peripheral) => {
        setDevices((prevDevices) => {
          const deviceExists = prevDevices.some((d) => d.id === peripheral.id);
          if (deviceExists) {
            return prevDevices.map((d) => (d.id === peripheral.id ? peripheral : d));
          }
          return [...prevDevices, peripheral];
        });
      };

      const discoverPeripheralListener = bleManagerEmitter.addListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral
      );

      BleManager.scan([], 5, true).then(() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000); // adjust scanning duration as needed
      }).catch(error => {
        setIsBluetoothAvailable(false);
        Alert.alert("Error", "Unable to start scanning for Bluetooth devices.");
        console.log('Error starting scan:', error);
      });

      return () => {
        BleManager.stopScan();
        discoverPeripheralListener.remove();
      };
    };

    initBluetooth();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.deviceContainer}>
      <Text style={styles.deviceName}>{item.name || 'Unknown Device'}</Text>
      <Text style={styles.deviceRssi}>RSSI: {item.rssi}</Text>
    </View>
  );

  const sortedDevices = devices.sort((a, b) => b.rssi - a.rssi);

  return (
    <View style={styles.container}>
      {isBluetoothAvailable ? (
        isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={sortedDevices}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )
      ) : (
        <Text style={styles.errorText}>Bluetooth is not available on this device.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deviceName: {
    fontSize: 18,
  },
  deviceRssi: {
    fontSize: 14,
    color: 'gray',
  },
  text: {
    fontSize: 24,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    padding: 20,
  },
});

export default ScanScreen;
