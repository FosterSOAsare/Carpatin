import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./components/Header/Header";
import { useThemeContext } from "./context/DarkTheme";
import { darkTheme } from "./theme";
import { lightTheme } from "./theme";

function App() {
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;
