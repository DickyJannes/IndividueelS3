/* eslint-disable react/prop-types */
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "./ButtonBackStyles";

export default function ButtunBack({ goBack }) {
	return (
		<TouchableOpacity onPress={goBack} style={styles.container}>
			<Image
				style={styles.image}
				// eslint-disable-next-line no-undef
				source={require("../../../assets/arrow_back.png")}
			/>
		</TouchableOpacity>
	);
}

