/* eslint-disable react/prop-types */
import React from "react";

import Background from "../../../components/General/CustomBackground/Background";
import PixelLogo from "../../../components/General/PixelLogo/PixelLogo";
import HeaderText from "../../../components/General/HeaderText/HeaderText";
import CustomButton from "../../../components/General/CustomButton/CustomButton";

export default function StartScreen({ navigation }) {
	return (
		<Background>
			<PixelLogo />
			<HeaderText>Welcome to Pixel</HeaderText>

			<CustomButton textColor="#CAC4CE" mode="contained" onPress={() => navigation.navigate("SignUp")}>Login</CustomButton>
			<CustomButton textColor="#04355D" mode="outlined" onPress={() => navigation.navigate("Register")}>Sign Up</CustomButton>
		</Background>
	);
}