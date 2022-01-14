/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";

import Background from "../../../components/General/CustomBackground/Background";
import PixelLogo from "../../../components/General/PixelLogo/PixelLogo";
import HeaderText from "../../../components/General/HeaderText/HeaderText";
import CustomButton from "../../../components/General/CustomButton/CustomButton";
import CustomInput from "../../../components/General/CustomInput/CustomInput";
import ButtonBack from "../../../components/General/ButtonBack/ButtonBack";
import { emailValidator } from "../../../components/Login/Helpers/EmailValidatorHelper";
import { passwordValidator } from "../../../components/Login/Helpers/PasswordValidatorHelper";
import { nameValidator } from "../../../components/Login/Helpers/NameValidatorHelper";
import { PasswordHasherHelper } from "../../../components/Login/Helpers/PasswordHasherHelper";


import { AuthContext } from "../../../components/context";
import User from "./User";

import styles from "./registerStyles";

export default function RegisterScreen({ navigation }) {
	const { signUp } = React.useContext(AuthContext);

	const [name, setName] = useState({ value: "", error: "" });
	const [userName, setUserName] = useState({ value: "", error: "" });
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

	const pressHandler = () => {
		const nameError = nameValidator(name.value);
		const userNameError = nameValidator(userName.value);
		const emailError = emailValidator(email.value);
		const passwordError = passwordValidator(password.value, confirmPassword.value);

		if (emailError || passwordError || nameError) {
			setName({ ...name, error: nameError });
			setUserName({ ...userName, error: userNameError });
			setEmail({ ...email, error: emailError });
			setPassword({ ...password, error: passwordError });

			if(passwordError == "Passwords must be equal."){
				setConfirmPassword({ ...confirmPassword, error: passwordError });
			}
			
			return;
		}

		let hashedPass = PasswordHasherHelper(password.value);
		var user = new User(email.value, userName.value, hashedPass, name.value, null);
		signUp(user);
	};

	return (
		<Background>
			<ButtonBack goBack={navigation.goBack} />
			<PixelLogo />
			<HeaderText>Create Account</HeaderText>
			
			<CustomInput
				label="Name"
				value={name.value}
				onChangeText={(text) => setName({ value: text, error: "" })}
				error={!!name.error}
				errorText={name.error}
			/>
			<CustomInput
				label="Username"
				value={userName.value}
				onChangeText={(text) => setUserName({ value: text, error: "" })}
				error={!!userName.error}
				errorText={userName.error}
			/>
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
			<CustomInput
				label="Confirm Password"
				value={confirmPassword.value}
				onChangeText={(text) => setConfirmPassword({ value: text, error: "" })}
				error={!!confirmPassword.error}
				errorText={confirmPassword.error}
				secureTextEntry
			/>
			<CustomButton textColor="#CAC4CE" mode="contained" onPress={pressHandler} style={styles.button}>Sign Up</CustomButton>

			<View style={styles.row}>
				<Text style={styles.text}>Already have an account? </Text>
				<TouchableOpacity onPress={() => navigation.replace("SignUp")}>
					<Text style={styles.link}>Login</Text>
				</TouchableOpacity>
			</View>
		</Background>
	);
}

