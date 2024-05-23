import React from 'react'
import './contact.css'
import mailicon from '../../assets/mail_icon.svg'
import callicon from '../../assets/call_icon.svg'
import locationicon from '../../assets/location_icon.svg'



const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d9313e91-e8cb-4b37-944c-f77ea9d957b2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };
  return (
      <div id='contact' className="contact">
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
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
  )
}

export default Contact
