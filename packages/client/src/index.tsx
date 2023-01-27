import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

createRoot(document.querySelector("#app") as Element).render(<App />);
