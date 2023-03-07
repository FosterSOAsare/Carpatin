import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { createTheme } from "@mui/material";
import { lightColors, darkColors } from "../theme";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
	const [mode, setMode] = useState(localStorage.getItem("carpatin:theme") || "light");

	const theme = useMemo(() => {
		return createTheme({
			mode,
			palette: mode === "light" ? lightColors : darkColors,
			breakpoints: {
				values: {
					xs: 0, // extra small devices (portrait phones)
					sm: 600, // small devices (landscape phones)
					md: 678, // medium devices (tablets)
					lg: 1140, // large devices (desktops)
					xl: 1920, // extra large devices (large desktops)
				},
			},
		});
	}, [mode]);

	function toggleTheme() {
		setMode(mode === "dark" ? "light" : "dark");
	}

	useEffect(() => {
		localStorage.setItem("carpatin:theme", mode);
	}, [mode]);
	return <DarkContext.Provider value={{ mode, setMode, toggleTheme, theme }}>{children}</DarkContext.Provider>;
};

export function useThemeContext() {
	return useContext(DarkContext);
}

export default DarkProvider;
