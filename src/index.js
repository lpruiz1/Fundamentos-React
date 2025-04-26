import "./index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

// forma de pegar um elemento pelo id, dentro do index.html
const el = document.getElementById("root");
const root = createRoot(el);

root.render(<App />, el);
