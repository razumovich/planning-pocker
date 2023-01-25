import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Planning Pocker</h1>;

createRoot(document.querySelector("#app")!).render(<App />);
