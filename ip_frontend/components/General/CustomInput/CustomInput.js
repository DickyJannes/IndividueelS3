/* eslint-disable react/prop-types */
import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

import styles from "./CustomInputStyles";

export default function CustomInput({ errorText, description, ...props }) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				selectionColor= "#00a7e1"
				outlineColor="#cac3ce"
				activeOutlineColor="#00a7e1"
				underlineColor="transparent"
				mode="outlined"
				{...props}
			/>
			
			{description && !errorText ? (
				<Text style={styles.description}>{description}</Text>
			) : null}
			{errorText ? <Text style={styles.error}>{errorText}</Text> : null}
		</View>
	);
}

