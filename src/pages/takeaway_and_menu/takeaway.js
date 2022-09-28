import { useEffect } from 'react';
import './takeaway.css';

import RunnerUp from './../../components/runnerup/runnerup';
import {Link} from "react-router-dom";

import m2bg2 from './../../assets/img/tm/m2bg2.png';
import m2bg1 from './../../assets/img/tm/m2bg1.png';

import ourteam from './../../assets/videos/ourteam.mp4';

function Takeaway() {

  useEffect(() => {
    document.title = "Takeaways";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="takeaway">

    <div className="first" id="tfirst">
      <h1>Takeaway</h1>
    </div>


    <div className="second">
      <h2>Enjoy It To-Go</h2>
      <p>Enjoy our to go menu at the comfort of your homes from the Britain’s Top Recognized takeaway.</p>
    </div>

    <div className="third">
      <video src={ourteam} autoPlay muted loop></video>
    </div>

    <div className="fourth">
      <h2>Click & Collect</h2>
      <div className="fourth_info">
        <p>Pop by your local  Curry on naanstop branch and enjoy our mumbai food at home or wherever you are. You can order online and have it ready for collection in no time.</p>
        <div>
          <Link to='/7dial'><a>7 Dials Market</a></Link>
        </div>
        <div>
          <Link to='/cucumber-alley'><a>Cucumber Alley</a></Link>
        </div>
        <div>
          <Link to='/hernehill'><a>Herne Hill</a></Link>
        </div>

      </div>
      <img src={m2bg2} alt="" id="m2bg2" />
    </div>

    <div className="fourth">
      <h2>Order Food</h2>
      <div className="fourth_info">
        <p>Pop by your local  Curry on naanstop branch and enjoy our mumbai food at home or wherever you are. You can order online and have it ready for collection in no time.</p>
        <div>
          <Link to='/7dial'><a>7 Dials Market</a></Link>
        </div>
        <div>
          <Link to='/cucumber-alley'><a>Cucumber Alley</a></Link>
        </div>
        <div>
          <Link to='/hernehill'><a>Herne Hill</a></Link>
        </div>

      </div>
      <br/><br/>
      <img src={m2bg1} alt="" id="m2bg1" />
    </div>


    <RunnerUp />

    </div>
  )
}

export default Takeaway;
