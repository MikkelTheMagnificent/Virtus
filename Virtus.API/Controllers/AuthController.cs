using Microsoft.AspNetCore.Mvc;
using Virtus.API.Services;
using Microsoft.AspNetCore.Authorization;

namespace Virtus.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly JwtService _jwtService;

    public AuthController(JwtService jwtService)
    {
        _jwtService = jwtService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        // TODO: validate against DB via UserService/IUserRepository (for actual user from DB)
        if (request.Username == "admin" && request.Password == "password123") 
        {
            var token = _jwtService.GenerateToken("1", request.Username);
            return Ok(new { token });
        }

        return Unauthorized("Invalid credentials");
    }
}

public record LoginRequest(string Username, string Password);