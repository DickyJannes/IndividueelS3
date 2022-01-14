/* eslint-disable react/prop-types */
import React from "react";
import { View, Text} from "react-native";

import styles from "./messageContainerStyle";

const MessageContainer = ({ messages }) => {

	return <View style={styles.container}> 
		{messages.map((m, index) => 
			<View key={index} style={styles.messageContainer}>
				<View style={styles.message}><Text>{m.message}</Text></View>
				<View style={styles.userName}><Text>{m.user}</Text></View>
			</View>
		)}
	</View>;
};

export default MessageContainer;