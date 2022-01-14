import React, { useState } from "react";
import { View, Text} from "react-native";
import Lobby from "../../components/GameRoomTest/Lobby/Lobby";
import Chat from "../../components/GameRoomTest/Chat/Chat";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

export default function LobbyRoom() {
	const [connection, setConnection] = useState();
	const [messages, setMessages] = useState([]);

	const joinRoom = async (user, room) => {
		try {
			const connection = new HubConnectionBuilder()
				.withUrl("https://localhost:5001/gamelobby")
				.configureLogging(LogLevel.Information)
				.build();

			connection.on("ReceiveMessage", (user, message) => {
				setMessages(messages => [...messages, {user, message }]);
			});

			connection.onclose(() => {
				setConnection();
				setMessages([]);
			});

			await connection.start();
			await connection.invoke("JoinRoom", {user, room});
			setConnection(connection);
		}
		catch(e) {
			console.log(e);
		}
	};

	const createRoom = async (user) => {
		try {
			const connection = new HubConnectionBuilder()
				.withUrl("https://localhost:5001/gamelobby")
				.configureLogging(LogLevel.Information)
				.build();

			connection.on("ReceiveMessage", (user, message) => {
				setMessages(messages => [...messages, {user, message }]);
			});

			connection.onclose(() => {
				setConnection();
				setMessages([]);
			});
            
			await connection.start();
			await connection.invoke("CreateRoom", {user});
			setConnection(connection);
		}
		catch(e) {
			console.log(e);
		}
	};

	const closeConnection = async () => {
		try {
			await connection.stop();
		}
		catch (e) {
			console.log(e);
		}
	};

	const sendMessage = async (message) => {
		try {
			await connection.invoke("SendMessage", message);
		}
		catch (e){
			console.log(e);
		}
	};

	return(
		<View>
			<Text>Lobby Screen</Text>
			{!connection
				? <Lobby joinRoom={joinRoom} createRoom={createRoom} />
				: <Chat messages={messages} sendMessage={sendMessage} 
					closeConnection={closeConnection} />
			}   
		</View>
	);
}