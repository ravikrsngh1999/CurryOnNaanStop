import { useEffect } from 'react';
import './location.css';
import RunnerUp from './../../components/runnerup/runnerup';
import {Link} from "react-router-dom";
function Location() {

  useEffect(() => {
  document.title = "Our Locations";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="location">
    <div className="first">
      <h1>Find Curry On Naanstop</h1>
    </div>

    <div className="location_container" id="location1">

      <h2>7 Dials Market</h2>
      <Link to='/7dial'><button type="button" name="button">CLICK HERE</button></Link>

    </div>





    <div className="location_container" id="location2">

      <h2>Cucumber Alley</h2>
      <Link to='/cucumber-alley'><button type="button" name="button">CLICK HERE</button></Link>

    </div>





    <div className="location_container" id="location3">

      <h2>Herne Hill</h2>
      <Link to='/hernehill'><button type="button" name="button">CLICK HERE</button></Link>

    </div>

    <div className="location_container" id="location4">

      <h2>Epsom Social</h2>
      <Link to='/epsomsocial'><button type="button" name="button">CLICK HERE</button></Link>

    </div>

    <div className="location_container" id="location5">

      <h2>Market Place - Vauxhall</h2>
      <Link to='/vauxhall'><button type="button" name="button">CLICK HERE</button></Link>

    </div>




    <RunnerUp />
    </div>
  )
}


export default Location;
