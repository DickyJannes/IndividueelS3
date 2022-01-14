import React from "react";
import {View, Button } from "react-native";
import { AuthContext } from "../../../components/context";

export default function StartScreen() {
	const { signOut } = React.useContext(AuthContext);

	return (
		<View style={{position: "fixed", left: 0, bottom: 50, width: "100%"}}>
			<Button title="Logout" onPress={() => signOut()}/>
		</View>
	);
}