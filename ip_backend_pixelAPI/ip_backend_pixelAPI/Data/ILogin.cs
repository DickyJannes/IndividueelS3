using ip_backend_pixelAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Data
{
    public interface ILogin
    {
        UserDTO Login(UserDTO user);
        bool Logout(UserDTO user);
    }
}
