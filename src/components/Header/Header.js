import React, { useEffect, useRef, useState } from "react";
import { Box, AppBar, Toolbar, Button, Container } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";
import PagesDropDown from "./PagesDropDown";

import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ setShowMenu }) => {
	const { mode, toggleTheme } = useThemeContext();
	const [showDropDown, setShowDropdown] = useState(false);
	const dropRef = useRef();

	const isMediumScreen = useMediaQuery("(max-width:900px)");
	useEffect(() => {
		let parent = dropRef.current;
		let contains = true;
		if (parent) {
			document.addEventListener("mousemove", (e) => {
				contains = parent.contains(e.target);

				if (!contains && parent !== e.target) {
					setTimeout(() => {
						if (!parent.contains(e.target) && parent !== e.target) {
							setShowDropdown(false);
						}
					}, 200);
				} else {
					setShowDropdown(true);
				}
			});
		}
	}, [dropRef]);

	return (
		<AppBar position="fixed" color="background" sx={{ width: "100%", overflow: "hidden", top: 0, zIndex: "3 !important" }}>
			<Container maxWidth="xl">
				<Toolbar sx={{ ...styles.header__container, zIndex: "3 !important" }}>
					<Logo style={styles.header__logo} />
					{!isMediumScreen && (
						<Box sx={styles.header__navigations}>
							<Button variant="text" color="primary" sx={styles.header__link} ref={dropRef}>
								Pages
								{showDropDown && <PagesDropDown />}
							</Button>
							<Button variant="text" color="primary" sx={styles.header__link} href="https://carpatin-dashboard.devias.io/docs/welcome">
								Documentation
							</Button>
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
			</Container>
		</AppBar>
	);
};

export default Header;
