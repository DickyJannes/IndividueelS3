import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Start from "../../screens/Login/Start/start";
import SignUp from "../../screens/Login/SignUp/signUp";
import Register from "../../screens/Login/Register/register";
import Header from "../../components/Navigation/Header/header";
import React from "react";

const screens = {
	Start: {
		screen: Start,
		navigationOptions: ({ navigation }) => {
			return{
				headerTitle: () => <Header navigation={navigation} title='Home'/>,
			};
		}
        
	},
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			title: "Lobby"
		}
	},
	Register: {
		screen: Register,
		navigationOptions: {
			title: "Lobby"
		}
	}
};

const LoginStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerShown: false,
		drawerLockMode: "locked-open",
	}
});

export default createAppContainer(LoginStack);