
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Location from './pages/location/location';
import About from './pages/about_and_teams/about';
import Teams from './pages/about_and_teams/teams';
import Takeaway from './pages/takeaway_and_menu/takeaway';
import Menu from './pages/takeaway_and_menu/menu';
import Dial from './pages/eachlocation/7dial';
import Cucumber from './pages/eachlocation/cucumber';
import Hernehill from './pages/eachlocation/hernehill';
import Contact from './pages/contact/contact';
import FoodTruck from './pages/contact/foodtruck';
import EpsomSocial from './pages/eachlocation/epsomsocial';
import Vauxhall from './pages/eachlocation/vauxhall';

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (

    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/our-locations' element={<Location/>} />
          <Route path='/our-teams' element={<Teams/>} />
          <Route path='/food-truck' element={<FoodTruck/>} />
          <Route path='/our-menu' element={<Menu/>} />
          <Route path='/7dial' element={<Dial/>} />
          <Route path='/cucumber-alley' element={<Cucumber/>} />
          <Route path='/hernehill' element={<Hernehill/>} />
          <Route path='/epsomsocial' element={<EpsomSocial/>} />
          <Route path='/vauxhall' element={<Vauxhall/>} />
          <Route path='/contact-us' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
