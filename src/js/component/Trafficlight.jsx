import React, { useState } from "react";
import "../../styles/index.css";

export const Trafficlight = () => {

    const [light, setLight] = useState(null)

    const myStyle = {
        boxShadow: "0 0 80px #fff",        
        animation:"glow 0.8s linear infinite alternate",        
    }    
    
    const theRedClick = () => {
        setLight("red")
    }
    const theYellowClick = () => {
        setLight("yellow")
    }
    const theGreenClick = () => {
        setLight("green")
    }

    return (
        <div className="box">            
            <div className= "redlight" onClick={theRedClick} style={light == "red" ? myStyle : null}></div>
            <div className="redyellow" onClick={theYellowClick} style={light == "yellow" ? myStyle : null}></div>
            <div className="redgreen" onClick={theGreenClick} style={light == "green" ? myStyle : null}></div>
        </div>
    )
}

