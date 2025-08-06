using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Virtus.API.Models
{
    public class Workout
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

        [BsonElement("userId")]
        public string UserId { get; set; } = string.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("exercises")]
        public List<Exercise> Exercises { get; set; } = new List<Exercise>();

        [BsonElement("notes")]
        public string Notes { get; set; } = string.Empty;
    }
}