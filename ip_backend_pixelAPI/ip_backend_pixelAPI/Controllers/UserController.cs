using ip_backend_pixelAPI.Data;
using ip_backend_pixelAPI.Data.Verification;
using ip_backend_pixelAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Controllers
{
    [ApiController]
    [EnableCors]
    public class UserController : ControllerBase
    {
        private readonly IUserData _userData;
        private readonly IVerification _verification;
        public UserController(IUserData userData, IVerification verification)
        {
            _userData = userData;
            _verification = verification;
        }

        [HttpPost]
        [Route("api[controller]/{email}/{verificationCode}")]
        public IActionResult AddUser(string email, string verificationCode, UserDTO user)
        {
            if(_verification.VerifyUser(email, verificationCode))
            {
                if(user.Email != null)
                {
                    UserDTO newUser = _userData.AddUser(user);
                    return Ok(newUser);
                }

                return NotFound();
            }

            return Unauthorized();
        }

        [HttpPatch]
        [Route("api[controller]/{email}/{verificationCode}")]
        public IActionResult UpdateUser(string email, string verificationCode, UserDTO user)
        {
            if (_verification.VerifyUser(email, verificationCode))
            {
                if (user.Email != null)
                {
                    _userData.UpdateUser(user);
                    return Ok();
                }

                return NotFound();
            }

            return Unauthorized();
        }
    }   
}
