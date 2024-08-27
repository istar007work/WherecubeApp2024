import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication methods
import { useNavigation } from '@react-navigation/native'; // Use navigation hook

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Use navigation hook to navigate

  const handleSignIn = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      const auth = getAuth(); // Get Firebase Authentication instance
      await signInWithEmailAndPassword(auth, email, password);

      // On successful sign-in, navigate to Home screen
      navigation.navigate('Main', { screen: 'Home' });
    } catch (error) {
      // Handle sign-in errors
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'Incorrect password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'No user found with this email.');
      } else {
        Alert.alert('Error', `An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/app_backs (1).png')} // Adjust the path based on your project structure
      style={styles.background}
    >
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
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with transparency
  },
  logo_image: {
    width: 100,
    height: 75,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: -40,
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
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#cccccc',
  },
  signUpText: {
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0047AB',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
