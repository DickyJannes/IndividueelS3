import { createStackNavigator } from "react-navigation-stack";
import Drawing from "../../screens/Drawing/drawing";
import ShowDrawing from "../../screens/showDrawing";

import Header from "../../components/Navigation/Header/header";
import React from "react";

const screens = {
	Drawing: {
		screen: Drawing,
		navigationOptions: ({ navigation }) => {
			return{
				headerTitle: () => <Header navigation={navigation} title='Drawing' />,
			};
		}
	},
	ShowDrawing: {
		screen: ShowDrawing,
		navigationOptions: ({ navigation }) => {
			return{
				headerTitle: () => <Header navigation={navigation} title='Showing Drawing' />,
			};
		}
	}
};

const DrawingStack = createStackNavigator(screens);

export default DrawingStack;