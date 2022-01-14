using ip_backend_pixelAPI.Data;
using ip_backend_pixelAPI.Data.Verification;
using ip_backend_pixelAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Controllers
{
    [ApiController]
    [EnableCors]
    public class LoginController : ControllerBase
    {
        private readonly ILogin _login;
        private readonly IUserData _userData;
        private readonly IVerification _verification;
        public LoginController(ILogin login, IUserData userData ,IVerification verification)
        {
            _login = login;
            _userData = userData;
            _verification = verification;
        }

        [HttpPost]
        [Route("api/[controller]/login")]
        public IActionResult Login(UserDTO user)
        {
            UserDTO currentUser = _userData.GetUserByEmail(user.Email);
            if (currentUser == null) return NotFound();
            if (currentUser.Password != user.Password) return Unauthorized();

            string verificationCode = _verification.GenerateCode(currentUser);
            if (verificationCode == null) return Unauthorized();

            currentUser.VerificationCode = verificationCode;
            UserDTO fullyLoggedInUser = _login.Login(currentUser);
            if (fullyLoggedInUser == null) return Unauthorized();

            fullyLoggedInUser.Password = 0;
            return Ok(fullyLoggedInUser);
        }

        [HttpPost]
        [Route("api/[controller]/logout")]
        public IActionResult Logout(UserDTO user)
        {
            UserDTO currentUser = _userData.GetUserByEmail(user.Email);
            if (currentUser == null) return NotFound();
            if (currentUser.VerificationCode != user.VerificationCode) return Unauthorized();

            if (_login.Logout(currentUser)) return Ok(true);
            return Ok(false);
        }

        [HttpPost]
        [Route("api/[controller]/register")]
        public IActionResult Register(UserDTO user)
        {
            if(user.Email != null)
            {
                string verificationCode = _verification.GenerateCode(user);
                if (verificationCode == null) return Unauthorized();

                user.VerificationCode = verificationCode;
                UserDTO newUser = _userData.AddUser(user);
                if (newUser == null) return Unauthorized();

                newUser.Password = 0;
                return Ok(newUser);
            }

            return NotFound();
            
        }
    }
}
