import React, { useEffect, useMemo } from "react";
import { View, ActivityIndicator } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./routes/Drawer/drawer";
import LoginStack from "./routes/LoginStack/loginStack";

import { PasswordHasherHelper } from "./components/Login/Helpers/PasswordHasherHelper";
import { AuthContext } from "./components/context";
import User from "./screens/Login/Register/User";
import AsyncStorage from "@react-native-community/async-storage";
import Background from "./components/General/CustomBackground/Background";

EStyleSheet.build();


export default function App() {
	// const [isLoading, setIsLoading] = useState(true);
	// const [userToken, setUserToken] = useState(null);

	const initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null,
	};

	const loginReducer = (prevState, action) => {
		switch( action.type ) {
		case "RETRIEVE":
			return {
				...prevState,
				userToken: action.token,
				isLoading: false,
			};
		case "LOGIN":
			return {
				...prevState,
				userName: action.id,
				userToken: action.token,
				isLoading: false,
			};
		case "LOGOUT":
			return {
				...prevState,
				userName: null,
				userToken: null,
				isLoading: false,
			};
		case "REGISTER":
			return {
				...prevState,
				userName: action.id,
				userToken: action.token,
				isLoading: false,
			};

		}
	};

	const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

	const authContext = useMemo(() => ({
		signIn: async(email, password) => {
			// setUserToken("test");
			// setIsLoading(false);
			let hashedPass = PasswordHasherHelper(password);
			let userToken;
			userToken = null;
			var user = new User(email, null, hashedPass, null, null);
			//TODO: change to api
			let respJson = null;
			try {
				let respUser = await fetch("https://localhost:5011/api/Login/login", {
					method: "POST",
					body: JSON.stringify(user), // The data
					headers: { "Content-Type": "application/json; charset=UTF-8" } // The type of data you're sending
				});
				respJson = await respUser.json();
			}
			catch(e){
				console.log(e);
			}

			if (respJson != null){
				
				try {
					userToken = respJson.verificationCode;
					await AsyncStorage.setItem("userToken", userToken);
					await AsyncStorage.setItem("userEmail", respJson.email);
				}
				catch(e){
					console.log(e);
				}
			}
			console.log("token:" + userToken);
			dispatch({ type: "LOGIN", id: respJson.email, token: userToken});
		},
		signOut: async() => {
			// setUserToken(null);
			// setIsLoading(false);
			
			let email = await AsyncStorage.getItem("userEmail");
			let vCode = await AsyncStorage.getItem("userToken");
			var user = new User(email, null, 0, null, vCode);
			let respJson = null;

			try {
				let respUser = await fetch("https://localhost:5011/api/Login/logout", {
					method: "POST",
					body: JSON.stringify(user), // The data
					headers: { "Content-Type": "application/json; charset=UTF-8" } // The type of data you're sending
				});
				respJson = await respUser.json();
			}
			catch(e){
				console.log(e);
			}
			console.log("result = " + respJson);
			if(respJson == true)
			{
				try {
					await AsyncStorage.removeItem("userToken");
				}
				catch(e){
					console.log(e);
				}
				dispatch({ type: "LOGOUT"});
				return;
			}
			alert("Logout failed. Please try again.");

		},
		signUp: async(user) => {
			let userToken;
			userToken = null;
			//TODO: change to api
			let respJson = null;

			try {
				let respUser = await fetch("https://localhost:5011/api/Login/register", {
					method: "POST",
					body: JSON.stringify(user), // The data
					headers: { "Content-Type": "application/json; charset=UTF-8" } // The type of data you're sending
				});
				respJson = await respUser.json();
			}
			catch(e){
				console.log(e);
			}
			
			if (respJson != null){
				
				try {
					userToken = respJson.verificationCode;
					await AsyncStorage.setItem("userToken", userToken);
					await AsyncStorage.setItem("userEmail", respJson.email);
				}
				catch(e){
					console.log(e);
				}
			}
			console.log("token:" + userToken);
			dispatch({ type: "REGISTER", id: respJson.email, token: userToken});

		},
	}), []);

	useEffect(() => {
		setTimeout( async() => {
			//setIsLoading(false);
			let userToken = null;
			try {
				userToken = await AsyncStorage.getItem("userToken");
			}
			catch(e){
				console.log(e);
			}

			dispatch({ type: "RETRIEVE", token: userToken});
		}, 1000);
	}, []);

	if( loginState.isLoading) {
		return(
			<Background>
				<View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
					<ActivityIndicator size="large" color="white"/>
				</View>
			</Background>
		);
	}
	return (
		<AuthContext.Provider value={authContext}>
			{ loginState.userToken != null && <Navigator />}
			{ loginState.userToken == null && <LoginStack/>}
		</AuthContext.Provider>
	);
}

