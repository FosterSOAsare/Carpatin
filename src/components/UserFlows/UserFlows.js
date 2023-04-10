import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/DarkTheme";

import HomeFlows from "../../assets/images/home-flows.png";

const UserFlows = () => {
	const { theme } = useThemeContext();

	return (
		<Box sx={{ width: "100%", height: "auto", background: theme.palette.background3.main, paddingBlock: "50px" }}>
			<Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", height: "auto", flexDirection: { xs: "column", md: "row" } }}>
				<Box sx={{ width: { xs: "100%", md: "50%" }, height: "auto" }}>
					<Typography variant="h1" color="primary" sx={{ fontSize: "36px", fontWeight: "600", marginBottom: "30px" }}>
						Management User Flows
					</Typography>
					<Typography variant="p" color="desc" sx={{ color: theme.palette.desc.main }}>
						Rather than a generic template, we focused on management-specific screens to enable developers focus on the important part of the development process.
					</Typography>
					<Box sx={{ display: "flex", gap: "15px", marginBlock: "15px" }}>
						{["Customers", "Products", "Orders", "Invoices", "Organization"].map((e, index) => (
							<Box key={index} sx={{ padding: "7px 10px", background: theme.palette.tags.main, borderRadius: "5px", color: theme.palette.primary.main, fontSize: "13px" }}>
								{e}
							</Box>
						))}
					</Box>
					<Box sx={{ marginTop: "20px", display: "flex", gap: "20px" }}>
						<Button variant="outlined" color="primary">
							Live Preview
						</Button>
						<Button variant="contained" color="secondary">
							Purchase
						</Button>
					</Box>
				</Box>
				<Box sx={{ width: { xs: "100%", md: "50%" }, height: "400px", marginTop: { xs: "40px", md: 0 } }}>
					<img src={HomeFlows} alt="Home flows" style={{ width: "100%", height: "100%", left: { xs: "-10%", md: 0 }, position: "relative" }} />
				</Box>
			</Container>
		</Box>
	);
};

export default UserFlows;
