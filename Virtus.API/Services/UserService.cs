using Virtus.API.Interfaces;
using Virtus.API.Models;
using MongoDB.Driver;
using Microsoft.Extensions.Options;

namespace Virtus.API.Services;

public class UserService : IUserService
{
    private readonly IMongoCollection<User> _userCollection;
    private readonly IUserRepository _userRepository;

    public UserService(IMongoClient mongoClient, IOptions<MongoDbSettings> mongoDbSettings)
    {
        var database = mongoClient.GetDatabase(mongoDbSettings.Value.DatabaseName);
        _userCollection = database.GetCollection<User>(mongoDbSettings.Value.CollectionName);
    }



    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }


    public async Task<User> CreateUserAsync(User user)
    {
        await _userRepository.CreateUserAsync(user);
        return user;
    }


    public async Task<User?> GetUserByIdAsync(string id)
    {
        return await _userRepository.GetUserByIdAsync(id);
    }


    public async Task<List<User>> GetAllUsersAsync()
    {
        return (await _userRepository.GetAllUsersAsync()).ToList();
    }


    public async Task UpdateUserAsync(User user)
    {
        await _userRepository.UpdateUserAsync(user);
    }


    public async Task DeleteUserAsync(string id)
    {
        await _userRepository.DeleteUserAsync(id);
    }
}