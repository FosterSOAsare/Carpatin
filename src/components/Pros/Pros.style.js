import { flex } from "../../styles";
const prosStyle = {
	pros: {
		width: "100%",
		height: "auto",
		marginTop: "20px",
		padding: { xs: "0 20px", lg: "0" },
	},
	pros__container: {
		border: "1px solid grey",
		borderRadius: "10px",
		paddingInline: { lg: "70px !important" },
		...flex("space-between", "center"),
		height: { xs: "auto", md: "300px" },
		flexDirection: { xs: "column", md: "row" },
		paddingBlock: "30px",
		gap: { xs: "40px", md: 0 },
	},
	pros__stroke: {
		height: "70%",
		width: "1px",
		margin: "20px",
		display: { xs: "none", md: "block" },
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
		width: "100%",
		display: "block",
	},
	pros__ctas: {
		width: "100%",
		marginTop: "20px",
		...flex("space-between", "center"),
	},
	pros__icons: {
		...flex("space-between", "center"),
		gap: "20px",
	},
};
export default prosStyle;
