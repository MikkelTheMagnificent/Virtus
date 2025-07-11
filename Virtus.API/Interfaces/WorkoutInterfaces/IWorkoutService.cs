using Virtus.API.DTOs;
using Virtus.API.Models;

namespace Virtus.API.Interfaces
{
    public interface IWorkoutService
    {
        Task<IEnumerable<WorkoutDto>> GetWorkoutsByUserAsync(string userId);
        Task<WorkoutDto> GetWorkoutByIdAsync(string id);
        Task CreateWorkoutAsync(Workout workout);
        Task UpdateWorkoutAsync(Workout workout);
        Task DeleteWorkoutAsync(string id);
    }
}
