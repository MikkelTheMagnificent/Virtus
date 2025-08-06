import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuBar() {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path as any);
  };

  const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Templates', path: '/templates' },
  { label: 'Statistics', path: '/statistics' },
  { label: 'Diet', path: '/(tabs)/diet' },
];


  return (
    <View style={styles.menuBar}>
      <View style={styles.leftMenu}>
        {menuItems.map((item) => (
  <TouchableOpacity key={item.label} onPress={() => navigate(item.path)}>
    <Text style={styles.menuItem}>{item.label}</Text>
  </TouchableOpacity>
))}

      </View>
      <TouchableOpacity onPress={() => navigate('/createWorkout')}>
        <Text style={[styles.menuItem, styles.createWorkout]}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  leftMenu: {
    flexDirection: 'row',
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    marginRight: 12,
  },
  createWorkout: {
    fontWeight: 'bold',
    color: '#00ffff',
  },
});
