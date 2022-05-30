import React from "react";
import {createPortal} from "react-dom";

const InnerCursor = () =>{
    return(
        <React.Fragment>
                           <div className="mouse-cursor cursor-inner" style={{"visibility": "visible", transform: "translate(1321px, 506px)"}}></div>
        </React.Fragment>
    )
}

const OuterCursor = () =>{
    return(
        <React.Fragment>
           <div className="mouse-cursor cursor-outer" style={{"visibility": "visible", transform: "translate(1321px, 506px)"}}></div>
        </React.Fragment>
    )
}

const Cursor = () =>{
    return(
        <React.Fragment>
            {createPortal(<InnerCursor/>,document.getElementById('custom-cursor'))}
            {createPortal(<OuterCursor/>,document.getElementById('custom-cursor'))}
        </React.Fragment>
    )
}

export default Cursor