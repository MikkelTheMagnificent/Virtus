import { WorkoutDTO } from "../constants/WorkoutDTO";

const BASE_URL = "http://localhost:5073/api"; // Husk at ændre til din IP ved mobiltest

export async function startWorkout(userId: string, workoutData: any) {
  const response = await fetch(`http://localhost:5073/api/workouts/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workoutData),
  });

  if (!response.ok) {
    throw new Error('Failed to create workout');
  }

  return await response.json();
}

