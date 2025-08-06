export interface ExerciseDTO {
    name: string;
    sets: number;
    reps: number;
}

export interface WorkoutDTO {
    name: string;
    date: string;
    exercises: ExerciseDTO[];
}
