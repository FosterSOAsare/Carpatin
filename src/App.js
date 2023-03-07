import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { useThemeContext } from "./context/DarkTheme";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pros from "./components/Pros/Pros";

function App() {
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme}>
			<Box className="App" sx={{ flexGrow: 1, paddingTop: "60px", backgroundColor: theme.palette.background.main, paddingBottom: "1000px" }}>
				<Header />
				<Hero />
				<Pros />
			</Box>
		</ThemeProvider>
	);
}

export default App;
