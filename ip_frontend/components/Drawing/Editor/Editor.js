import React, { useState } from "react";
import { View, Text, TextInput, Button, Switch} from "react-native";
import ColorPalette from "react-native-color-palette";

import DrawingPanel from "../DrawingPanel/DrawingPanel";
import Grid from "../GridOverlay/Grid/Grid";
import editorStyles from "./editorStyle";

export default function Editor() {
	const [panelWidth, setPanelWidth] = useState(8);
	const [panelHeight, setPanelHeight] = useState(8);
	const [hideOptions, setHideOptions] = useState(false);
	const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
	const [hideWidthHeightError, setHideWidthHeightError] = useState(false);
	const [buttonText, setButtonText] = useState("start drawing");
	const [selectedColor, setColor] = useState("#FFFFFF");
	const [newBackground, setBackground] = useState("#C0C1BB");

	const [isEnabled, setIsEnabled] = useState(false);
	const [hideGrid, setHideGrid] = useState(false);

	function toggleSwitch() {
		setIsEnabled(previousState => !previousState);
		setHideGrid(!hideGrid);

	} 

	function initializeDrawingPanel() {
		if(panelHeight <= 4 || panelWidth <= 4 || panelHeight >= 19 || panelWidth >= 19)
		{
			setHideWidthHeightError(true);
			return;
		}
		setHideWidthHeightError(false);
		setHideOptions(!hideOptions);
		setHideDrawingPanel(!hideDrawingPanel);

		if(isEnabled){
			setHideGrid(!hideGrid);
		}

		buttonText === "start drawing"
			? setButtonText("reset")
			: setButtonText("start drawing");
	}

	function changeColor(color) {
		setColor(color); 
	}

	function changeBackgroundColor(color) {
		setBackground(color); 
	}

  
	return (
		
		<View style={editorStyles.editor}>
			<Text style={editorStyles.h1}>Pixel Editor</Text>
			{hideDrawingPanel && <Text style={editorStyles.h2}>Enter Panel Dimensions</Text>}
			{hideWidthHeightError && <Text style={editorStyles.errorMessage}>Height / width must be between 5 and 18 pixels</Text> }
			{hideDrawingPanel && (
				<View style={{alignItems: "center", justifyContent: "center"}}>
					<View style={editorStyles.options}>
						<View style={editorStyles.option}>
							<TextInput
								testID="inputWidth"
								style={editorStyles.panelInput}
								keyboardType='numeric'
								value={panelWidth}
								onChange={(e) => { setPanelWidth(e.target.value);} 
								} 
							/>
							<Text>Width</Text>
						</View>
						<View style={editorStyles.option}>
							<TextInput
								style={editorStyles.panelInput}
								keyboardType='numeric'
								value={panelHeight}
								onChange={(e) => { setPanelHeight(e.target.value);} 
								} 
							/>
							<Text>Height</Text>
						</View>
					</View>
					<ColorPalette
						onChange={changeBackgroundColor}
						defaultColor={newBackground}
						colors={["#C0C1BB", "#000000", "#FFFFFF", "#8B4513", "#FC2727", "#FE7001", "#F6FF00", "#10FF00", "#015411", "#0771FF", "#241ED9", "#550068"]}
						title={"Backgroundcolor"}
						titleStyles={{fontSize: 30}}
					/>
				</View>
			)}
			<Button onPress={initializeDrawingPanel} title={buttonText}/>
			
			{hideOptions && (
				<ColorPalette
					onChange={changeColor}
					defaultColor={selectedColor}
					colors={["#FFFFFF", "#000000", "#C0C1BB", "#8B4513", "#FC2727", "#FE7001", "#F6FF00", "#10FF00", "#015411", "#0771FF", "#241ED9", "#550068"]}
					title={"Pixelcolor"}
					titleStyles={{fontSize: 30}}
				/>
			)}

			{hideOptions && (
				<Switch
					trackColor={{ false: "#767577", true: "#81b0ff" }}
					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
			)}

			<View style={editorStyles.wrapper}>
				<View style={editorStyles.drawingPanel}>
					{hideOptions && (
						<DrawingPanel 
							testID="drawingPanel"
							width={panelWidth}
							height={panelHeight}
							selectedColor = {selectedColor}
							newBackground = {newBackground}
						/>
					)}
				</View>
				<View style={editorStyles.grid}>
					{hideGrid && (
						<Grid 
							width={panelWidth}
							height={panelHeight}
							selectedColor = {selectedColor}
						/>
					)}
				</View>
			</View>
		</View>
		

	);
}


