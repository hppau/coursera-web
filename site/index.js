import React from "react";
import ReactDOM from "react-dom";
import Info from "../src/components/info.js";
import About from "../src/components/about.js";
import "./index.css";
function Container(){
    return(
        <div className="container">
            <Info/>
            <About/>
        </div>
    )
}
ReactDOM.render(<Container/>,document.getElementById("root"));