// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icon


const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/home_back.jpg')} // Adjust the path based on your project structure
      style={styles.background}
    >
      <View style={styles.overlayContainer}>
        {/* Logo */}
        <Image 
          source={require('../../assets/geologo.png')} // Adjust the path based on your project structure
          style={styles.logo}
        />

        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Scan')}
        >
          <Text style={styles.buttonText}>Bluetooth</Text>
        </TouchableOpacity>
        
        {/* Bluetooth Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Bluetooth')}
        >
          <Text style={styles.buttonText}>QR Code</Text>
        </TouchableOpacity>
        
        {/* Enter Manually Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ManualEntry')}
        >
          <Text style={styles.buttonText}>Enter Manually</Text>
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
    marginTop: -200,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10, // Space between logo and first button
    resizeMode: 'contain',
    alignSelf: 'center', // Center the image horizontally
  },
  button: {
    backgroundColor: '#ffff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginBottom: 20, // Space between buttons
    width: 250, // Fixed width for all buttons
    alignItems: 'center', // Center text horizontally within the button
  },
  buttonText: {
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
