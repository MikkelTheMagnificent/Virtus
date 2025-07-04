namespace Virtus.API.DTOs
{
    public class WorkoutDto
    {
        public string Id { get; set; }
        public string? Name { get; set; }
        public DateTime Date { get; set; }
        public List<ExerciseDto>? Exercises { get; set; }
        public string Notes { get; set; } = string.Empty;

    }
}
