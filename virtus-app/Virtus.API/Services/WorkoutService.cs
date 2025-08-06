using Virtus.API.Interfaces;
using Virtus.API.Models;
using Virtus.API.Repositories;
using Virtus.API.DTOs;
using MongoDB.Driver;

namespace Virtus.API.Services;

public class WorkoutService : IWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;

    public WorkoutService(IWorkoutRepository workoutRepository)
    {
        _workoutRepository = workoutRepository;
    }

    public async Task<IEnumerable<WorkoutDto>> GetWorkoutsByUserAsync(string userId)
    {
        var workouts = await _workoutRepository.GetWorkoutsByUserAsync(userId);

        return workouts.Select(w => new WorkoutDto
        {
            Id = w.Id,
            Name = w.Name,
            Date = w.Date,
            Notes = w.Notes,
            Exercises = w.Exercises.Select(e => new ExerciseDto
            {
                Name = e.Name,
                Sets = e.Sets,
                Reps = e.Reps,
                Weight = e.Weight
            }).ToList()
        });
    }

    public async Task<WorkoutDto> GetWorkoutByIdAsync(string id)
    {
        var workout = await _workoutRepository.GetWorkoutByIdAsync(id);
        if (workout == null)
        {
            throw new KeyNotFoundException($"Workout with ID {id} not found.");
        }

        return new WorkoutDto
        {
            Id = workout.Id,
            Name = workout.Name,
            Date = workout.Date,
        };
    }

    public async Task CreateWorkoutAsync(Workout dto)
    {
        var workout = new Workout
        {
            Id = Guid.NewGuid().ToString(),
            UserId = dto.UserId,
            Name = dto.Name,
            Date = dto.Date,
            Exercises = dto.Exercises.Select(e => new Exercise
            {
                Name = e.Name,
                Sets = e.Sets,
                Reps = e.Reps,
                Weight = e.Weight
            }).ToList()
        };

        await _workoutRepository.CreateWorkoutAsync(workout);
    }


    public async Task UpdateWorkoutAsync(Workout dto)
    {
        var existingWorkout = await _workoutRepository.GetWorkoutByIdAsync(dto.Id);
        if (existingWorkout == null)
        {
            throw new KeyNotFoundException($"Workout with ID {dto.Id} not found.");
        }

        existingWorkout.Name = dto.Name;
        existingWorkout.Date = dto.Date;
        existingWorkout.Exercises = dto.Exercises.Select(e => new Exercise
        {
            Name = e.Name,
            Sets = e.Sets,
            Reps = e.Reps,
            Weight = e.Weight
        }).ToList();

        await _workoutRepository.UpdateWorkoutAsync(existingWorkout);
    }


    public async Task DeleteWorkoutAsync(string id)
    {
        var existingWorkout = await _workoutRepository.GetWorkoutByIdAsync(id);
        if (existingWorkout == null)
        {
            throw new KeyNotFoundException($"Workout with ID {id} not found.");
        }

        await _workoutRepository.DeleteWorkoutAsync(id);
    }

}