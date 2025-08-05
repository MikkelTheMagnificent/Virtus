using Virtus.API.Interfaces;
using Virtus.API.Models;
using Virtus.API.Repositories;
using Virtus.API.DTOs;
using MongoDB.Driver;


namespace Virtus.API.Services;

public class WorkoutRepository : IWorkoutRepository
{
    private readonly IMongoCollection<Workout> _workouts;

    public WorkoutRepository(IConfiguration config)
    {
        var ConnectionString = config["MongoDbSettings:ConnectionString"];
        var DatabaseName = config["MongoDbSettings:DatabaseName"];

        var client = new MongoClient(ConnectionString);
        var database = client.GetDatabase(DatabaseName);
        _workouts = database.GetCollection<Workout>("Workout");
    }
        
         public async Task<IEnumerable<Workout>> GetWorkoutsByUserAsync(string userId)
        {
            return await _workouts.Find(Workout => Workout.UserId == userId).ToListAsync();
        }


        public async Task<Workout?> GetWorkoutByIdAsync(string id)
        {
            return await _workouts.Find(Workout => Workout.Id == id).FirstOrDefaultAsync();
        }


        public async Task CreateWorkoutAsync(string userId, Workout workout)
        {
            workout.UserId = userId;
            await _workouts.InsertOneAsync(workout);
        }


        public async Task UpdateWorkoutAsync(Workout workout)
        {
            await _workouts.ReplaceOneAsync(w => w.Id == workout.Id, workout);
        }


        public async Task DeleteWorkoutAsync(string id)
        {
            await _workouts.DeleteOneAsync(Workout => Workout.Id == id);
        }

}