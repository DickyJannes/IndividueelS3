using ip_backend_pixelAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelAPI.Context
{
    public class PixelContext : DbContext
    {   
        public PixelContext(DbContextOptions<PixelContext> options) : base(options)
        { 

        }
        public DbSet<UserDTO> Users { get; set; }
    }
}
