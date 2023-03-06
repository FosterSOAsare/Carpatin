import { createContext, useState, useContext } from "react";
import { darkTheme } from "../theme";
import { lightTheme } from "../theme";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return <DarkContext.Provider value={{ theme: theme === "light" ? lightTheme : darkTheme, setTheme, toggleTheme }}>{children}</DarkContext.Provider>;
};

export function useThemeContext() {
	return useContext(DarkContext);
}

export default DarkProvider;
