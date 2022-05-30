import React from 'react'
import ContactForm from './ContactForm'
const Contact = () => {
    

 
    return (
        <div className="dizme_tm_section" id="contact">
            <div className="dizme_tm_contact">
                <div className="container">
                    <div className="dizme_tm_main_title" data-align="center">
                        <span>Contact Me</span>
                        <h3 className='orangeText'>I Want To Hear From You</h3>
                        <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                    </div>
                    <div className="contact_inner">
                        <div className="left wow fadeInLeft" data-wow-duration="1s">
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <div className="icon orangeBackground">
                                            <i className="icon-location orangeText"></i>
                                        </div>
                                        <div className="short">
                                            <h3 className='orangeText'>Address</h3>
                                            <span>Garden West Karachi  Sindh  Pakistan</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="icon greenBackground">
                                            <i className="icon-mail-1 greenText"></i>
                                        </div>
                                        <div className="short">
                                            <h3 className='orangeText'>Email</h3>
                                            <span><a href="#">shoaibmuhammadarif@gmail.com</a></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="icon purpleBackground">
                                            <i className="icon-phone purpleText"></i>
                                        </div>
                                        <div className="short">
                                            <h3 className='orangeText'>Phone</h3>
                                            <span>+92 335 7591625</span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="list_inner">
                                        <div className="icon blueBackground">
                                            <i className="icon-skype purpleText"></i>
                                        </div>
                                        <div className="short">
                                            <h3 className='orangeText'>Skype</h3>
                                            <span>shoaibarif@skpe.com</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="right wow fadeInRight" data-wow-duration="1s">
                            <div className="fields">
                            <ContactForm/>
                            </div>
                        </div>
                        <div className="brush_2 wow fadeInRight" data-wow-duration="1s"><img src="img/brushes/contact/2.png" alt="" /></div>
                    </div>
                    <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
                </div>

                </div>
                <div className="brush_1 wow fadeInLeft" data-wow-duration="1s"><img src="img/brushes/contact/1.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Contact