// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <Text style={styles.title}>Velkommen til Virtus</Text>

      <Text style={styles.subtitle}>Din personlige workout tracker</Text>

      <View style={styles.buttonContainer}>
        <Button 
          title="Opret ny workout" 
          onPress={() => router.push('/(tabs)/startWorkout')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});
