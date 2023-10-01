import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./fonts/IQOSSans-Regular.otf";
import "./fonts/IQOSSans-Light.otf";
import "./fonts/IQOSSans-Bold.otf";
import { hydrate, render } from "react-dom";

const root = document.getElementById("root") as HTMLElement;

if (root.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
}

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
