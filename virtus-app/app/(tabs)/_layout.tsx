import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="startWorkout"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarItemStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
          textAlign: 'center',
          marginTop: 6,
        },

        tabBarStyle: {
          backgroundColor: '#1c1c1e',
          height: 102,
          paddingTop: 12,
          paddingBottom: 15,
          paddingHorizontal: 0,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5, 
        },

        tabBarIconStyle: {
          marginTop: 2,
        },

        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({ color }) => {
          const name =
            route.name === 'profile' ? 'person' :
            route.name === 'history' ? 'time' :
            route.name === 'statistics' ? 'bar-chart' :
            route.name === 'startWorkout' ? 'add-circle' :
            route.name === 'diet' ? 'restaurant' : 'ellipse';
          return <Ionicons name={name as any} size={24} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="history" options={{ title: 'History' }} />

      <Tabs.Screen
        name="startWorkout"
        options={{
          title: 'Start Workout',
          tabBarItemStyle: { flex: 1.35 },

          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={34} color={color} style={{ marginTop: -3 }} />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color,
                fontWeight: focused ? '600' : '500',
                fontSize: 13,
                textAlign: 'center',
                width: '100%',
                marginTop: 6,
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.85}
              ellipsizeMode="clip"
            >
              Start Workout
            </Text>
          ),
        }}
      />

      <Tabs.Screen name="statistics" options={{ title: 'Statistics' }} />
      <Tabs.Screen name="diet" options={{ title: 'Diet' }} />
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="+not-found" options={{ href: null }} />
    </Tabs>
  );
}
