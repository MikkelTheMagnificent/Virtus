import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';

import ProfileScreen from '@/app/(tabs)/profile';
import HistoryScreen from '@/app/(tabs)/history';
import StatisticsScreen from '@/app/(tabs)/statistics';
import StartWorkoutScreen from '@/app/(tabs)/startWorkout';
import DietScreen from '@/app/(tabs)/friends';

const Tab = createBottomTabNavigator();

const palette = {
  gold: '#C89B06',
  cream: '#F6EED9',
  tabBg: '#19140F',
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="StartWorkout"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarLabel: ({ focused, color }) => {
          const label = route.name === 'StartWorkout' ? 'Start Workout' : route.name;
          return (
            <Text
              style={{ color, fontSize: 13, fontWeight: focused ? '600' : '400' }}
              numberOfLines={1}
            >
              {label}
            </Text>
          );
        },

        tabBarIcon: ({ color, focused }) => {
          let name: keyof typeof Ionicons.glyphMap;
          switch (route.name) {
            case 'Profile':
              name = focused ? 'person' : 'person-outline';
              break;
            case 'History':
              name = focused ? 'time' : 'time-outline';
              break;
            case 'Statistics':
              name = focused ? 'bar-chart' : 'bar-chart-outline';
              break;
            case 'StartWorkout':
              name = focused ? 'add' : 'add-outline';
              break;
            case 'Friends':
              name = focused ? 'people' : 'people-outline';
              break;
            default:
              name = 'ellipse';
          }
          return <Ionicons name={name} size={22} color={color} />;
        },

        tabBarActiveTintColor: palette.gold,
        tabBarInactiveTintColor: palette.cream,

        // Floating pill
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 24,
          height: 64,
          paddingTop: 6,
          paddingBottom: Platform.select({ ios: 12, android: 10 }),
          backgroundColor: palette.tabBg,
          borderTopWidth: 0,
          borderRadius: 28,
          shadowColor: '#000',
          shadowOpacity: 0.35,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 12,
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarBackground: () => null,
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="StartWorkout" component={StartWorkoutScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Diet" component={DietScreen} />
    </Tab.Navigator>
  );
}
