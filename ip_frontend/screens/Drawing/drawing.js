/* eslint-disable react/prop-types */
import React from "react";
import { View, Button} from "react-native";
import Editor from "../../components/Drawing/Editor/Editor";


import Row from "../../components/Drawing/Row/Row";

export default function Drawing({ navigation }) {

	const pressHandler = () => {
		navigation.navigate("ShowDrawing", {rows: rows});
	};

	let rows = [];

	for(let i = 0; i < 10; i++){
		rows.push(<Row key={i} width={10} selectedColor={"#fff"} newBackground={"#fff"}/>);
	}

	return(
		<View>
			<Editor />
			<Button title='go to lobby' onPress={pressHandler} />
		</View>
	);
}



