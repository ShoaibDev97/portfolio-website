import React from "react";
import Testimonial from "./testimonial";
import { TESTIMONIAL_CONFIG } from "./testimonialsConfig";
import test1 from "../../assets/images/testimonials/test1.jpg"
import test2 from "../../assets/images/testimonials/test2.jpg"
import test3 from "../../assets/images/testimonials/test3.jpg"
import test4 from "../../assets/images/testimonials/test4.jpg"
import test5 from "../../assets/images/testimonials/test5.jpg"
import test6 from "../../assets/images/testimonials/test6.jpg"
import test7 from "../../assets/images/testimonials/test7.jpg"
// import testdesign1 from "../../assets/img/brushes/testimonials/1.png"


const Testimonials = () => {
    return (
        <div className="dizme_tm_section" id="testimonials">
            <div className="dizme_tm_testimonials">
                <div className="dizme_tm_main_title" data-align="center">
                    <span>Testimonials</span>
                    <h3>What My Clients Say</h3>
                    <p>Most common methods for designing websites that work well on desktop is responsive and adaptive design</p>
                </div>
                <div className="list_wrapper">
                    <div className="total">
                        <div className="in">
                            <ul className="owl-carousel owl-theme">
                                {TESTIMONIAL_CONFIG.map(({ Name, Text, Designation, ImgUrl }) => {
                                    return (
                                        <Testimonial key={Name} Name={Name} Text={Text} Designation={Designation} ImgUrl={ImgUrl} />
                                    )
                                })}


                            </ul>
                        </div>
                        <div className="left_details">
                            <div className="det_image one wow fadeIn" data-wow-duration="1s" data-img-url={test1}></div>
                            <div className="det_image two wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-img-url={test2}></div>
                            <div className="det_image three wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s" data-img-url={test3}></div>
                            <div className="det_image four wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s" data-img-url={test4}></div>
                            <span className="circle green animPulse"></span>
                            <span className="circle yellow animPulse"></span>
                            <span className="circle border animPulse"></span>
                        </div>
                        <div className="right_details">
                            <div className="det_image one wow fadeIn" data-wow-duration="1s" data-img-url={test5}></div>
                            <div className="det_image two wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s" data-img-url={test6}></div>
                            <div className="det_image three wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s" data-img-url={test7}></div>
                            <span className="circle yellow animPulse"></span>
                            <span className="circle purple animPulse"></span>
                            <span className="circle border animPulse"></span>
                        </div>
                    </div>
                </div>
                {/* <div className="brush_1 wow fadeInRight" data-wow-duration="1s"><img src={testdesign1} alt="" /></div> */}
            </div>
        </div>
    )
}

export default Testimonials