using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Virtus.API.Models;
public class Exercise
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

    [BsonElement("name")]
    public string Name { get; set; } = string.Empty;

    [BsonElement("sets")]
    public int Sets { get; set; }

    [BsonElement("reps")]
    public int Reps { get; set; }

    [BsonElement("weight")]
    public double Weight { get; set; }

    [BsonElement("duration")]
    public TimeSpan Duration { get; set; } = TimeSpan.Zero;

    [BsonElement("notes")]
    public string Notes { get; set; } = string.Empty;
}