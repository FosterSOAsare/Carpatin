import headerStyles from "./components/Header/Header.style";
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
};

export default styles;
