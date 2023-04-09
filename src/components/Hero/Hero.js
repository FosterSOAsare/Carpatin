import React from "react";
import styles from "../../styles";
import { Box, Typography, Button } from "@mui/material";
import HeroImage from "../../assets/images/home-hero.png";
import { useThemeContext } from "../../context/DarkTheme";

const Hero = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={styles.hero}>
			<Typography variant="h1" sx={styles.hero__heading} color="primary">
				Meet Carpatin - Admin Dashboard
			</Typography>
			<Typography variant="p" sx={{ ...styles.hero__description, color: theme.palette.desc.main }}>
				Carpatin is a professionally crafted admin dashboard for everyday product development with MUI components.
			</Typography>
			<Box sx={styles.hero__ctas}>
				<Button variant="outlined" color="primary" sx={{ ...styles.hero__cta, color: theme.palette.primary.main }}>
					Live Preview
				</Button>
				<Button variant="contained" color="secondary" sx={{ ...styles.hero__cta, color: "white" }}>
					Purchase
				</Button>
			</Box>

			{/* Hero Image */}
			<img src={HeroImage} alt="Hero" className="heroImage" />
		</Box>
	);
};

export default Hero;
