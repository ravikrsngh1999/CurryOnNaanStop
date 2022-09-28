import { useState, useEffect, useRef } from 'react';
import './contact.css';
import './foodtruck.css';
import fb_c from './../../assets/img/fb_c.png';
import ins_c from './../../assets/img/ins_c.png';
import van from './../../assets/img/van.jpg';
import emailjs from 'emailjs-com';
function FoodTruck(){

  const form = useRef();

  const [name,setname] = useState('')
  const nameonchangehandler = (e) => {setname(e.target.value)}

  const [email,setemail] = useState('')
  const emailonchangehandler = (e) => {setemail(e.target.value)}

  const [phone,setphone] = useState('')
  const phoneonchangehandler = (e) => {setphone(e.target.value)}

  const [eventdate,seteventdate] = useState('')
  const eventdateonchangehandler = (e) => {seteventdate(e.target.value)}

  const [eventtype,seteventtype] = useState('Event Type')
  const eventtypeonchangehandler = (e) => {seteventtype(e.target.value)}

  const [message,setmessage] = useState('')
  const messageonchangehandler = (e) => {setmessage(e.target.value)}


  const sendEmail = (e) => {
    console.log("sending email");
    e.preventDefault();

    emailjs.sendForm('service_h5h6qdv', 'template_xfbmn21', form.current, 'JwMeb4mhbogaAU4r5')
     .then((result) => {
         console.log(result.text);
         alert("Message Sent.")
         setname('')
         setemail('')
         setphone('')
         seteventdate('')
         seteventtype('Event Type')
         setmessage('')
     }, (error) => {
         console.log(error.text);
     });
  }

  useEffect(() => {
    document.title = "Food Truck";
  window.scrollTo(0, 0);
  }, [])

  return (
    <div className="contact">
    <div className="first" id="tfoodtruck">
      <h1>Food Truck</h1>
    </div>

    <div className="foodtruck_container">
      <p>You can hire us for your special events and weddings. We can offer amazing menu choices including Canapés , Sharing platters or casual street style menu.</p>
      <img src={van} />
    </div>



    <div className="second">

      <div className="second_1">
        <div className="form_container">
          <h2>Hire Us</h2>
          <p>Contact us and our events team will reach out to you within 48 hours.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form_group">
              <input type="text" name="name" value={name} onChange={nameonchangehandler} placeholder="Your name" id="name" required/>
              <input type="text" name="email" value={email} onChange={emailonchangehandler} placeholder="Your Email" id="email" required/>
            </div>
            <div className="form_group">
              <input type="text" name="phone" value={phone} onChange={phoneonchangehandler} placeholder="Your Phone No." id="phone" required/>
              <input type="text" name="eventdate" value={eventdate} onChange={eventdateonchangehandler} placeholder="Event Date" required/>
            </div>
            <div className="form_group">
              <select name= {eventtype} value={eventtype} onChange={eventtypeonchangehandler}>
                <option value="Event Type" disabled>Event Type</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="House Warming">House Warming</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form_group">
              <input type="text" name="message" value={message} onChange={messageonchangehandler} placeholder="Your Message" id="message" required/>
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

export default FoodTruck;
