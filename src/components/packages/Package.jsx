import React from "react";
const Package = ({ Title, Price, Description, Thumbnail, AdditionalClass, Delay }) => {
    return (
        <>
            <li className={`wow ${AdditionalClass} ` } data-wow-duration="1s" data-wow-delay={Delay}>
                <div className="list_inner tilt-effect " id="package-card">
      
                    <div className="title">
                        <h3>{Title}</h3>
                        <span className="price">Starts from <span className="orangeText">${Price}</span></span>
                    </div>
                    <div className="text">
                        <p>{Description}</p>
                    </div>
                </div>
            </li>
        </>
    )
}
export default Package;