import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import { useThemeContext } from "../../context/DarkTheme";

import faqData from "./Faq.data";

const Faq = () => {
	const { theme } = useThemeContext();
	return (
		<Box sx={{ background: theme.palette.background2.main, paddingBlock: "70px" }}>
			<Container maxWidth="lg" sx={{}}>
				<Typography variant="h1" color="primary" sx={{ fontSize: "36px", textAlign: "center", fontWeight: "500" }}>
					Frequently asked questions
				</Typography>
				<Grid container sx={{ marginTop: "40px", justifyContent: "space-between" }}>
					{faqData.map((e, index) => (
						<Grid key={index} item md={4} sx={{ color: theme.palette.primary.main, padding: "10px" }}>
							<Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
								{e.map((question, index) => (
									<Box key={index} sx={{ padding: "20px", background: theme.palette.background3.main }}>
										<Typography variant="h3" color="primary" sx={{ fontSize: "16px", fontWeight: "500", marginBottom: "20px" }}>
											{question.question}
										</Typography>
										<Box className={`faq_answer_${theme.mode}`}>{question.answer}</Box>
									</Box>
								))}
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Faq;
