
import React from "react";
import linkedIn from '../asset/linkedin.png'
import email from '../asset/email.jpg'

const Contact = () => {
    return (
        <section id="contact">
            <span className="contactHead">Contact</span>
            <div className="contactContainer">
                <div className="contactInfo">
                <img src={email} alt="email" className="contactIcon" />
                    <span>tharulatha56@gmail.com</span>
                </div>
                <div className="contactInfo">
                    <img src={linkedIn} alt="linkedIn" className="contactIcon"/>

                    <a href="https://www.linkedin.com/in/tharulatha-b-165897242" target="blank"><span>LinkedIn</span></a>
                </div>
                
            </div>
      </section>
  )
}

export default Contact