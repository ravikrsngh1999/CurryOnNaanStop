import { useEffect } from 'react';
import './eachlocation.css';
import './cucumber.css';
import RunnerUp from './../../components/runnerup/runnerup';
import camenu from './../../assets/pdfs/camenu.pdf';
import caallergenmatrix from './../../assets/pdfs/caallergenmatrix.pdf';
import l1 from './../../assets/img/location/l1.png';

function Cucumber(){

  useEffect(() => {
    document.title = "Cucumber Alley";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="el">
    <div className="first" id="ccfirst">
      <h1>Cucumber Alley</h1>
    </div>

    <div className="second">
      <h2>Find us at Cucumber Alley</h2>

      <div className="links">

      <a href={camenu} target="_blank">Menus</a>
      <a href={caallergenmatrix}>Allergen Matrix</a>
      </div>

    </div>

    <div className="third">
      <div className="third_1">
        <img src={l1} alt=""/>
      </div>
      <div className="third_2">
        <div className="">
          <h4>Address</h4>
          <span>Kitchen 4 , First Floor <br/>Earlham Street <br/>London WC2H 9LD</span>
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
