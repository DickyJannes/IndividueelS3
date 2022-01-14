/* eslint-disable react/prop-types */
import React from "react";
import { ImageBackground, KeyboardAvoidingView } from "react-native";
import styles from "./BackgroundStyles";

export default function Background({ children }) {
	return (
		<ImageBackground
			// eslint-disable-next-line no-undef
			source={require("../../../assets/background_black.png")}
			resizeMode="repeat"
			style={styles.background}
		>
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				{children}
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}
