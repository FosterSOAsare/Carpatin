import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";

import plans from "../../assets/data/plans";
import { useThemeContext } from "../../context/DarkTheme";

const Demo = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={{ width: "100%", height: "auto", background: theme.palette.background.main, paddingBlock: { xs: "20px 0px", md: "70px" } }}>
			<Container maxWidth="lg" sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<Typography variant="h1" sx={{ textAlign: "center", fontSize: "36px", marginBottom: "40px", fontWeight: "600" }} color="primary">
					Try the free demo
				</Typography>
				<Box sx={{ display: "flex", gap: "20px", width: "100%", justifyContent: "center", marginBottom: "50px", flexDirection: { xs: "column", sm: "row" } }}>
					{plans.map((plan, index) => (
						<Box
							key={index}
							sx={{
								borderRadius: "5px",
								width: { xs: "100%", sm: "50%", md: "35%" },
								padding: "20px",
								boxShadow: "rgba(0, 0, 0, 0.24) 0px 10px 15px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<Typography variant="h3" sx={{ fontSize: "12px", fontWeight: "bold", marginBottom: "10px", color: theme.palette.desc.main, marginRight: "auto" }}>
								VERSION
							</Typography>
							<Typography variant="h2" sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "40px", textTransform: "capitalize", marginRight: "auto" }} color="primary">
								{plan.type}
							</Typography>

							<Box sx={{ width: "95%", height: { md: "280px" }, marginInline: "auto", paddingBottom: "10px", borderBottom: `1px solid ${theme.palette.stroke.main}` }}>
								{plan.features.map((feature, index) => (
									<Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "10px", marginBottom: "25px" }}>
										<Box
											sx={{
												width: "15px",
												height: "15px",
												background: theme.palette.ticks.main,
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											<DoneTwoToneIcon sx={{ fontSize: "10px" }} color="primary" />
										</Box>
										<Typography variant="p" sx={{ fontWeight: "medium", width: "calc(100% - 15px)", fontSize: "14px" }} color="primary">
											{feature}
										</Typography>
									</Box>
								))}
							</Box>

							<Button
								endIcon={<LaunchTwoToneIcon />}
								sx={{ marginTop: "20px", display: "flex", width: "auto", textTransform: "none", padding: "10px", color: index === 0 ? "" : theme.palette.primary.main }}
								variant={index === 0 ? "outlined" : "contained"}
								color="secondary"
								href={plan.link}>
								{plan.linkText}
							</Button>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Demo;
