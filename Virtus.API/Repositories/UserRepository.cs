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
            var client = new MongoClient(config.GetConnectionString("VirtusDatabase"));
            var database = client.GetDatabase("VirtusDatabase");
            _users = database.GetCollection<User>("Users");
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