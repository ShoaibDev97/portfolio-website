import React, { useState, useEffect } from "react";

const Widget = () => {
    const [display, setDisplay] = useState("hide");

    const listenToScroll = () => {
        if (window.pageYOffset >= 300) {
            setDisplay("show")
        }
        else {
            setDisplay("hide")
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    return (
        <React.Fragment>
            <a data-aos="zoom-in" href="https://wa.me/+923357591625" className="whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp "></i>
            </a>
            <a data-aos="zoom-in-up" href="#home" className={`backToTop  ${display}`}   ></a>
        </React.Fragment>
    )
}

export default Widget;