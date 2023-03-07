import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./components/Header/Header";
import { useThemeContext } from "./context/DarkTheme";

import { Box } from "@mui/material";

function App() {
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme}>
			<Box className="App" sx={{ flexGrow: 1 }}>
				<Header />
			</Box>
		</ThemeProvider>
	);
}

export default App;
