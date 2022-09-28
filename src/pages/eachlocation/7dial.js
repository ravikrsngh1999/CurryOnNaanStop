import { useEffect } from 'react';
import './eachlocation.css';

import RunnerUp from './../../components/runnerup/runnerup';
import dialmenu from './../../assets/pdfs/7dialmenu.pdf';
import allergenmatrix from './../../assets/pdfs/allergenmatrix.pdf';
import l1 from './../../assets/img/location/l1.png';

function Dial(){

  useEffect(() => {
    document.title = "7Dial";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="el">
    <div className="first" id="dialfirst">
      <h1>7 Dials Market</h1>
    </div>

    <div className="second">
      <h2>Find us at 7 dials market</h2>

      <div className="links">
        <a href={dialmenu} target="_blank">Menus</a>
        <a href={allergenmatrix} target="_blank">Allergen Matrix</a>
      </div>


    </div>

    <div className="third">
      <div className="third_1">
        <img src={l1} alt="" />
      </div>
      <div className="third_2">
        <div className="">
          <h4>Address</h4>
          <span>Kitchen 4 , Ground Floor <br/>Earlham Street <br/>London WC2H 9LD</span>
        </div>
        <div className="">
          <h4>Opening Hours</h4>
          <span>Monday to Friday - 12-10PM <br/> Saturday-10am to 10 pm <br/> Sunday 10am to 9pm</span>
        </div>
        <div className="contact_us">
          <h4>Contact Us</h4>
          <span>07703608675</span>
        </div>
      </div>
    </div>

    <RunnerUp/>
    </div>
  )
}

export default Dial;
