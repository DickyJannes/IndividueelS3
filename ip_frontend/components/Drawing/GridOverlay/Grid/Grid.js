/* eslint-disable react/prop-types */
import React from "react";
import { View } from "react-native";

import drawingStyles from "../../DrawingPanel/drawingPanelStyle";
import Row from "../RowGrid/RowGrid";

export default function DrawingPanel(props) {
	const {width, height } = props;
    
	let rows = [];

	for(let i = 0; i < height; i++){
		rows.push(<Row key={i} width={width}/>);
	}
    

	return (
		<View style={drawingStyles.drawingPanel}>
			<View style={drawingStyles.pixels}>
				{rows}
			</View>
		</View>
	);
}