// src/screens/DeviceScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InternalBattery from '../deviceinfo/internalbatt';
import CellularSignal from '../deviceinfo/cellular';

const DeviceScreen = () => {
  return (
    <View style={styles.container}>
      {/* View 1 */}
      <View style={styles.box}>
        <Text style={styles.text}>Data 1</Text>
      </View>

      {/* View 2 */}
      <View style={styles.box}>
        <InternalBattery />
        <Text style={styles.text}>Data 2</Text>
      </View>

      {/* View 3 */}
      <View style={styles.box}>
        <CellularSignal />
        <Text style={styles.text}>Data 3</Text>
      </View>

      {/* View 4 */}
      <View style={styles.box}>
        <Text style={styles.text}>Data 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0', // Simple background color
  },
  box: {
    justifyContent: 'center',
    alignItems: 'left',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff', // White background for each box
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: '#000', // Black text color for better readability
    fontWeight: 'bold',
    marginTop: 10, // Space between content and text
  },
});

export default DeviceScreen;
