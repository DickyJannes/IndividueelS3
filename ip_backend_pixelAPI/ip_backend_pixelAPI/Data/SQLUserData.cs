using ip_backend_pixelAPI.Context;
using ip_backend_pixelAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Data
{
    public class SQLUserData : IUserData
    {
        private readonly PixelContext _pixelContext;
        public SQLUserData(PixelContext pixelContext)
        {
            _pixelContext = pixelContext;
        }
        //Getall
        //getemail
        //add
        //update
        public List<UserDTO> GetAllUsers()
        {
            return _pixelContext.Users.ToList();
        }

        public UserDTO GetUserByEmail(string email)
        {
            return _pixelContext.Users.Find(email);
        }

        public UserDTO AddUser(UserDTO user)
        {
            UserDTO currentUser = _pixelContext.Users.Find(user.Email);
            if (currentUser != null) return null;

            _pixelContext.Users.Add(user);
            _pixelContext.SaveChanges();
            return user;
        }

        public UserDTO UpdateUser(UserDTO user)
        {
            UserDTO currentUser = _pixelContext.Users.Find(user.Email);
            if (currentUser == null) return null;

            currentUser.UserName = user.UserName;
            currentUser.FullName = user.FullName;

            _pixelContext.Users.Update(currentUser);
            _pixelContext.SaveChanges();
            return currentUser;
        }
    }
}
