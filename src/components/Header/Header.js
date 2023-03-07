import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useThemeContext } from "../../context/DarkTheme";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import styles from "../../styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
	const { mode, toggleTheme } = useThemeContext();

	return (
		<AppBar position="fixed" color="background">
			<Toolbar sx={styles.header__container}>
				<Logo style={styles.header__logo} />
				<Box sx={styles.header__navigations}>
					<Typography variant="h6" color="primary" sx={styles.header__link}>
						Pages
					</Typography>
					<Typography variant="h6" color="primary" sx={styles.header__link}>
						Documentation
					</Typography>
					{mode !== "dark" ? <DarkModeIcon color="icon1" sx={styles.header__icon} onClick={toggleTheme} /> : <LightModeIcon color="primary" sx={styles.header__icon} onClick={toggleTheme} />}
				</Box>
				<Box sx={styles.header__ctas}>
					<Button variant="outlined" sx={styles.button}>
						Live Preview
					</Button>
					<Button variant="contained" color="secondary" sx={styles.button}>
						Purchase
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
