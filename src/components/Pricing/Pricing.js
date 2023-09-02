import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

import pricings from "../../assets/data/pricing";
import { useThemeContext } from "../../context/DarkTheme";

const Pricing = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={{ width: "100%", height: "auto", background: theme.palette.background3.main, paddingBlock: { xs: "5px 20px", md: "70px 120px" } }}>
			<Container maxWidth="lg" sx={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<Typography variant="h1" sx={{ textAlign: "center", fontSize: "36px", marginBottom: "40px", fontWeight: "600" }} color="primary">
					Pricing
				</Typography>
				<Box
					sx={{
						display: { xs: "flex", md: "grid" },
						gridTemplateColumns: "1fr 1fr 1fr",
						gap: "20px",
						width: "100%",
						justifyContent: "space-between",
						marginBottom: "50px",
						flexDirection: { xs: "column", md: "row" },
						alignItems: "center",
					}}>
					{pricings.values.map((pricing, pricing_index) => (
						<Box
							key={pricing_index}
							sx={{
								borderRadius: "5px",
								width: "100%",
								padding: "20px",
								background: theme.palette.background3.main,
								boxShadow: "rgba(0, 0, 0, 0.24) 0px 10px 15px",
								display: "flex",
								flexDirection: "column",
							}}>
							<Typography variant="h3" sx={{ fontSize: "12px", fontWeight: "bold", marginBottom: "10px", color: theme.palette.desc.main }}>
								LICENSE
							</Typography>
							<Typography variant="h2" sx={{ fontSize: "24px", fontWeight: "bold", marginBottom: "40px" }} color="primary">
								{pricing.name}
							</Typography>

							<Box sx={{ width: "95%", marginInline: "auto", paddingBottom: "10px", borderBottom: `1px solid ${theme.palette.stroke.main}` }}>
								{pricings.features.map((feature, index) => (
									<Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "10px", marginBottom: "25px" }}>
										<Box
											sx={{
												width: "15px",
												height: "15px",
												background: pricings.values[pricing_index].index_value[index] === 1 ? theme.palette.ticks.main : "transparent",
												border: pricings.values[pricing_index].index_value[index] === 1 ? "none" : `2px solid ${theme.palette.stroke.main}`,
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}>
											{pricings.values[pricing_index].index_value[index] === 1 ? (
												<DoneTwoToneIcon sx={{ fontSize: "10px" }} color="primary" />
											) : (
												<CloseTwoToneIcon sx={{ fontSize: "10px" }} color="stroke" />
											)}
										</Box>
										<Typography variant="p" sx={{ fontWeight: "medium", opacity: "0.5" }} color="primary">
											{feature}
										</Typography>
									</Box>
								))}
							</Box>

							<Button
								sx={{ marginInline: "auto", marginTop: "10px", display: "block", textTransform: "none", padding: "10px" }}
								href="https://mui.com/store/items/carpatin-dashboard"
								variant="text"
								color="secondary">
								Purchase Now
							</Button>
						</Box>
					))}
				</Box>

				<Typography variant="h1" sx={{ fontSize: "36px", fontWeight: "600" }} color="secondary">
					Do you have a special case?
				</Typography>
				<Typography variant="p" sx={{ fontSize: "16px", display: "block", marginBlock: "20px", color: theme.palette.desc.main }} color="desc">
					Let’s talk about your specific requirements and see how we can help you.
				</Typography>
				<Button variant="contained" href="https://devias.io/contact" color="secondary" sx={{ textTransform: "none", color: "white", fontWeight: "500" }}>
					Contact us
				</Button>
			</Container>
		</Box>
	);
};

export default Pricing;
