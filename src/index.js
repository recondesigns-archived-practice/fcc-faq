import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

function Index() {
  return <App />;
}

ReactDOM.render(<Index />, rootElement);
