using MongoDB.Driver;
using Virtus.API.Interfaces;
using Virtus.API.Models;

namespace Virtus.API.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMongoCollection<User> _users;

        public UserRepository(IConfiguration config)
        {
            var ConnectionString = config["MongoDbSettings:ConnectionString"];
            var DatabaseName = config["MongoDbSettings:DatabaseName"];

            var client = new MongoClient(ConnectionString);
            var database = client.GetDatabase(DatabaseName);
            _users = database.GetCollection<User>("User");
        }


        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _users.Find(user => true).ToListAsync();
        }


        public async Task<User?> GetUserByIdAsync(string id)
        {
            return await _users.Find(user => user.Id == id).FirstOrDefaultAsync();
        }


        public async Task CreateUserAsync(User user)
        {
            await _users.InsertOneAsync(user);
        }


        public async Task UpdateUserAsync(User user)
        {
            await _users.ReplaceOneAsync(u => u.Id == user.Id, user);
        }


        public async Task DeleteUserAsync(string id)
        {
            await _users.DeleteOneAsync(user => user.Id == id);
        }
    }
}