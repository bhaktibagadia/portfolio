import React from 'react'
import './contact.css'
import mailicon from '../../assets/mail_icon.svg'
import callicon from '../../assets/call_icon.svg'
import locationicon from '../../assets/location_icon.svg'

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact-title">
            <h1>Get in Touch</h1> 
        </div>
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I am open to any new opportunities and new projects excite me. Feel free to contact me!</p>
            <div className="contact-details">
                <div className="contact-detail">
                <img src={mailicon} alt="" /><p>bagadiabhakti2@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={callicon} alt="" /><p>9175251444</p>
                </div>
                <div className="contact-detail">
                <img src={locationicon} alt="" /><p>Nagpur, Maharashtra</p>
                </div>
            </div>
        </div>
        <div className="contact-right">
            <label htmlFor="Your Name"></label>
        </div>
      </div>
    </div>
  )
}

export default Contact
