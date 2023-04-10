import { Box, Container, Typography, Button } from "@mui/material";
import React from "react";
import navigationData from "./navlist.data";
import { useThemeContext } from "../../context/DarkTheme";

import AuthImage from "../../assets/images/home-features-auth.png";

const PagesDropDown = () => {
	const { theme } = useThemeContext();

	return (
		<Container
			sx={{
				position: "fixed",
				top: "50px",
				left: 0,
				right: 0,
				height: "80vh",
				zIndex: 4,
				width: "100%",
				background: theme.palette.background.main,
				marginInline: "auto",
				display: "flex",
				padding: "50px 20px",
				borderRadius: "5px",
				justifyContent: "flex-start",
				gap: "5%",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 5px 14px;",
			}}
			maxWidth="lg">
			<Box sx={{ width: "25%", padding: "10px 20px", background: theme.palette.background3.main }}>
				<Typography variant="h1" color="primary" sx={{ fontSize: "24px", fontWeight: "500", marginBottom: "20px" }}>
					Pages
				</Typography>
				<Typography variant="p" sx={{ width: "100%", color: theme.palette.desc.main, lineHeight: "25px" }}>
					Carpatin - Admin Dashboard includes 6 unique user-flows with a total of 30 screens. We think the value is in the quality and not quantity.
				</Typography>

				<Box sx={{ width: "100%", height: "auto", marginTop: "100px" }}>
					<img src={AuthImage} alt="Desktop drop down " style={{ width: "100%", height: "100%" }} />
				</Box>
			</Box>
			<Box sx={{ width: "65%", height: "100%", display: "flex", justifyContent: "flex-start", gap: "20%" }}>
				{navigationData.map((categories, index) => (
					<Box key={index}>
						{categories.map((category, index) => {
							return (
								<Box key={index}>
									<Typography color="primary" sx={{ marginBottom: "20px", textTransform: "uppercase", textAlign: "left", color: theme.palette.desc.main, fontSize: "12px" }}>
										{category.category}
									</Typography>

									{category.content.map((e, index) => (
										<Button
											href={e.link}
											key={index}
											sx={{
												display: "block",
												textTransform: "none",
												textAlign: "left",
												padding: 0,
												marginBottom: "20px",
												fontWeight: "400",
												"&:hover": { color: theme.palette.secondary.main, background: "transparent" },
											}}
											variant="text"
											color="primary">
											{e.name}
										</Button>
									))}
								</Box>
							);
						})}
					</Box>
				))}
			</Box>
		</Container>
	);
};

export default PagesDropDown;
