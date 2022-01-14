import React from "react";
import { Text } from "react-native-paper";

import styles from "./HeaderTextStyles";

export default function HeaderText(props) {
	return <Text style={styles.header} {...props} />;
}

