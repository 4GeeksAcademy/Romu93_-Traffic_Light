import React, { useState } from "react";
import "../../styles/index.css";

export const Trafficlight = () => {

    const [light, setLight] = useState(null)

    const myStyle = {
        boxShadow: "0 0 80px #fff",        
        animation:"glow 0.8s linear infinite alternate",        
    }    
    
    return (
        <div className="box">            
            <div className= "redlight" onClick={() => setLight("red")} style={light == "red" ? myStyle : null}></div>
            <div className="redyellow" onClick={() => setLight("yellow")} style={light == "yellow" ? myStyle : null}></div>
            <div className="redgreen" onClick={() => setLight("green")} style={light == "green" ? myStyle : null}></div>
        </div>
    )
}

