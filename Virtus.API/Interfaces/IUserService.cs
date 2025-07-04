using Virtus.API.Models;

namespace Virtus.API.Interfaces;

public interface IUserService
{
    Task<User> CreateUserAsync(User user);
    Task<User?> GetUserByIdAsync(string id);
    Task<List<User>> GetAllUsersAsync();
    Task UpdateUserAsync(User user);
    Task DeleteUserAsync(string id);
}