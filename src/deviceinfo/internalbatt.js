// src/deviceinfo/internalbatt.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const InternalBattery = () => {
  const [batteryLevel, setBatteryLevel] = useState('50%'); // Dummy data

  useEffect(() => {
    // Add actual battery level fetching logic here
    // Example:
    // const getBatteryLevel = async () => {
    //   // Fetch battery level and update state
    // };
    // getBatteryLevel();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Internal Battery</Text>
      <Text style={styles.batteryLevel}>{batteryLevel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  batteryLevel: {
    color: '#fff',
    fontSize: 14,
  },
});

export default InternalBattery;
