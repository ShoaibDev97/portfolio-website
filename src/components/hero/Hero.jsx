import React from "react";
import herobg from "../../assets/img/slider/hero.png"
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (
        <>
            <div className="dizme_tm_section" id="home">
                <div className="dizme_tm_hero">
                    <div className="background" data-img-url={herobg}></div>
                    <div className="container">
                        <div className="content">
                            <div className="details">
                                <div className="hello">
                                    <h3 className="orangeText wow fadeInUp" data-wow-duration="1s">Hello, I'm</h3>
                                </div>
                                <div className="name" >
                                    <h3 className="wow fadeInUp" data-wow-duration="1s">Shoaib Arif</h3>
                                </div>
                                <div className="job wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">

                                    <p>A <span className="orangeText">Smart Developer</span> From <span className="orangeText">Pakistan</span></p>
                                </div>
                                <div className="text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <p>I'm creative designer based in New York, and I'm very passionate and dedicated to my work.</p>
                                </div>
                                <div className="button wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
                                    {/* <div className="dizme_tm_button">
                                        <a className="anchor" href="#about"><span>About Me</span></a>
                                    </div> */}
                                    {/* <a href="#about" className="about-me-btn">About Me</a> */}
                                    {/* 
                                    <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                                        <a className="anchor" href="#about"><span>About Me</span></a>
                                    </div> */}

                                    <div class="banner">
                                        <a href="#" class='butn butn__new'><span>About Me</span></a>
                                    </div>
                                </div>
                                <div className="social">
                                    <ul>
                                        <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s"><a href="https://github.com/ShoaibDev97" target='_blank'>
                                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                                        </a></li>
                                        <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"><a href="https://www.linkedin.com/in/shoaibdev97/" target='_blank'>
                                            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>

                                        </a></li>
                                        <li className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s"><a href="https://stackoverflow.com/users/7770942/shoaib-muhammad-arif" target="_blank">
                                            <i className="fa fa-stack-overflow fa-2x" aria-hidden="true"></i>

                                        </a></li>




                                    </ul>
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="image">
                                    {/* <img src={avatar} alt="" /> */}
                                    {/* <span className="skills illustrator anim_moveBottom">
                                        <FaReact />
                                    </span>
                                    <span className="skills photoshop anim_moveBottom">
                                        <DiJavascript1 />
                                    </span>
                                    <span className="skills figma anim_moveBottom">
                                        <DiCss3 />
                                    </span> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero 