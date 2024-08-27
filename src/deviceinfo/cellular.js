// src/deviceinfo/cellular.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const CellularSignal = () => {
  const [signalStrength, setSignalStrength] = useState('75%'); // Dummy data

  useEffect(() => {
    // Add actual cellular signal fetching logic here
    // Example:
    // const getSignalStrength = async () => {
    //   // Fetch signal strength and update state
    // };
    // getSignalStrength();
  }, []);

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Cellular Signal</Text>
      <Text style={styles.signalStrength}>{signalStrength}</Text>
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
  signalStrength: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CellularSignal;
