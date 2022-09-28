import { useState, useEffect, useRef } from 'react';
import './contact.css';
import fb_c from './../../assets/img/fb_c.png';
import ins_c from './../../assets/img/ins_c.png';
import emailjs from 'emailjs-com';
function Contact(){

  const form = useRef();

  const [name,setname] = useState('')
  const nameonchangehandler = (e) => {setname(e.target.value)}

  const [email,setemail] = useState('')
  const emailonchangehandler = (e) => {setemail(e.target.value)}

  const [phone,setphone] = useState('')
  const phoneonchangehandler = (e) => {setphone(e.target.value)}

  const [subject,setsubject] = useState('')
  const subjectonchangehandler = (e) => {setsubject(e.target.value)}

  const [message,setmessage] = useState('')
  const messageonchangehandler = (e) => {setmessage(e.target.value)}


  const sendEmail = (e) => {
    console.log("sending email");
    e.preventDefault();

    emailjs.sendForm('service_h5h6qdv', 'template_d0i5vcr', form.current, 'JwMeb4mhbogaAU4r5')
     .then((result) => {
         console.log(result.text);
         alert("Message Sent.")
         setname('')
         setemail('')
         setphone('')
         setsubject('')
         setmessage('')
     }, (error) => {
         console.log(error.text);
     });
  }

  useEffect(() => {
    document.title = "Contact Us";
  window.scrollTo(0, 0);
  }, [])

  return (
    <div className="contact">
    <div className="first" id="tfirst">
      <h1>Contact Us</h1>
    </div>


    <div className="second">

      <div className="second_1">
        <div className="form_container">
          <h2>Contact Us</h2>
          <p>One of our team member will reach out to you in 48 hrs.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_group">
              <input type="text" name="name" value={name} onChange={nameonchangehandler} placeholder="Your name" id="name" required />
              <input type="text" name="email" value={email} onChange={emailonchangehandler} placeholder="Your Email" id="email" required />
            </div>
            <div className="form_group">
              <input type="text" name="phone" value={phone} onChange={phoneonchangehandler} placeholder="Your Phone No." id="phone" required />
              <input type="text" name="subject" value={subject} onChange={subjectonchangehandler} placeholder="Subject" id="subject" required />
            </div>
            <div className="form_group">
              <input type="text" name="message" value={message} onChange={messageonchangehandler} placeholder="Your Message" id="message" required />
            </div>
            <button type="submit" name="button">Submit Message</button>
          </form>
        </div>
      </div>

      <div className="second_2">
        <p>We’re a lot chattier on social media than anywhere else… say hi! You can find us at curryonnaanstop...</p>
        <div className="social_icon">
          <a href="#"> <img src={ins_c} alt="" /> </a>
          <a href="#"> <img src={fb_c} alt="" /> </a>
        </div>
        <div className="contact_detail">
          <h2>Contact Us</h2>
          <a href="tel:+44(0)20803329460">07703608675</a>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Contact;
