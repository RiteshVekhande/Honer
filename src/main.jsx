import React from "react";
import { createRoot } from "react-dom/client";
import "./Index.css";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

import App from "./App";

root.render(
<React.StrictMode>
<App/>
</React.StrictMode>
);

