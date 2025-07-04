namespace Virtus.API.Models
{
    public class User
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; }
        public string Email { get; set; }

        public List<string> FollowingUserIds { get; set; } = new List<string>();
    }
}