import { flex } from "../../styles";
const featuresStyles = {
	features: {
		width: "100%",
		height: "auto",
		marginTop: "120px",
		...flex("flex-start", "center", "column"),
		paddingBlock: "20px",
	},
	features__heading: {
		color: "white",
		fontSize: "36px",
		fontWeight: "bold",
		marginBottom: "20px",
	},
	features__description: {
		fontSize: "16px",
		textAlign: "center",
	},
	features__auth: {
		width: "80%",
		...flex("space-between", "center"),
		gap: "40px",
		marginTop: "70px",
		marginBottom: "30px",
	},
	feature__container: {
		width: "80%",
		height: "500px",
		...flex("space-between", "center"),
		gap: "30px",
		paddingBottom: "50px",
		borderBottom: "1px solid green",
	},
	feature: {
		width: "50%",
		height: "100%",
		padding: "40px",
	},
	feature__image: { width: "90%", height: "70%", display: "block", marginInline: "auto", borderRadius: "10px 10px 0 0", marginBottom: "20px" },
};

export default featuresStyles;
