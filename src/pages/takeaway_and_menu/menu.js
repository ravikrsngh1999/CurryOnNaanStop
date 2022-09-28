import { useEffect } from 'react';
import './takeaway.css';

import RunnerUp from './../../components/runnerup/runnerup';


import m2bg2 from './../../assets/img/tm/m2bg2.png';
import m2bg1 from './../../assets/img/tm/m2bg1.png';
import m1 from './../../assets/img/tm/m1.png';
import next from './../../assets/img/tm/next.png';


import dialmenu from './../../assets/pdfs/7dialmenu.pdf';
import camenu from './../../assets/pdfs/camenu.pdf';
import epsmenu from './../../assets/pdfs/epsmenu.pdf';
function Menu() {

  useEffect(() => {
    document.title = "Our Menu";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="takeaway">

    <div className="first" id="tmenu">
      <h1>Our Menu</h1>
    </div>


    <div className="second">
      <h2>For Every Cravings Of Your <span>Indian Food</span> </h2>
      <p>Let go of all your preconceptions of Indian food. Experience the real flavours of Mumbai and relish the true street food and the best authentic flavours. </p>
      <img src={m1} alt="" />

      <div className="menu_item">
        <a href={dialmenu} target="_blank">
          <h4>7Dial Market</h4>
          <img src={next} alt="" />
        </a>
      </div>

      <div className="menu_item">
        <a href={camenu} target="_blank">
          <h4>Cucumber Alley</h4>
          <img src={next} alt="" />
        </a>
      </div>

      <div className="menu_item">
        <a href="https://deliveroo.co.uk/menu/london/herne-hill/curry-on-naanstop-the-hall?day=today&geohash=gcpuv8q08z3n&time=1545">
          <h4>Herne Hill</h4>
          <img src={next} alt="" />
        </a>
      </div>

      <div className="menu_item">
        <a href={epsmenu} target="_blank">
          <h4>Epsom Social</h4>
          <img src={next} alt="" />
        </a>
      </div>

      <img src={m2bg1} alt="" id="m2bg1" />
      <img src={m2bg2} alt="" id="m2bg2" />

    </div>



    <RunnerUp />

    </div>
  )
}

export default Menu;
