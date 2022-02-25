import React from "react";
import Pics from "../fb.png";
import "../index.css";
function About(){
    return(
        <div className="about">
            <h3>About</h3>
            <p className="a">
            the about paragraph is here!the about paragraph is here! the about paragraph is here!
            the about paragraph is here! the about paragraph is here! the about paragraph is here!
            the about paragraph is here! the about paragraph is here! the about paragraph is here!
            the about paragraph is here! the about paragraph is here!
            </p>
            <h3>Interests</h3>
            <p className="interests">
                the interests paragraph is here! the interests paragraph is here! the interests paragraph is here!
                the interests paragraph is here! the interests paragraph is here! the interests paragraph is here!
                the interests paragraph is here! the interests paragraph is here!
            </p>
            <div className="icons">
                <img src={Pics} alt = "pic" width = "50px" ></img>
                <img src={Pics} alt = "pic" width = "50px" ></img>
                <img src={Pics} alt = "pic" width = "50px" ></img>
                <img src={Pics} alt = "pic" width = "50px" ></img>
            </div>
        </div>
    )
}
export default About;
