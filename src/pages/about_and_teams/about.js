import { useEffect } from 'react';
import './about.css';

import RunnerUp from './../../components/runnerup/runnerup';
import Instagram from './../../components/instagram/instagram';
import Youtube from './../../components/youtube/youtube';

import first_bg from './../../assets/img/about_us/first_bg.png';
import third from './../../assets/img/about_us/third.png';
import mem1 from './../../assets/img/about_us/mem1.png';
import mem2 from './../../assets/img/about_us/mem2.png';

function About() {

  useEffect(() => {
    document.title = "About Us";
  window.scrollTo(0, 0)
  }, [])

  return (
    <div className="abtm">
    <div className="first">
      <img src={first_bg} alt="" />
    </div>

    <div className="second">
      <h1>Our Story</h1>
      <p>Swati and Karthikk moved to UK from India in 2008 soon after their first wedding anniversary and started a life working in London, in Banking & Pharmaceuticals.

        <br/><br/>They always missed home style cooking and recipes and didn't find anything authentic that offered them the flavours and aromas of India.

        <br/><br/>Swati's mum did all the cooking and after her marriage to Karthikk, his mum cooked for them both. Newly living in London and having never cooked before, Swati had to learn to cook via Skype, with online lessons from her mum and mother in law.

        <br/><br/>That is when she realised cooking and serving food to family and friends was big part of her passion and she wanted to share those flavours and with everyone.

        <br/><br/>At first Karthikk was not convinced that launching a food business was a good idea, the big decision to give up a decent pay cheque was too much of a risk, but Swati couldn't ignore her love for food. She convinced him to keep their jobs and launch a food truck, this way they could be flexible on the operating days and hours. Finally in January 2018 the dream turned into reality, in their local area Surrey Street Market, with zero commitment the Curry on Naanstop food truck was born. They stayed within their jobs for about another year, before turning their time to the business full time.

        <br/><br/>Their dream is to see multiple Curry On Naanstop trucks and restaurants in every area town and city and share a passion for home cooking with the future launch of their home made spices and cooking kits - watch this space
      </p>
    </div>

    <div className="third">
      <img src={third} alt="" />
    </div>


    <div className="fourth">
      <h3>MEET THE MEMBERS</h3>
      <div className="member_container" id="member1">
        <div className="member_img">
          <img src={mem1} alt="" />
        </div>
        <div className="member_info">
          <span>FOUNDER</span>
          <h2>Swati</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
      </div>
      <div className="member_container" id="member2">
        <div className="member_info">
          <span>FOUNDER</span>
          <h2>Karthikk</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </div>
        <div className="member_img">
          <img src={mem2} alt="" />
        </div>
      </div>


    </div>

    <div className="bg_container1">
      <Instagram />
      <Youtube />
    </div>

    <RunnerUp />

    </div>
  )
}

export default About;
