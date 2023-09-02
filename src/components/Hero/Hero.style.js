import { flex } from "../../styles";
const heroStyles = {
	hero: {
		...flex("flex-start", "center", "column"),
		width: "100%",
		height: "auto",
		minHeight: { md: "700px" },
		paddingBlock: { xs: "40px", md: "70px" },
	},
	hero__heading: {
		fontSize: { xs: "38px", md: "60px" },
		fontWeight: "bold",
		textAlign: "center",
	},
	hero__description: {
		fontSize: { xs: "20px", md: "24px" },
		fontWeight: "light",
		textAlign: "center",
		width: { xs: "90%", sm: "55%" },
		marginTop: "25px",
		lineHeight: "30px",
	},
	hero__ctas: {
		...flex("center", "center"),
		gap: "20px",
		marginBlock: "25px 15px",
	},
	hero__cta: {
		textTransform: "none",
	},
};

export default heroStyles;
