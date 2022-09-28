import { useEffect } from 'react';
import './about.css';
import './teams.css';

import RunnerUp from './../../components/runnerup/runnerup';
import Instagram from './../../components/instagram/instagram';
import Youtube from './../../components/youtube/youtube';

import first_bg1 from './../../assets/img/about_us/first_bg1.png';
import third from './../../assets/img/about_us/third.png';
import teamvid from './../../assets/videos/ourteam.mp4';

function Teams() {

  useEffect(() => {
    document.title = "Our Team";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="abtm">

    <div className="first">
      <img src={first_bg1} alt="" />
    </div>

    <div className="second">
      <h1>Our Team</h1>
      <p>The strength of the team is each individual member. The strength of each member is the team.</p>
      <video src={teamvid} autoPlay muted loop></video>
    </div>

    <div className="third">
      <img src={third} alt="" />
    </div>


    <div className="bg_container1">
      <Instagram />
      <Youtube />
    </div>

    <RunnerUp />

    </div>
  )
}

export default Teams;
