import React from "react";
import { Text } from "react-native-paper";

import styles from "./ParagraphTextStyles";

export default function ParagraphText(color, ...props) {
	return <Text style={styles.text} color={color} {...props} />;
}

