import { useState, useEffect, useRef } from 'react';
import './popup.css';
import popupimg from './../../assets/img/popupimg.png';
import close from './../../assets/img/close.png';
import emailjs from 'emailjs-com';

function Popup(props){

  const form = useRef();

  const [name,setname] = useState('')
  const nameonchangehandler = (e) => {setname(e.target.value)}

  const [email,setemail] = useState('')
  const emailonchangehandler = (e) => {setemail(e.target.value)}

  const [phone,setphone] = useState('')
  const phoneonchangehandler = (e) => {setphone(e.target.value)}

  const [bookdate,setbookdate] = useState('')
  const bookdateonchangehandler = (e) => {setbookdate(e.target.value)}

  const closepopup = () => {
    props.setpopupdisplay('none')
  }

  const sendEmail = (e) => {
    console.log("sending email");
    e.preventDefault();

    emailjs.sendForm('service_3wfs9ce', 'template_p9MAmx6m', form.current, 'user_uM55AN7HZqpNZx6wxMSjV')
     .then((result) => {
         console.log(result.text);
         alert("Message Sent.")
         setname('')
         setemail('')
         setphone('')
         setbookdate('')
     }, (error) => {
         console.log(error.text);
     });
  }

  return (
    <div className="popup_outercontainer" style={{display:props.display}}>

      <div className="popup_innercontainer">
        <div className="close" onClick={closepopup}>
          <img src={close} alt="" />
        </div>
        <div className="popupimg_container">
          <img src={popupimg} alt="" />
          <p>Please note this is our central kitchen facility. Dine in is available in our tasting room for a minimum group of 6 and maximum of 8 on pre-reservation basis only !</p>
          <form ref={form}>
            <div className="form_group">
              <input type="text" name="name" value={name} placeholder="Full Name" />
              <input type="text" name="email" value={email} placeholder="Email" />
            </div>
            <div className="form_group">
              <input type="text" name="phone" value={phone} placeholder="Contact No." />
              <input type="text" name="bookdate" value={bookdate} placeholder="Date of Booking" />
            </div>
            <div className="">
              <button type="button" name="button">Book Now</button>
              <span>Someone from our team will contact you to confirm the availability and discuss menu options.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Popup;
