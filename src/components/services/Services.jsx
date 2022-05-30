import React from "react";
// import target1 from "../../assets/img/brushes/process/dark/1.png"
import Service from "./Service";
import { ServiceConfig } from "./ServiceConfig";

const Services = () => {
    return (
        <div className="dizme_tm_section" id="service">
            <div className="dizme_tm_process">
                <div className="container">
                    <div className="dizme_tm_main_title" data-align="center">
                        <span>Services</span>
                        <h3>I Provide these Services </h3>
                        <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                    </div>
                    <div className="list">
                        <ul className="row">
                            {
                                ServiceConfig.map(({ id, title, para, delay, imageUrl }) => {
                                    return (
                                        <Service key={id} title={title} para={para} delay={delay} imageUrl={imageUrl} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services