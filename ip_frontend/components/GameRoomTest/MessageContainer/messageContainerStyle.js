import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "40%",
		alignItems: "flex-end",
		backgroundColor: "white",
		overflow: "auto",
		borderRadius: 5,
		marginBottom: 2
	},
	messageContainer: {
		textAlign: "right",
		paddingHorizontal: 5,
		fontSize: 18
	},
	message: {
		display: "inline-flex",
		marginTop: 3,
		marginBottom: "auto",
		padding: 5,
		fontSize: 18,
		color: "white",
		borderRadius: 20,
	},
	userName: {
		fontSize: 10,
		marginBottom: 3,
		marginRight: 5
	}
});

export default styles;