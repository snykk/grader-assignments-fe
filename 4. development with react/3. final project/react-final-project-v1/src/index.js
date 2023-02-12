import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const customTheme = {
    ...theme,
    fontsFamily: "Poppins, sans-serif",
    fontsWeight: "normal",
};

const AnswerHere = () => {
    return (
        <ChakraProvider theme={customTheme}>
            <CSSReset />
            <Router>
                <App />
            </Router>
        </ChakraProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AnswerHere />
    </React.StrictMode>
);
