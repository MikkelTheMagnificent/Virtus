import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text, Platform, View } from 'react-native';

const palette = {
  gold: '#C89B06',
  cream: '#F6EED9',
  tabBg: '#211B12',
};

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="startWorkout"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarLabel: ({ focused, color }) => {
          const map: Record<string, string> = {
            profile: 'Profile',
            history: 'History',
            startWorkout: 'Start Workout',
            statistics: 'Statistics',
            friends: 'Friends',
          };
          const label = map[route.name] ?? route.name;

          return (
            <Text
              style={{ color, fontSize: 13, fontWeight: focused ? '600' : '400' }}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.8}
            >
              {label}
            </Text>
          );
        },

        tabBarIcon: ({ color, focused }) => {
          let name: keyof typeof Ionicons.glyphMap;
          switch (route.name) {
            case 'profile':
              name = focused ? 'person' : 'person-outline';
              return <Ionicons name={name} size={22} color={color} />;
            case 'history':
              name = focused ? 'time' : 'time-outline';
              return <Ionicons name={name} size={22} color={color} />;
            case 'statistics':
              name = focused ? 'bar-chart' : 'bar-chart-outline';
              return <Ionicons name={name} size={22} color={color} />;
            case 'friends':
              name = focused ? 'people' : 'people-outline';
              return <Ionicons name={name} size={22} color={color} />;
            case 'startWorkout':
              return (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginBottom: 4,
                    backgroundColor: focused ? palette.gold : '#2A2219',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Ionicons
                    name="add"
                    size={24}
                    color={focused ? palette.tabBg : palette.cream}
                  />
                </View>
              );
            default:
              return <Ionicons name="ellipse" size={22} color={color} />;
          }
        },

        tabBarActiveTintColor: palette.gold,
        tabBarInactiveTintColor: palette.cream,

        tabBarStyle: {
          position: 'absolute',
          width: '95%',
          bottom: Platform.select({ ios: 40, android: 28 }),
          height: 72,
          paddingTop: 10,
          marginLeft: 10,
          paddingBottom: Platform.select({ ios: 14, android: 12 }),
          backgroundColor: palette.tabBg,
          borderTopWidth: 0,
          borderRadius: 28,
          shadowColor: '#000',
          shadowOpacity: 0.35,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 12,
          overflow: 'visible', 
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible',
        },
      })}
    >
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />

      <Tabs.Screen
        name="startWorkout"
        options={{
          title: 'Start Workout',
          tabBarItemStyle: { flex: 1.25 },
          tabBarIconStyle: { marginTop: -1 }, 
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{ color, fontSize: 13, fontWeight: focused ? '600' : '400', marginTop: 2 }}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.85}
            >
              Start Workout
            </Text>
          ),
        }}
      />

      <Tabs.Screen name="statistics" options={{ title: 'Statistics' }} />
      <Tabs.Screen name="friends" options={{ title: 'Friends' }} />

      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="+not-found" options={{ href: null }} />
    </Tabs>
  );
}
