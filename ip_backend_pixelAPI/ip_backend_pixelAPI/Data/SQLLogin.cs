using ip_backend_pixelAPI.Context;
using ip_backend_pixelAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Data
{
    public class SQLLogin : ILogin
    {
        private readonly PixelContext _pixelContext;
        public SQLLogin(PixelContext pixelContext)
        {
            _pixelContext = pixelContext;
        }

        public UserDTO Login(UserDTO user)
        {
            UserDTO currentUser = _pixelContext.Users.Find(user.Email);
            if (currentUser == null) return null;

            currentUser.VerificationCode = user.VerificationCode;
            _pixelContext.Users.Update(currentUser);
            _pixelContext.SaveChanges();
            return currentUser;
        }

        public bool Logout(UserDTO user)
        {
            UserDTO currentUser = _pixelContext.Users.Find(user.Email);
            if (currentUser == null) return false;

            currentUser.VerificationCode = "";
            _pixelContext.Users.Update(currentUser);
            _pixelContext.SaveChanges();
            return true;
        }
    }
}
