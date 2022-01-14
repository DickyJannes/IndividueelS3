/* eslint-disable react/prop-types */
import React from "react";
import { Text, SafeAreaView} from "react-native";
import CustomButton from "../../components/General/CustomButton/CustomButton";


export default function Home({ navigation }) {


	const pressHandler = () => {
		navigation.navigate("Lobby");
	};

	return(
		<SafeAreaView>
			<Text>Home Screen!</Text>
			{/* <Button title='go to lobby' onPress={pressHandler} /> */}
			<CustomButton textColor="#CAC4CE" mode="contained" onPress={pressHandler}>Go to lobby</CustomButton>
		</SafeAreaView>
	);
}