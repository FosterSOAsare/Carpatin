import { flex } from "../../styles";
const headerStyles = {
	header__container: { ...flex("space-between", "center") },
	header__logo: { height: "20px", width: "30px" },
	header__ctas: { ...flex("space-between", "center"), gap: "20px" },
	header__link: { fontSize: "14px", fontWeight: "500" },
	header__navigations: { ...flex("flex-start", "center"), gap: "20px" },
	header__icon: {
		fontSize: "16px",
	},
};
export default headerStyles;
