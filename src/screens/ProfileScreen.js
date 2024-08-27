import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication methods

const ProfileScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const auth = getAuth(); // Get Firebase Authentication instance

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      // Set profile information from Firebase Authentication
      setUserProfile({
        ...userProfile,
        email: user.email || '',
      });
    } else {
      Alert.alert('Error', 'No user is currently signed in.');
    }
  }, [auth.currentUser]);

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Perform sign-out logic
      navigation.navigate('SignIn'); // Navigate to SignIn screen
    } catch (error) {
      Alert.alert('Error', `Sign-out failed: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{userProfile.firstName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value}>{userProfile.lastName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userProfile.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{userProfile.phone}</Text>
      </View>

      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#0047AB',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
