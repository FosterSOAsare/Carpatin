import React from "react";
import { Box, Typography } from "@mui/material";

import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";

import Feature from "./Feature";

import AuthImage from "../../assets/images/home-features-auth.png";
import LoadingState from "../../assets/images/home-features-states.png";
import Filters from "../../assets/images/home-features-filters.png";
import { ReactComponent as UpdatesSvg } from "../../assets/images/updates.svg";
import { ReactComponent as ResponsiveSvg } from "../../assets/images/responsive.svg";

const Features = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={{ ...styles.features }}>
			<Typography variant="h1" sx={styles.features__heading} color="primary">
				Packed with features
			</Typography>
			<Typography variant="p" sx={{ ...styles.features__description, color: theme.palette.desc.main }}>
				More than 30 screens, utilities and hooks for your product development
			</Typography>

			<Box sx={{ ...styles.features__auth, backgroundColor: theme.palette.background3.main }}>
				<Box sx={{ width: { xs: "100%", md: "35%" }, height: { xs: "100%", md: "200px" } }}>
					<img src={AuthImage} alt="" className="authImage" style={{ width: "100%", height: "100%" }} />
				</Box>
				<Box sx={{ width: { xs: "100%", md: "65%" }, height: "100%" }}>
					<Typography variant="h3" sx={{ ...styles.features__heading, fontSize: "24px" }} color="primary">
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
			<Box sx={{ ...styles.feature__container, paddingBlock: "90px", border: 0 }}>
				<Box sx={{ display: "flex", gap: "20px", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" } }}>
					{[
						{
							icon: UpdatesSvg,
							iconbg: "rgb(247, 144, 9)",
							title: "Loading and Error states",
							desc: "Screens come connected to a fake server api client and state management system, and can be hooked to your real server in no time.",
						},
						{
							icon: ResponsiveSvg,
							iconbg: "rgb(16, 185, 129)",
							title: "Advanced Features",
							desc: "When it comes to management, it’s important to have good tools for specific needs, so we included a powerful filter system so you won’t have to build one.",
						},
					].map((e, index) => (
						<Box key={index} {...e} sx={{ width: { xs: "100%", md: "50%" }, borderRight: { md: index === 0 ? `1px solid ${theme.palette.stroke.main} ` : "" }, paddingBlock: "10px" }}>
							<Box sx={{ width: "60px", height: "60px", background: e.iconbg, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
								<e.icon style={{ height: "30px", color: "white" }} />
							</Box>
							<Typography variant="h3" sx={{ ...styles.title, color: theme.palette.primary.main, fontSize: "24px", marginBlock: "15px" }}>
								{e.title}
							</Typography>
							<Typography variant="p" sx={{ ...styles.title, color: theme.palette.desc.main, fontSize: "14px" }}>
								{e.desc}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Features;
