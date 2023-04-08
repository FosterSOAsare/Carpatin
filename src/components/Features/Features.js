import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";

import Feature from "./Feature";

import AuthImage from "../../assets/images/home-features-auth.png";
import LoadingState from "../../assets/images/home-features-states.png";
import Filters from "../../assets/images/home-features-filters.png";

const Features = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={{ ...styles.features }}>
			<Typography variant="h1" sx={styles.features__heading}>
				Packed with features
			</Typography>
			<Typography variant="p" sx={{ ...styles.features__description, color: theme.palette.desc.main }}>
				More than 30 screens, utilities and hooks for your product development
			</Typography>

			<Box sx={{ ...styles.features__auth, backgroundColor: theme.palette.background3.main }}>
				<Box sx={{ width: "45%", height: "100%" }}>
					<img src={AuthImage} alt="" className="authImage" />
				</Box>
				<Box>
					<Typography variant="h3" sx={{ ...styles.features__heading, fontSize: "24px" }}>
						Authentication
					</Typography>
					<Typography variant="p" sx={{ ...styles.features__description, color: theme.palette.desc.main }}>
						The template comes with Cognito, Firebase, Auth0 and JWT Auth systems installed and configured. Get up and running in a matter of minutes.
					</Typography>
				</Box>
			</Box>

			<Box sx={{ ...styles.feature__container, borderColor: theme.palette.stroke.main }}>
				{[
					{
						img: LoadingState,
						heading: "Loading and Error states",
						desc: "Screens come connected to a fake server api client and state management system, and can be hooked to your real server in no time.",
					},
					{
						img: Filters,
						heading: "Advanced Features",
						desc: "When it comes to management, it’s important to have good tools for specific needs, so we included a powerful filter system so you won’t have to build one.",
					},
				].map((e, index) => (
					<Feature key={index} {...e} theme={theme} />
				))}
			</Box>
		</Box>
	);
};

export default Features;
