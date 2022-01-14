/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, TextInput, Button} from "react-native";

import styles from "./lobbyStyle";

const Lobby = ({ joinRoom, createRoom }) => {
	const [user, setUser] = useState("");
	const [room, setRoom] = useState("");

	const pressHandlerJoin = () => {
		joinRoom(user, room);
	};

	const pressHandlerCreate = () => {
		createRoom(user);
	};

	return(
		<View style={styles.lobby}>
			<TextInput value={user} onChangeText={setUser} placeholder="sick user"/>
			<TextInput value={room} onChangeText={setRoom} placeholder="123123123" keyboardType="numeric"/>
			<Button title='Join' onPress={pressHandlerJoin} disabled={!user || !room}/>
			<Button title='Create' onPress={pressHandlerCreate} disabled={user || room}/>
		</View>
	);
};

export default Lobby;