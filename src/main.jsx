import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import GlobalContextProvider from "./Context/GlobalContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalContextProvider>
			<App />
		</GlobalContextProvider>
	</React.StrictMode>
);
