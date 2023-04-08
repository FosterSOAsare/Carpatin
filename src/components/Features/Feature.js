import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../../styles";

const Feature = ({ img, heading, desc, theme }) => {
	return (
		<Box sx={{ ...styles.feature, backgroundColor: theme.palette.background3.main }}>
			<img src={img} alt="" style={styles.feature__image} />
			<Typography variant="h1" sx={{ ...styles.features__heading, fontSize: "18px", marginBottom: "10px" }}>
				{heading}
			</Typography>
			<Typography variant="p" sx={{ ...styles.features__description, color: theme.palette.desc.main }}>
				{desc}
			</Typography>
		</Box>
	);
};

export default Feature;
