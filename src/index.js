import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { RippleBackground } from "./App";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/cursor_gooey";

ReactDOM.render(
    <AnimatePresence>
        <Cursor />
        <RippleBackground />
        <App />
    </AnimatePresence>,
    document.getElementById("root")
);
