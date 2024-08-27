import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icons

// Import screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SignUpScreen from '../screens/signup';
import SignInScreen from '../screens/signin';
import Bluetoothsystem from '../screens/scan';
import ProfileScreen from '../screens/ProfileScreen';
import DeviceStatus from '../screens/device';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Device':
              iconName = 'devices';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0047AB', // Active tab icon color
        tabBarInactiveTintColor: 'gray', // Inactive tab icon color
        tabBarStyle: {
          backgroundColor: 'black', // Background color of the tab bar
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Device" component={DeviceStatus} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};


// Define Main Navigator
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{
        headerStyle: {
          backgroundColor: 'black', // Set header background to black
        },
        headerTintColor: 'white', // Set header text color to white
      }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Scan" component={Bluetoothsystem} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
        {/* You can include other screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
