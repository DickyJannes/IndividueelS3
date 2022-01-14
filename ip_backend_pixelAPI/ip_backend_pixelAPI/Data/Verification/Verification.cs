using ip_backend_pixelAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Data.Verification
{
    public class Verification : IVerification
    {
        private readonly IUserData _userData;

        public Verification(IUserData userData)
        {
            _userData = userData;
        }

        public string GenerateCode(UserDTO user)
        {
                if (user.Email != null)
                {
                    Random random = new Random();
                    const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    return new string(Enumerable.Repeat(chars, 10)
                        .Select(s => s[random.Next(s.Length)]).ToArray());
                }
                return null;
        }

        public bool VerifyUser(string email, string verificationCode)
        {
            UserDTO currentUser = _userData.GetUserByEmail(email);

            if (currentUser.VerificationCode == verificationCode) return true;
            return false;
        }


    }
}
