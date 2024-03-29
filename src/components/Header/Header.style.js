import { flex } from "../../styles";
const headerStyles = {
	header__container: { ...flex("space-between", "center"), width: "100%", margin: 0 },
	header__logo: { height: "20px", width: "30px" },
	header__ctas: { ...flex("space-between", "center"), gap: "20px" },
	header__link: {
		fontSize: "13px",
		fontWeight: "500",
		padding: "5px 10px",
		borderRadius: "7px",
		textTransform: "none",

		"&:hover": {
			cursor: "pointer",
			// backgroundColor: "rgb(10, 15, 24)",
		},
	},
	header__navigations: { ...flex("flex-start", "center"), gap: "10px", marginLeft: "240px" },
	header__icon: {
		fontSize: "16px",
		"&:hover": {
			cursor: "pointer",
		},
	},
};
export default headerStyles;
