/* eslint-disable react/prop-types */

//Basic imports
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

//Custom component imports
import Background from "../../../components/General/CustomBackground/Background";
import PixelLogo from "../../../components/General/PixelLogo/PixelLogo";
import HeaderText from "../../../components/General/HeaderText/HeaderText";
import CustomButton from "../../../components/General/CustomButton/CustomButton";
import CustomInput from "../../../components/General/CustomInput/CustomInput";
import ButtonBack from "../../../components/General/ButtonBack/ButtonBack";
import { emailValidator } from "../../../components/Login/Helpers/EmailValidatorHelper";
import { passwordValidator } from "../../../components/Login/Helpers/PasswordValidatorHelper";

import { AuthContext } from "../../../components/context";

//Style imports
import styles from "./signUpStyles";

export default function LoginScreen({ navigation }) {
	const { signIn } = React.useContext(AuthContext);

	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });

	const onLoginPressed = () => {
		const emailError = emailValidator(email.value);
		const passwordError = passwordValidator(password.value);

		if (emailError || passwordError) {
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });
			return;
		}

		console.log("Logged in");
		//TODO: Verder met signin
		signIn(email.value, password.value);
	};

	return (
		<Background>
			<ButtonBack goBack={navigation.goBack} />
			<PixelLogo />
			<HeaderText>Welcome back!</HeaderText>

			<CustomInput
				label="Email"
				value={email.value}
				onChangeText={(text) => setEmail({ value: text, error: "" })}
				error={!!email.error}
				errorText={email.error}
				keyboardType="email-address"
			/>
			<CustomInput
				label="Password"
				value={password.value}
				onChangeText={(text) => setPassword({ value: text, error: "" })}
				error={!!password.error}
				errorText={password.error}
				secureTextEntry
			/>

			<CustomButton textColor="#CAC4CE" mode="contained" onPress={onLoginPressed}>Login</CustomButton>

			<View style={styles.row}>
				<Text style={styles.text}>No account yet? </Text>
				<TouchableOpacity onPress={() => navigation.replace("Register")}>
					<Text style={styles.link}>Register Now</Text>
				</TouchableOpacity>
			</View>
		</Background>
	);
}

