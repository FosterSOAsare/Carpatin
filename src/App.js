import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { useThemeContext } from "./context/DarkTheme";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pros from "./components/Pros/Pros";
import Features from "./components/Features/Features";
import UserFlows from "./components/UserFlows/UserFlows";
import Pricing from "./components/Pricing/Pricing";
import Demo from "./components/Demo/Demo";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme}>
			<Box className="App" sx={{ backgroundColor: theme.palette.background.main, paddingTop: "70px", overflow: "hidden !important", height: "auto", width: "100vw" }}>
				<Header />
				<Hero />
				<Pros />
				<Features />
				<UserFlows />
				<Demo />
				<Pricing />
				<Faq />
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
