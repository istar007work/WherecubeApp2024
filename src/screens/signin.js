// src/screens/SignInScreen.js
import React, { useState } from 'react';
import theme from '../colors/theme';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
    // On successful sign in, navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo_image}
        source={require('../../assets/geologo2.png')} 
      />
      <View style={styles.formContainer}>
        <Text style={styles.signintext}>Sign In</Text>
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
        <Button title="Sign In" onPress={handleSignIn} style={styles.button} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor:theme.colors.background
  },
  logo_image: {
    width: 100,
    height: 75,
    resizeMode: 'contain',
    alignSelf: 'center', // Center the image horizontally
    marginTop: 70, // Add margin to separate from the form
    marginBottom: -40
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
  signintext: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    
    
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  signUpText: {
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1434A4',
    color: '#1434A4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
