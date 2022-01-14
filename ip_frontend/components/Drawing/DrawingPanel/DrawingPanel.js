/* eslint-disable react/prop-types */
import React, {useRef} from "react";
import { View, Button } from "react-native";
import { exportComponentAsPNG } from "react-component-export-image";

import drawingStyles from "./drawingPanelStyle";
import Row from "../Row/Row";

export default function DrawingPanel(props) {
	const {width, height, selectedColor, newBackground} = props;
	const panelRef = useRef();
	let rows = [];

	for(let i = 0; i < height; i++){
		rows.push(<Row key={i} width={width} selectedColor={selectedColor} newBackground={newBackground}/>);
	}
    

	return (
		<View style={drawingStyles.drawingPanel}>
			<View style={drawingStyles.pixels} ref={panelRef}>
				{rows}
			</View>
			<Button onPress={() => exportComponentAsPNG(panelRef)} title="Export as png" />
		</View>
	);
}