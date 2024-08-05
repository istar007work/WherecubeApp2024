import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = () => {
    // Perform any sign-out logic here (e.g., clear user data)
    // Navigate to SignIn screen
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Information</Text>
      {/* Add more profile details here */}
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
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

export default ProfileScreen;
