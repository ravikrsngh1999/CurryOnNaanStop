import './header.css';
import logo from './../../assets/img/index/logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header_bg">

      </div>
      <div className="header_container">
        <div className="header_logo">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="header_nav">
          <Link to='/our-teams'><a>OUR TEAM</a></Link>
          <Link to='/our-locations'><a>LOCATIONS</a></Link>
          <Link to='/food-truck'><a>FOOD TRUCK</a></Link>
          <Link to='/our-menu'><a>MENU</a></Link>
          <Link to='/contact-us'><a>CONTACT US</a></Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
