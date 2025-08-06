import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import ProfileScreen from '@/app/(tabs)/profile';
import HistoryScreen from '@/app/(tabs)/history';
import StatisticsScreen from '@/app/(tabs)/statistics';
import StartWorkoutScreen from '@/app/(tabs)/startWorkout';
import DietScreen from '@/app/(tabs)/diet';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarItemStyle: {
      width: 80, // 🔹 tvungent fast bredde (øges fra fx 70)
      justifyContent: 'center',
    },
    tabBarLabel: ({ focused, color }) => {
      const routeLabel =
        route.name === 'StartWorkout'
          ? 'Start Workout'
          : route.name === 'Diet'
          ? 'Meal Planner'
          : route.name;

      return (
        <Text
          style={{
            color,
            fontSize: 13,
            fontWeight: focused ? '600' : '400',
            textAlign: 'center',
            flexWrap: 'nowrap',    
          }}
          numberOfLines={1}        
          allowFontScaling={false}
          adjustsFontSizeToFit={true} 
        >
          {routeLabel}
        </Text>
      );
    },
    tabBarIcon: ({ color, size, focused }) => {
      let iconName: keyof typeof Ionicons.glyphMap;
      let iconSize = size;

      switch (route.name) {
        case 'Profile':
          iconName = 'person';
          break;
        case 'History':
          iconName = 'time';
          break;
        case 'Statistics':
          iconName = 'bar-chart';
          break;
        case 'StartWorkout':
          iconName = 'add-circle';
          break;
        case 'Diet':
          iconName = 'restaurant';
          break;
        default:
          iconName = 'ellipse';
      }

      return <Ionicons name={iconName} size={24} color={color} />;

    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: '#111',
      height: 95,
      paddingTop: 10,
      paddingBottom: 15,
      borderTopWidth: 0,
    },
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
