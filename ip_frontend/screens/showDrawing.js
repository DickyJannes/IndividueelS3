/* eslint-disable react/prop-types */
import React from "react";
import { View, Text} from "react-native";
import drawingStyles from "../components/Drawing/DrawingPanel/drawingPanelStyle";

export default function Lobby({navigation}) {
	return(
		<View style={{backgroundColor: "#131313", flex: 1}}>
			<View style={drawingStyles.pixels}>
				{navigation.getParam("rows", "mislukt")}
			</View>
			<Text style={{color: "#fff"}}>Lobby Screen</Text>
		</View>
	);
}