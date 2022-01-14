/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { View } from "react-native";

//import pixelStyles from "../styles/pixel";

export default function Pixel(props) {
	const {selectedColor, newBackground} = props;

	const [pixelColor, setPixelColor] = useState(newBackground);
	const [oldColor, setOldColor] = useState(pixelColor);
	const [canChangeColor, setCanChangeColor] = useState(true);

	function applyColor() {
		setPixelColor(selectedColor);
		setCanChangeColor(false);
	}
    
	function changeColorOnHover() {
		setOldColor(pixelColor);
		setPixelColor(selectedColor);
        
	}
    
	function resetColor() {
		if (canChangeColor) {
			setPixelColor(oldColor);
		}
    
		setCanChangeColor(true);
	}
  
	return (
		<View style={{backgroundColor: pixelColor, 
			width: "1.5rem", 
			height: "1.5rem", 
			opacity: 0.9,
			borderColor: "gray",
			borderWidth: 0,
			borderRadius: 0}}
		onClick={applyColor}
		onMouseEnter={changeColorOnHover}
		onMouseLeave={resetColor}
		></View>
	);
}