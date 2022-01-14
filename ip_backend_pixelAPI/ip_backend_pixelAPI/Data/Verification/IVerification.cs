using ip_backend_pixelAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Data.Verification
{
    public interface IVerification
    {
        string GenerateCode(UserDTO user);
        bool VerifyUser(string email, string verificationCode);
    }
}
