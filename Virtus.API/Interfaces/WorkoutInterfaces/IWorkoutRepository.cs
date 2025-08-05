using Virtus.API.Models;
using Virtus.API.DTOs;

public interface IWorkoutRepository
{
    Task<IEnumerable<Workout>> GetWorkoutsByUserAsync(string userId);
    Task<Workout?> GetWorkoutByIdAsync(string id);
    Task CreateWorkoutAsync(string userId,Workout workout);
    Task UpdateWorkoutAsync(Workout workout);
    Task DeleteWorkoutAsync(string id);
}