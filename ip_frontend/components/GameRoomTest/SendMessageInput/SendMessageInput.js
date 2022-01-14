/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, TextInput, Button} from "react-native";

const SendMessageInput = ({ sendMessage }) => {

	const [message, setMessage] = useState("");

	const pressHandler = () => {
		sendMessage(message);
		setMessage("");
	};

	return(
		<View>
			<TextInput value={message} onChangeText={setMessage} placeholder="message"/>
			<Button title='Send' onPress={pressHandler} disabled={!message}/>
		</View>
	);
};

export default SendMessageInput;