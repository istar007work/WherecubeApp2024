// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/home.back.jpg')} // Adjust the path based on your project structure
      style={styles.background}
    >
      <View style={styles.overlayContainer}>
        {/* Scan button in the middle */}
        <TouchableOpacity 
          style={styles.scanButton} 
          onPress={() => navigation.navigate('Scan')}
        >
          <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableOpacity>
        
        {/* Footer text at the bottom */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Welcome to Geo App 2024</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the whole screen
    justifyContent: 'center', // Center items vertically
    alignItems: 'center',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center', // Center items vertically within the background
    alignItems: 'center',
    padding: 20,
  },
  scanButton: {
    backgroundColor: '#ffff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginBottom: 40, // Space between button and footer text
  },
  scanButtonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#ffff',
  },
});

export default HomeScreen;
