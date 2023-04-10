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
		fontSize: "36px",
		fontWeight: "bold",
		marginBottom: "20px",
	},
	features__description: {
		fontSize: "16px",
		textAlign: "center",
		width: { xs: "90%", md: "80%" },
	},
	features__auth: {
		width: { xs: "90%", md: "80%" },
		...flex("space-between", "center"),
		gap: "40px",
		marginTop: "70px",
		marginBottom: "30px",
		flexDirection: { xs: "column", md: "row" },
	},
	feature__container: {
		width: { xs: "90%", md: "80%" },
		height: "auto",
		...flex("space-between", "center"),
		gap: "30px",
		paddingBottom: "50px",
		borderBottom: "1px solid green",
		flexDirection: { xs: "column", md: "row" },
	},
	feature: {
		width: { xs: "100%", md: "50%" },
		height: "100%",
		padding: { md: "40px" },
		marginBottom: { xs: "30px", md: 0 },
	},
	feature__image: { width: "90%", height: "70%", display: "block", marginInline: "auto", borderRadius: "10px 10px 0 0", marginBottom: "20px" },
};

export default featuresStyles;
