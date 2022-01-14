using ip_backend_pixelServer.Enums;
using System.ComponentModel.DataAnnotations;

namespace ip_backend_pixelServer.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(50)]
        [Required]
        public string UserName { get; set; }

        public Language UserLanguage { get; set; }

        public int TotalPoints { get; set; }

        public int Wins { get; set; }

        public int Loses { get; set; }

        public double WinningPercentage { get; set; }
    }
}