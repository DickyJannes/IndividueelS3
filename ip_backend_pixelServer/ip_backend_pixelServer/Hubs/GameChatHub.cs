using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ip_backend_pixelServer.Hubs
{
    public class GameChatHub : Hub
    {
        private readonly string _bot;
        private readonly IDictionary<string, UserConnection> _connections;

        private static Dictionary<string, int> clientCount = new Dictionary<string, int>();

        private static Random random = new Random();

        private static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public GameChatHub(IDictionary<string, UserConnection> connections)
        {
            _bot = "bot";
            _connections = connections;
        }

        public async Task CreateRoom(UserConnection userConnection)
        {
            userConnection.Room = RandomString(5);
            int count = 0;
            while (clientCount.TryGetValue(userConnection.Room, out count))
            {
                userConnection.Room = RandomString(5);
            };
            
         
            clientCount.Add(userConnection.Room, 1);// add group and set its client number to 1
         

            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);
            _connections[Context.ConnectionId] = userConnection;

            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _bot,
                $"Successfully created room: {userConnection.Room}");
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
           

            int count = 0;
            if (clientCount.TryGetValue(userConnection.Room, out count))
            {
                 clientCount[userConnection.Room] = count + 1;//increment client number

                await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);
                _connections[Context.ConnectionId] = userConnection;

                await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _bot,
                    $"{userConnection.User} has joined {userConnection.Room}");
            }
            else
            {
                await Clients.Client(Context.ConnectionId).SendAsync("ReceiveMessage", _bot,
                    $"{userConnection.Room} isn't a valid roomcode. Leave and retry.");
            }
               

            
        }

        

        public override Task OnDisconnectedAsync(Exception exception)
        {
            if(_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                _connections.Remove(Context.ConnectionId);
                Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", _bot, $"{userConnection.User} has left this room");
            }
            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(string message)
        {
            if(_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                await Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", userConnection.User, message);
            }
        }
    }
}
