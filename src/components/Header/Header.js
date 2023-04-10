import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";

import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ setShowMenu }) => {
	const { mode, toggleTheme } = useThemeContext();

	const isMediumScreen = useMediaQuery("(max-width:900px)");

	return (
		<AppBar position="fixed" color="background" sx={{ width: "100%", overflow: "hidden", top: 0, zIndex: "3 !important" }}>
			<Toolbar sx={{ ...styles.header__container, zIndex: "3 !important" }}>
				<Logo style={styles.header__logo} />
				{!isMediumScreen && (
					<Box sx={styles.header__navigations}>
						<Typography variant="h6" color="primary" sx={styles.header__link}>
							Pages
						</Typography>
						<Typography variant="h6" color="primary" sx={styles.header__link}>
							Documentation
						</Typography>
						{mode !== "dark" ? (
							<DarkModeIcon color="icon1" sx={styles.header__icon} onClick={toggleTheme} />
						) : (
							<LightModeIcon color="primary" sx={styles.header__icon} onClick={toggleTheme} />
						)}
					</Box>
				)}
				{!isMediumScreen && (
					<Box sx={styles.header__ctas}>
						<Button variant="outlined" sx={styles.button}>
							Live Preview
						</Button>
						<Button variant="contained" color="secondary" sx={styles.button}>
							Purchase
						</Button>
					</Box>
				)}
				{isMediumScreen && (
					<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
						{mode !== "dark" ? (
							<DarkModeIcon color="icon1" sx={styles.header__icon} onClick={toggleTheme} />
						) : (
							<LightModeIcon color="primary" sx={styles.header__icon} onClick={toggleTheme} />
						)}
						<button onClick={() => setShowMenu(true)}>
							<MenuIcon color="primary" sx={{}} />
						</button>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
