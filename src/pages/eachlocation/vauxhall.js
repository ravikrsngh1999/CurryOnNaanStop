import { useEffect } from 'react';
import './eachlocation.css';
import './cucumber.css';
import RunnerUp from './../../components/runnerup/runnerup';
import vauxmenu from './../../assets/pdfs/vauxmenu.pdf';
import vauxallergenmatrix from './../../assets/pdfs/vauxallergenmatrix.pdf';
import vauxmap from './../../assets/img/location/vauxmap.png';

function Cucumber(){

  useEffect(() => {
    document.title = "Cucumber Alley";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="el">
    <div className="first" id="vauxfirst">
      <h1>Market Place - Vauxhall</h1>
    </div>

    <div className="second">
      <h2>Find us at Vauxhall</h2>

      <div className="links">

      <a href={vauxmenu} target="_blank">Menus</a>
      <a href={vauxallergenmatrix}>Allergen Matrix</a>
      </div>

    </div>

    <div className="third">
      <div className="third_1">
        <img src={vauxmap} alt=""/>
      </div>
      <div className="third_2">
        <div className="">
          <h4>Address</h4>
          <span>7-11 S Lambeth Pl, <br/> London SW8 1SP, <br/> United Kingdom</span>
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

export default Cucumber;
