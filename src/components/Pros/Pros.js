import React from "react";
import { Box, Container, Typography, Button, Avatar, AvatarGroup } from "@mui/material";
import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";

const Pros = () => {
	const { theme } = useThemeContext();

	return (
		<Box sx={styles.pros}>
			<Container maxWidth="lg" sx={{ ...styles.pros__container, borderColor: theme.palette.stroke.main }}>
				<Box sx={styles.pros__section}>
					<Typography variant="h3" sx={styles.pros__heading}>
						Design Files
					</Typography>
					<Typography variant="p" sx={{ ...styles.pros__description, color: theme.palette.desc.main }}>
						We've included the source Figma files in Plus & Extended licenses so you can get creative! Build layouts with confidence.
					</Typography>
					<Box sx={styles.pros__ctas}>
						<Button variant="text" color="secondary" sx={{ textTransform: "none" }}>
							Preview Figma Files
						</Button>
						<Box sx={styles.pros__icons}>
							<img src="https://carpatin-dashboard.demos.devias.io/assets/logos/logo-react.svg" alt="" className="pros__image" />
							<img src="https://carpatin-dashboard.demos.devias.io/assets/logos/logo-typescript.svg" alt="" className="pros__image" />
							<img src="https://carpatin-dashboard.demos.devias.io/assets/logos/logo-figma.svg" alt="" className="pros__image" />
						</Box>
					</Box>
				</Box>
				<Box sx={{ ...styles.pros__stroke, background: theme.palette.stroke.main }}></Box>
				<Box sx={styles.pros__section}>
					<Typography variant="h3" sx={styles.pros__heading}>
						Premium Support
					</Typography>
					<Typography variant="p" sx={{ ...styles.pros__description, color: theme.palette.desc.main }}>
						Our support team is here to help you get started with any template-related questions. We answer pretty fast.
					</Typography>
					<Box sx={styles.pros__ctas}>
						<Button variant="text" color="secondary" sx={{ textTransform: "none" }}>
							Contact us
						</Button>
						<AvatarGroup max={4}>
							<Avatar alt="Remy Sharp" src="https://carpatin-dashboard.demos.devias.io/assets/support-stefania.png" sx={{ borderColor: `${theme.palette.background.main} !important` }} />
							<Avatar
								alt="Travis Howard"
								src="https://carpatin-dashboard.demos.devias.io/assets/support-alexandru.png"
								sx={{ borderColor: `${theme.palette.background.main} !important` }}
							/>
							<Avatar alt="Cindy Baker" src="https://carpatin-dashboard.demos.devias.io/assets/support-adrian.png" sx={{ borderColor: `${theme.palette.background.main} !important` }} />
						</AvatarGroup>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Pros;
