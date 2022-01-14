import React from "react";
import { View } from "react-native";

//import pixelStyles from "../styles/pixel";

export default function Pixel() {

	return (
		<View style={{backgroundColor: "transparent", 
			width: "1.5rem", 
			height: "1.5rem", 
			borderColor: "white",
			borderWidth: 2,
			borderRadius: 0}}
		></View>
	);
}