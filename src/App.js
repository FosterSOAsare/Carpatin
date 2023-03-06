import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./components/Header/Header";
import { useThemeContext } from "./context/DarkTheme";

function App() {
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;
