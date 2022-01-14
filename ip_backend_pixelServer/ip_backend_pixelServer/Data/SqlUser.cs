using ip_backend_pixelServer.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelServer.Data
{
    public class SqlUser : IUser
    {
        private GameContext _gameContext;
        public SqlUser(GameContext gameContext)
        {
            this._gameContext = gameContext;
        }

        //DAL methods
    }
}
