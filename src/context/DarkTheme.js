import { createContext, useState, useContext, useEffect } from "react";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem("carpatin:theme") || "light");

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	useEffect(() => {
		localStorage.setItem("carpatin:theme", theme);
	}, [theme]);
	return <DarkContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</DarkContext.Provider>;
};

export function useThemeContext() {
	return useContext(DarkContext);
}

export default DarkProvider;
