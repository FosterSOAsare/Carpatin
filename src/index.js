import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import DarkProvider from "./context/DarkTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<DarkProvider>
		<App />
	</DarkProvider>
);
