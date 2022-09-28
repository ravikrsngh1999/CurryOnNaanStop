import { useEffect, useState } from 'react';
import './eachlocation.css';
import './hernehill.css';
import RunnerUp from './../../components/runnerup/runnerup';
import Popup from './../../components/popup/popup';
import dialmenu from './../../assets/pdfs/7dialmenu.pdf';
import l2 from './../../assets/img/location/l2.png';
import deliveroologo from './../../assets/img/deliveroologo.png';
function Hernehill(){

  const [popupdisplay, setpopupdisplay] = useState('none')
  const openpopup = () => {
    setpopupdisplay('flex')
  }

  useEffect(() => {
    document.title = "Herne Hills";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="el">
    <div className="first" id="hernehill">
      <h1>Herne Hill</h1>
    </div>

    <div className="second">
      <h2>Find us at Herne Hill</h2>

      <div class="links">
        <a href="https://deliveroo.co.uk/menu/london/herne-hill/curry-on-naanstop-the-hall?day=today&geohash=gcpuv8q08z3n&time=1545">Order with <img src={deliveroologo} /></a>
        <a onClick={openpopup}>Dine In</a>
      </div>

    </div>

    <div className="third">
      <div className="third_1">
        <img src={l2} alt="" />
      </div>
      <div className="third_2">
        <div className="">
          <h4>Address</h4>
          <span>Unit 12 , Stone Trading Estate <br/>Milkwood Road SE24 OJU</span>
        </div>
        <div className="">
          <h4>Opening Hours</h4>
          <span>Monday to Friday - 12-10PM <br /> Saturday-10am to 10 pm <br /> Sunday 10am to 9pm</span>
        </div>
        <div className="contact_us">
          <h4>Contact Us</h4>
          <span>07703608675</span>
        </div>
      </div>
    </div>


    <RunnerUp/>
    <Popup display = {popupdisplay} setpopupdisplay={setpopupdisplay} />
    </div>
  )
}

export default Hernehill;
