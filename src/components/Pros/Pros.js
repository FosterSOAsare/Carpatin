import React from "react";
import { Box, Container, Typography, Button, Avatar, AvatarGroup } from "@mui/material";
import styles from "../../styles";
import { useThemeContext } from "../../context/DarkTheme";

import { ReactComponent as FigmaSvg } from "../../assets/images/logo-figma.svg";
import { ReactComponent as ReactSvg } from "../../assets/images/logo-react.svg";
import { ReactComponent as TypescriptSvg } from "../../assets/images/logo-typescript.svg";
import SupportAdrian from "../../assets/images/support-adrian.png";
import SupportAlexandru from "../../assets/images/support-alexandru.png";
import SupportStefania from "../../assets/images/support-stefania.png";

const Pros = () => {
	const { theme } = useThemeContext();

	return (
		<Box sx={styles.pros}>
			<Container maxWidth="lg" sx={{ ...styles.pros__container, borderColor: theme.palette.stroke.main }}>
				<Box sx={styles.pros__section}>
					<Typography variant="h3" sx={styles.pros__heading} color="primary">
						Design Files
					</Typography>
					<Typography variant="p" sx={{ ...styles.pros__description, color: theme.palette.desc.main }}>
						We've included the source Figma files in Plus & Extended licenses so you can get creative! Build layouts with confidence.
					</Typography>
					<Box sx={styles.pros__ctas}>
						<Button variant="text" color="secondary" sx={{ textTransform: "none" }} href="https://www.figma.com/file/xEAerPeQsTKImIS28QulSh">
							Preview Figma Files
						</Button>
						<Box sx={styles.pros__icons}>
							<ReactSvg />
							<TypescriptSvg />
							<FigmaSvg />
						</Box>
					</Box>
				</Box>
				<Box sx={{ ...styles.pros__stroke, background: theme.palette.stroke.main }}></Box>
				<Box sx={styles.pros__section}>
					<Typography variant="h3" sx={styles.pros__heading} color="primary">
						Premium Support
					</Typography>
					<Typography variant="p" sx={{ ...styles.pros__description, color: theme.palette.desc.main }}>
						Our support team is here to help you get started with any template-related questions. We answer pretty fast.
					</Typography>
					<Box sx={styles.pros__ctas}>
						<Button variant="text" color="secondary" sx={{ textTransform: "none" }} href="https://devias.io/contact">
							Contact us
						</Button>
						<AvatarGroup max={4}>
							<Avatar alt="Remy Sharp" src={SupportStefania} sx={{ borderColor: `${theme.palette.background.main} !important` }} />
							<Avatar alt="Travis Howard" src={SupportAlexandru} sx={{ borderColor: `${theme.palette.background.main} !important` }} />
							<Avatar alt="Cindy Baker" src={SupportAdrian} sx={{ borderColor: `${theme.palette.background.main} !important` }} />
						</AvatarGroup>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Pros;
