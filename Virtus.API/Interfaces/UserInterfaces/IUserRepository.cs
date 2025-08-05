using MongoDB.Driver;
using Virtus.API.Models;

namespace Virtus.API.Interfaces
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task<User?> GetUserByIdAsync(string Id);
        Task CreateUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task UpdateUserAsync(FilterDefinition<User> filter, UpdateDefinition<User> update);
        Task DeleteUserAsync(string Id);
    }
}