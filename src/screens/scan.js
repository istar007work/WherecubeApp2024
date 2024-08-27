import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { NativeEventEmitter, NativeModules } from 'react-native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const Bluetoothsystem = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    BleManager.start({ showAlert: false });

    const handleDiscoverPeripheral = (peripheral) => {
      setDevices((prevDevices) => {
        if (!prevDevices.some(dev => dev.id === peripheral.id)) {
          return [...prevDevices, peripheral];
        }
        return prevDevices;
      });
    };

    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);

    return () => {
      bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
    };
  }, []);

  const startScan = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need access to your location to scan for BLE devices.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission denied');
        return;
      }
    }

    setDevices([]);
    setIsScanning(true);
    BleManager.scan([], 5, true).then(() => {
      console.log('Scanning...');
    });
    setTimeout(() => {
      setIsScanning(false);
      BleManager.stopScan().then(() => {
        console.log('Scan stopped');
      });
    }, 10000);
  };

  return (
    <View style={styles.container}>
      <Button
        title={isScanning ? 'Scanning...' : 'Start Scan'}
        onPress={startScan}
        disabled={isScanning}
      />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceContainer}>
            <Text style={styles.deviceText}>{item.name ? item.name : 'Unnamed Device'}</Text>
            <Text style={styles.deviceId}>{item.id}</Text>
          </View>
        )}
        contentContainerStyle={styles.deviceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  deviceContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deviceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deviceId: {
    fontSize: 14,
    color: '#777',
  },
  deviceList: {
    marginTop: 20,
  },
});

export default Bluetoothsystem;
