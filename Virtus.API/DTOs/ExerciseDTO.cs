public class ExerciseDto
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public int Sets { get; set; }
    public int Reps { get; set; }
    public double Weight { get; set; }
    public string Category { get; set; } = string.Empty;
    public DateTime Duration { get; set; }
    public string Notes { get; set; } = string.Empty;
    
}