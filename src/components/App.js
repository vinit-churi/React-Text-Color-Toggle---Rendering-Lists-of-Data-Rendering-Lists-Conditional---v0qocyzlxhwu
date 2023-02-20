import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
    //code here
    const [colorClass, setColorClass] = useState(false);
    const changeStyle = () => {
        const currentState = colorClass;
        setColorClass(!currentState);
    };
    return (
        <div id="main">
            <p className={colorClass ? "blueColor" : "redColor"}>
                Newton School
            </p>
            <button id="button" onClick={changeStyle}>
                Change Style
            </button>
        </div>
    );
};

export default App;
