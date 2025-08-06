import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createWorkout } from '../scripts/api';

export default function CreateWorkoutScreen() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [exercises, setExercises] = useState([{ name: "", sets: 0, reps: 0 }]);

   const handleSubmit = async () => {
    try {
      await createWorkout("din-user-id-her", {
        name,
        date,
        exercises,
      });
      alert("Workout oprettet!");
    } catch (err) {
      console.error(err);
      alert("Fejl ved oprettelse.");
    }
  };

  return (
    <View>
      <Text>Workout Navn</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Dato</Text>
      <TextInput value={date} onChangeText={setDate} placeholder="2025-08-06T10:00:00" />
      {/* Her kan du lave flere inputs til øvelser */}
      <Button title="Opret workout" onPress={handleSubmit} />
    </View>
  );

}

