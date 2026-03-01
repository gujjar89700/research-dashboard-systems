import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import MembershipScreen from './screens/MembershipScreen';
import TrainingScreen from './screens/TrainingScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import VideosScreen from './screens/VideosScreen';
import InstagramScreen from './screens/InstagramScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Membership') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Training') {
            iconName = focused ? 'fitness' : 'fitness-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === 'Instagram') {
            iconName = focused ? 'logo-instagram' : 'logo-instagram';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e74c3c',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#2c3e50',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Membership" component={MembershipScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="Instagram" component={InstagramScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
} 