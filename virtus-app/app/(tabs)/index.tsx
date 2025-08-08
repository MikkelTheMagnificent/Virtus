// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';

export default function Index() {
  // Send brugeren direkte ind i tabs på Start Workout
  return <Redirect href="/(tabs)/startWorkout" />;
}
