// app/(tabs)/startWorkout.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StartWorkoutScreen() {
  const handleStartWorkout = () => {
    console.log('Workout started');
  };

  const handleAddTemplate = () => {
    console.log('Add template');
  };

  const handleAddFolder = () => {
    console.log('Add folder');
  };

  return (
    <View style={styles.container}>
      {/* Quick Start */}
      <Text style={styles.sectionTitle}>Quick Start</Text>
      <View style={styles.divider} />

      {/* Start workout button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartWorkout}>
        <Text style={styles.startButtonText}>Start an Empty Workout</Text>
      </TouchableOpacity>

      {/* Templates header med knapper */}
      <View style={styles.templatesHeader}>
        <Text style={styles.TemplateTitle}>Templates</Text>
        <View style={styles.templateButtons}>
          <TouchableOpacity style={styles.iconButton} onPress={handleAddTemplate}>
            <Ionicons name="add" size={16} color="#0a84ff" />
            <Text style={styles.iconButtonText}>Template</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleAddFolder}>
            <Ionicons name="folder" size={16} color="#0a84ff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#1c1c1e',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
    marginTop: 60,
    textAlign: 'center',
  },
  TemplateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  divider: {
    height: 2,
    backgroundColor: '#2c2c2e',
    width: '40%',
    marginBottom: 12,
  },
  startButton: {
    backgroundColor: '#0a84ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  templatesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  templateButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  iconButtonText: {
    color: '#0a84ff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
});
