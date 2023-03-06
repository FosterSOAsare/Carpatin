import React from "react";
import { Button } from "@mui/material";
import { useThemeContext } from "../../context/DarkTheme";

const Header = () => {
	const { toggleTheme } = useThemeContext();

	return (
		<Button variant="contained" onClick={toggleTheme} color="primary">
			Hello
		</Button>
	);
};

export default Header;
