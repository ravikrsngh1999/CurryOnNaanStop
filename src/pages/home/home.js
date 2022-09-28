import { useEffect } from 'react';
import './home.css';
import RunnerUp from './../../components/runnerup/runnerup';
import Instagram from './../../components/instagram/instagram';
import Youtube from './../../components/youtube/youtube';
import Newsletter from './../../components/newsletter/newsletter';
import {Link} from "react-router-dom";

import herovid from './../../assets/videos/hero.mp4';
import down_arrow from './../../assets/img/index/down_arrow.png';
import second_1_1 from './../../assets/img/index/second_1_1.png';
import second from './../../assets/img/index/second.png';
import third_1 from './../../assets/img/index/third_1.png';
import third_2_1 from './../../assets/img/index/third_2_1.png';
import menu from './../../assets/pdfs/7dialmenu.pdf';
function Home(){

  useEffect(() => {
    document.title = "Home";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="home">
    <div className="first">
      <video muted loop autoPlay>
        <source src={herovid} type="video/mp4" />
      </video>
      <div className="first_scroll_down">
        <a href="#"><button type="button" name="button">Scroll Down To Explore</button></a>
        <img src={down_arrow} alt="" />
      </div>
    </div>

    <div className="second">
      <div className="second_1">
        <h2>MUMBAI TO LONDON</h2>
        <img src={second_1_1} alt="" />
        <p>Curry on Naanstop welcomes you on a journey through Mumbai’s authentic flavours and its street food.</p>
        <a href={menu} target = "_blank"> <button type="button" name="button">VIEW MENU</button> </a>
      </div>
      <div className="second_2">
        <img src={second} alt="" />
      </div>
    </div>


    <div className="third">
      <div className="third_1">
        <img src={third_1} alt="" />
      </div>
      <div className="third_2">
        <h2>ENJOT IT TO-GO</h2>
        <img src={third_2_1} alt="" />
        <p>Did you know ? <br/> We are recognised as Britain’s Top Takeaways as seen on BBC 1.</p>
        <a href={menu} target = "_blank"> <button type="button" name="button">VIEW MENU</button> </a>
      </div>

    </div>


    <div className="fourth">
      <span>Few Words About Us</span>
      <h2>Our Story</h2>
      <a href="https://www.bbc.co.uk/iplayer/episode/m00177hm/britains-top-takeaways-series-1-2-indian">READ MORE !</a>
    </div>

      <RunnerUp />
      <div className="bg_container1">
      <Instagram />
      <Youtube />
      </div>
      <Newsletter />
    </div>
  )
}

export default Home;
