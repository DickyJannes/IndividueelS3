/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";

import Pixel from "../Pixel/Pixel";
import rowStyles from  "./rowStyle";

export default function Row(props) {
	const {width, selectedColor, newBackground} = props;

	let pixels = [];

	for (let i = 0; i < width; i++) {
		pixels.push(<Pixel key={i} selectedColor={selectedColor} newBackground={newBackground}/>);
	}

	return <View style={rowStyles.row}>{pixels}</View>;
}