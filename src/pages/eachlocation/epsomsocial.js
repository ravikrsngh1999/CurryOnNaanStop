import { useEffect } from 'react';
import './eachlocation.css';

import RunnerUp from './../../components/runnerup/runnerup';
import epsmenu from './../../assets/pdfs/epsmenu.pdf';
import epsallergenmatrix from './../../assets/pdfs/epsallergenmatrix.pdf';
import epsommap from './../../assets/img/location/epsommap.png';

function EpsomSocial(){

  useEffect(() => {
    document.title = "Epsom Social";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="el">
    <div className="first" id="epsomfirst">
      <h1>Epsom Social</h1>
    </div>

    <div className="second">
      <h2>Find us at Epsom Social</h2>

      <div className="links">
        <a href={epsmenu} target="_blank">Menus</a>
        <a href={epsallergenmatrix} target="_blank">Allergen Matrix</a>
      </div>


    </div>

    <div className="third">
      <div className="third_1">
        <img src={epsommap} alt="" />
      </div>
      <div className="third_2">
        <div className="">
          <h4>Address</h4>
          <span>1 Derby Square, <br/> Epsom KT19 8AG, <br/> United Kingdom</span>
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

export default EpsomSocial;
