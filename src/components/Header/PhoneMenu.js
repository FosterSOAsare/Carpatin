import React, { useState, useEffect } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";

import navigationData from "./navlist.data";
import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";

import Logo from "../../assets/images/Logo.svg";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const PhoneMenu = ({ setShowMenu, showMenu }) => {
	const { theme } = useThemeContext();

	const [backgroundShow, setBackgroundShow] = useState(showMenu);
	const [slideShow, setSlideShow] = useState(false);

	useEffect(() => {
		if (showMenu) {
			setBackgroundShow(showMenu);
			setTimeout(() => {
				setSlideShow(showMenu);
			}, 0);
		} else {
			setSlideShow(showMenu);
			setTimeout(() => {
				setBackgroundShow(showMenu);
			}, 500);
		}
	}, [showMenu]);
	return (
		<Box
			sx={{
				width: "100%",
				position: "fixed",
				display: backgroundShow ? "block" : "none",
				height: "100vh",
				background: "#080C13bc",
				zIndex: 5,
				top: "0px",
			}}>
			<Box
				sx={{
					width: "320px",
					paddingBottom: "20px",
					overflowY: "auto",
					height: "100%",
					background: theme.palette.background.main,
					position: "relative",
					zIndex: 5,
					right: slideShow ? 0 : "-100%",
					transition: "all 0.5s ease-in-out",
					marginLeft: "auto",
				}}>
				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
					<img src={Logo} alt="" height="30px" />
					<button onClick={() => setShowMenu(false)}>
						<CloseIcon sx={{}} color="primary" />
					</button>
				</Box>

				<Box sx={{ width: "100%", height: "auto", padding: "0 10px" }}>
					{navigationData.map((categories, index) => (
						<Box key={index} sx={{ ...styles.Accordion }}>
							{categories.map((category, index) => {
								return (
									<Accordion key={index} sx={{}}>
										<AccordionSummary expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "14px" }} color="primary" />} aria-controls="panel1a-content" id="panel1a-header" size="sm">
											<Typography color="primary">{category.category}</Typography>
										</AccordionSummary>
										<AccordionDetails>
											{category.content.map((e, index) => (
												<Button href={e.link} key={index} sx={{ display: "block", textTransform: "none", padding: "10px 20px" }} variant="text" color="primary">
													{e.name}
												</Button>
											))}
										</AccordionDetails>
									</Accordion>
								);
							})}
						</Box>
					))}
					<Button variant="text" href="https://carpatin-dashboard.devias.io/docs/welcome" sx={{ display: "block", width: "100%", textAlign: "left", textTransform: "none" }}>
						Docs
					</Button>

					<Box sx={{ marginTop: "30px" }}>
						<Button
							variant="outlined"
							href="https://carpatin-dashboard.devias.io/dashboard"
							sx={{ display: "block", width: "100%", textAlign: "center", textTransform: "none", marginBottom: "10px" }}
							color="primary">
							Live Preview
						</Button>
						<Button
							variant="contained"
							href="https://mui.com/store/items/carpatin-dashboard"
							sx={{ display: "block", width: "100%", textAlign: "center", color: "white", textTransform: "none" }}
							color="secondary">
							Purchase
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PhoneMenu;
