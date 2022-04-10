import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function render()
{
    const div=document.getElementById("root");
    if(!div) return;
    ReactDOM.render(<App />,div);
}

render();