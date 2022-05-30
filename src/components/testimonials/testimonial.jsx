import React from "react";
import qoute from "../../assets/img/testimonials/quote.svg"
const Testimonial = ({ Name, Text, Designation, ImgUrl }) => {

    return (
        <>
            <li>
                <div className="icon">
                    <img className="svg" src={qoute} alt="" />
                </div>
                <div className="text">
                    <p>{Text}</p>
                </div>
                <div className="short">
                    <div className="image">
                        <div className="main" data-img-url={ImgUrl}></div>
                    </div>
                    <div className="detail">
                        <h3>{Name}</h3>
                        <span>{Designation}</span>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Testimonial;