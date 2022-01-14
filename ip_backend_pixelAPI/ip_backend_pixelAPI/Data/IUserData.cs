using ip_backend_pixelAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Data
{
    public interface IUserData
    {
        List<UserDTO> GetAllUsers();
        UserDTO GetUserByEmail(string email);
        UserDTO AddUser(UserDTO user);
        UserDTO UpdateUser(UserDTO currentUser);
    }
}
