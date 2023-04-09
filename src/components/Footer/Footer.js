import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/DarkTheme";

const Footer = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={{ background: theme.palette.background2.main, paddingBlock: "40px" }}>
			<Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<Box>
					<Typography variant="p" color="primary" sx={{ fontSize: "14px" }}>
						© 2023 Devias
					</Typography>
				</Box>
				<Box sx={{ display: "flex", gap: "40px" }}>
					<a href="https://devias.io/about-us" className="footer_link" target="_blank" rel="noreferrer" style={{ color: theme.palette.desc.main }}>
						About Us
					</a>
					<a href="https://devias.io/legal/tos" className="footer_link" target="_blank" rel="noreferrer" style={{ color: theme.palette.desc.main }}>
						Terms
					</a>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
