using Microsoft.AspNetCore.Mvc;
using Virtus.API.Interfaces;
using Virtus.API.Models;
using Virtus.API.Services;

namespace Virtus.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WorkoutController : ControllerBase
    {

        private readonly IWorkoutService _workoutService;

        public WorkoutController(IWorkoutService workoutService)
        {
            _workoutService = workoutService;
        }


        [HttpGet("getByUser/{userId}")]
        public async Task<IActionResult> GetWorkoutsByUserAsync(string userId)
        {
            var workouts = await _workoutService.GetWorkoutsByUserAsync(userId);
            return Ok(workouts);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetWorkoutById(string id)
        {
            var workout = await _workoutService.GetWorkoutByIdAsync(id);
            if (workout == null)
            {
                return NotFound();
            }
            return Ok(workout);
        }


        [HttpPost("createWorkout")]
        public async Task<IActionResult> CreateWorkout([FromBody] Workout workout, string userId)
        {
            if (workout == null)
            {
                return BadRequest("Workout cannot be null");
            }

            await _workoutService.CreateWorkoutAsync(userId, workout);
            return CreatedAtAction(nameof(GetWorkoutById), new { id = workout.Id }, workout);
        }


        [HttpPut("updateWorkout")]
        public async Task<IActionResult> UpdateWorkout([FromBody] Workout workout)
        {

            var existingWorkout = await _workoutService.GetWorkoutByIdAsync(workout.Id);
            if (existingWorkout == null)
            {
                return NotFound();
            }

            await _workoutService.UpdateWorkoutAsync(workout);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkout(string id, [FromBody] Workout workout)
        {
            var result = await _workoutService.GetWorkoutByIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }

            await _workoutService.DeleteWorkoutAsync(id);
            return NoContent();
        }


    }
}