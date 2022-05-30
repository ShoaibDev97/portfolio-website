import React from "react";
import avatar from "../../assets/img/about/2.png"
const About = () => {
    return (
        <div className="dizme_tm_section" id="about">
            <div className="dizme_tm_about">
                <div className="container">

                    <div className="wrapper">
                        <div className="left">
                            <div className="image">
                                <div className="portfolio-img-container">
                                    <img src={avatar} alt="" className="portfolio-img" />
                                </div>
                                <div className="numbers year">
                                    <div className="wrapper">
                                        <h3><span className="dizme_tm_counter" data-from="0" data-to="2" data-speed="2000">2</span><span>+</span></h3>
                                        <span className="name">Years of<br />Success</span>
                                    </div>
                                </div>
                                <div className="numbers project">
                                    <div className="wrapper">
                                        <h3 className="yellowText"><span className="dizme_tm_counter" data-from="0" data-to="50" data-speed="2000">50</span><span>+</span></h3>
                                        <span className="name">Total<br />Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title wow fadeInUp" data-wow-duration="1s">
                                <span>I'm a Designer</span>
                                <h3>I Can Design Anything You Want</h3>
                            </div>
                            <div className="text wow fadeInUp" data-wow-duration="1s">
                                <p className="about-para">Hello there! I'm a web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                            </div>
                            {/* <div className="dizme_tm_button wow fadeInUp" data-wow-duration="1s">
                                <a className="anchor" href="#contact"><span>Hire Me</span></a>
                            </div> */}

                            <div class="banner">
                                <a href="#" class='butn butn__new'><span>About Me</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/about/1.png" alt="" /></div>
                <div className="brush_2 wow fadeInRight" data-wow-duration="1s"><img src="img/brushes/about/2.png" alt="" /></div>
            </div>
        </div>
    )
}

export default About