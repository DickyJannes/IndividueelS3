/* eslint-disable no-undef */
import React from "react";
import { Image } from "react-native";

import styles from "./PixelLogoStyles";

export default function PixelLogo() {
	return <Image source={require("../../../assets/Logo.png")} style={styles.image} />;
}

