/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-native-paper";

import styles from "./CustomButtonStyles";

export default function CustomButton({ mode, style, textColor, ...props }) {
	return (
		<Button
			style={[
				styles.button,
				mode === "outlined" && { backgroundColor: "#CAC4CE" },
				style,
			]}
			labelStyle={styles.text, {color: textColor}}
			mode={mode}
			color="#04355D"
			{...props}
		/>
	);
}

