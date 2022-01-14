/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { View, SafeAreaView } from "react-native";
//import SafeAreaView from "react-native-safe-area-view";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "../HomeStack/homeStack";
import DrawingStack from "../DrawingStack/drawingStack";

import Logout from "../../screens/Login/Logout/logout";



const RootDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HomeStack,
	},
	Drawing: {
		screen: DrawingStack,
	}
},
{
	contentComponent:(props) => (
		<View style={{flex:1}}>
			<SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
				<DrawerItems {...props} />
				<Logout />
			</SafeAreaView>
		</View>
	)
},
{
	edgeWidth: -110
}

);

export default createAppContainer(RootDrawerNavigator);