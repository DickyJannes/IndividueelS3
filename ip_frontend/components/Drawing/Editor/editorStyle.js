import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
	editor: {
		backgroundColor: "#2b2929",
		borderColor: "red",
		borderWidth: 1,
		borderRadius: "0.25rem",
		paddingVertical: "1.5rem",
		paddingHorizontal: "4rem",
		marginTop: "2rem",
		marginBottom: "2rem",

		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	errorMessage: {
		fontSize: 16,
		color: "red"
	},
	h1: {
		display: "block",
		fontSize: "2rem",
		marginTop: "0.67rem",
		marginBottom: "1.5rem",
		marginLeft: 0,
		marginRight: 0,
		fontWeight: "bold"
	},
	h2: {
		display: "block",
		fontSize: "1.5rem",
		marginTop: "0.83rem",
		marginBottom: "1rem",
		marginLeft: 0,
		marginRight: 0,
		fontWeight: "bold"
	},
	options: {
		display: "flex",
		marginBottom: "3rem",
		justifyContent: "center",
		flexDirection: "row"
	},
	option: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center"
	},
	panelInput: {
		height: "5rem",
		width: "5rem",
		fontSize: "2rem",
		textAlign: "center",
		backgroundColor: "#131313",
		color: "white",
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: "0.25rem",
		marginTop: 0,
		marginRight: "1rem",
		marginLeft: "1rem",
		marginBottom: "0.5rem",
		paddingHorizontal: "1rem"
	},
	button: {
		fontSize: "1.25rem",
		backgroundColor: "red",
		color: "white",
		paddingVertical: "1rem",
		paddingHorizontal: "3rem",
		borderRadius: "0.25rem",
		borderWidth: 1,
		borderColor: "transparent",
		marginBottom: "2rem",
		underlayColor: "green"
	},
	circle_picker: {
		marginBottom: "1.5rem",
	},

	wrapper: {
		position: "relative"
	},
	drawingPanel: {
		zIndex: 1, // works on ios
		elevation: 1, // works on android
	},
	grid: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 0, // works on ios
		elevation: 0, // works on android
	}
});
  
export default styles;