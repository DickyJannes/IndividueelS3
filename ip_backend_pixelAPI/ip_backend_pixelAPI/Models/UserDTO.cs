using System;
using System.ComponentModel.DataAnnotations;

namespace ip_backend_pixelAPI.Models
{
    public class UserDTO
    {
        [Key]
        [Required]
        public string Email { get; set; }
        public string UserName { get; set; }
        public int Password { get; set; }
        public string FullName { get; set; }
        public string VerificationCode { get; set; }
    }
}
