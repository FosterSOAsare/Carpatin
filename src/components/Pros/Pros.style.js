import { flex } from "../../styles";
const prosStyle = {
	pros: {
		width: "100%",
		height: "300px",
		marginTop: "20px",
		padding: { xs: "0 20px", md: "0" },
	},
	pros__container: {
		border: "1px solid grey",
		borderRadius: "10px",
		paddingInline: "70px !important",
		...flex("space-between", "center"),
		height: "100%",
	},
	pros__stroke: {
		height: "55%",
		width: "1px",
		margin: "20px",
	},
	pros__section: {
		height: "auto",
		width: "100%",
	},
	pros__heading: {
		fontSize: "24px",
		fontWeight: "bold",
		marginBottom: "10px",
	},
	pros__description: {
		fontSize: "16px",
		marginBottom: "10px",
		lineHeight: "25px",
		width: "90%",
		display: "block",
	},
	pros__ctas: {
		width: "100%",
		marginTop: "20px",
		...flex("space-between", "center"),
	},
};
export default prosStyle;
