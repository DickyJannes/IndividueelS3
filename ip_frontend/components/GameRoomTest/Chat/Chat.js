/* eslint-disable react/prop-types */
import React from "react";
import { View, Button} from "react-native";
import MessageContainer from "../MessageContainer/MessageContainer";
import SendMessageInput from "../SendMessageInput/SendMessageInput";

import styles from "./chatSyle";

const Chat = ({ messages, sendMessage, closeConnection }) => <View>
	<View style={styles.leave}>
		<Button title='Leave Room' onPress={() => closeConnection()} />
	</View>
	<View style={styles.chatContainer}>
		<MessageContainer messages={messages} />
		<SendMessageInput sendMessage={sendMessage}/>
	</View>
</View>;

export default Chat;