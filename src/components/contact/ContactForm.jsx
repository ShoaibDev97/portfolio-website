import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio_shoaib', 'template_ml32ypq', form.current, 'AdVjL5rFnkyVHS9mI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="empty_notice"><span>Please Fill Required Fields</span></div>
            <div className="input_list">
                <ul>
                    <li><input id="name" name="name" type="text" placeholder="Your Name" /></li>
                    <li><input id="email" name="email" type="text" placeholder="Your Email" /></li>
                    <li><input id="phone" name="phone" type="number" placeholder="Your Phone" /></li>
                    <li><input id="subject" name="subject" type="text" placeholder="Subject" /></li>
                </ul>
            </div>
            <div className="message_area">
                <textarea id="message" name="message" placeholder="Write your message here"></textarea>
            </div>
            <div class="banner">
                <a href="#" class='butn butn__new' type="submit"><span>Submit</span></a>
            </div>
            {/* <button type='submit '>Submit Now</button> */}
        </form>
    )
}

export default ContactForm;