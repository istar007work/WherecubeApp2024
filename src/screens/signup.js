// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication functions
import { auth } from '../../firebaseConfig'; // Import Firebase auth from your config

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password === confirmPassword) {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Optionally, handle user additional setup here (e.g., store user info in Firestore)

        // Show success alert
        Alert.alert('Success', 'Account created successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Main', { screen: 'Home' }) },
        ]);
      } catch (error) {
        Alert.alert('Error', `Error: ${error.message}`);
      }
    } else {
      Alert.alert('Error', 'Passwords do not match');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/3827.jpg')} // Adjust the path based on your project structure
      style={styles.background}
    >
      <View style={styles.container}>
        <Image 
          style={styles.logo_image}
          source={require('../../assets/geologo2.png')} 
        />
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInText}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginBottom: 100,
  },
  logo_image: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor:'#cccccc',
  },
  button: {
    backgroundColor: '#0047AB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInText: {
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default SignUpScreen;
