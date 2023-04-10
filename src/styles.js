import headerStyles from "./components/Header/Header.style";
import heroStyles from "./components/Hero/Hero.style";
import prosStyle from "./components/Pros/Pros.style";
import featuresStyles from "./components/Features/Features.style";
export function flex(justify, align, direction = "row") {
	return {
		display: "flex",
		justifyContent: justify,
		alignItems: align,
		flexDirection: direction,
	};
}

const styles = {
	button: {
		...flex("center", "center"),
		textTransform: "none",
	},
	...headerStyles,
	...heroStyles,
	...prosStyle,
	...featuresStyles,
	Accordion: {
		backgroundColor: "none",
		"& .MuiPaper-root::before": {
			display: "none",
		},
		"& .MuiAccordion-root": {
			background: "transparent",
			boxShadow: "none",
			padding: 0,
		},
		"& .MuiAccordionSummary-root": {
			padding: "0 10px",
			marginBottom: "5px",
			border: "none",
			borderRadius: "5px",
			minHeight: "30px",
			height: "35px",
			"&:hover": {
				background: "rgba(255, 255, 255, 0.04)",
			},
		},
	},
};

export default styles;
