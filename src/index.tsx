import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./fonts/IQOSSans-Regular.otf";
import "./fonts/IQOSSans-Light.otf";
import "./fonts/IQOSSans-Bold.otf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter basename={"/touch-pad"}>
    <App />
  </BrowserRouter>
);
