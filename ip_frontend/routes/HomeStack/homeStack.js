import { createStackNavigator } from "react-navigation-stack";
import Home from "../../screens/Home/home";
import LobbyRoom from "../../screens/LobbyRoom/lobbyRoom";
import Header from "../../components/Navigation/Header/header";
import React from "react";

const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return{
				headerTitle: () => <Header navigation={navigation} title='Home'/>,
			};
		}
        
	},
	Lobby: {
		screen: LobbyRoom,
		navigationOptions: {
			title: "Lobby"
		}
	}
};

const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#444",
		headerStyle: { backgroundColor: "#eee", height: 60}
	}
});

export default HomeStack;