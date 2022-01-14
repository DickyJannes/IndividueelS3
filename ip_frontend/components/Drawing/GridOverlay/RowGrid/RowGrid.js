/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";

import Pixel from "../PixelGrid/PixelGrid";
import rowStyles from  "../../Row/rowStyle";

export default function Row(props) {
	const {width} = props;

	let pixels = [];

	for (let i = 0; i < width; i++) {
		pixels.push(<Pixel key={i}/>);
	}

	return <View style={rowStyles.row}>{pixels}</View>;
}