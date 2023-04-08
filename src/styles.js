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
};

export default styles;
