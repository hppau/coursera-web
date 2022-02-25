import React from "react";
import Logo from "../noella.jpg";
import "../index.css";
function Info(){
    return(
        <div className="info">
            <img src={Logo} alt = "logo" width = "500px"></img>
            <div className = "personalinfo">
                <h1 className="name">Hppa</h1>
                <h2 className="job">Web developer</h2>
                <h3 className="smth">fjeiosvnaeivnos</h3>
            </div>
            <div className="button">
                <button value="Email" className="email">Email</button>
                <button value = "LinkedIn" className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}
export default Info;