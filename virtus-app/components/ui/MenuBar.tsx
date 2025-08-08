import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function MenuBar() {
  const router = useRouter();
  const navigate = (path: string) => router.replace(path as any); // undgå back-stack af menuklik

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
          <TouchableOpacity key={item.label} onPress={() => navigate(item.path)} style={styles.leftItem}>
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
    justifyContent: 'space-between', // venstre gruppe og højre knap på samme linje
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
    alignItems: 'center',
    flex: 1,                         // fyld vandret plads
    marginRight: 12,
    justifyContent: 'space-evenly',  // lige afstand mellem punkter
  },
  leftItem: {
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  createWorkout: {
    fontWeight: 'bold',
    color: '#00ffff',
    marginLeft: 12,
  },
});
