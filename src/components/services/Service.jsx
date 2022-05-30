import React from "react";
const Service = ({ title, para, delay, imageUrl }) => {
    return (
        <li className="wow fadeInUp col-lg-4" data-wow-duration="1s" data-wow-delay={delay}>
            <div className="list_inner service-card">
                <div className="img-wrapper">
                    <img src={imageUrl} className="custom-icon-img" alt="" />
                </div>
                <div className="title" >
                    <h3>{title}</h3>
                    <p>{para}</p>
                </div>
            </div>
        </li >
    )
}

export default Service