import './footer.css';
import footer_logo from './../../assets/img/index/footer_logo.png';
import ins_logo from './../../assets/img/index/instagram.png';
import fb_logo from './../../assets/img/index/facebook.png';
function Footer(){
  return (
    <footer>
      <div className="footer_1">

        <div className="footer_1_1">
          <div className="footer_logo">
            <img src={footer_logo} alt="" />
          </div>
          <div className="footer_social">
            <a href="#"> <img src={ins_logo} alt="" /> </a>
            <a href="#"> <img src={fb_logo} alt="" /> </a>
          </div>
        </div>

        <div className="footer_1_2">
          <div className="footer_1_2_links">
            <h6>OUR DISHES</h6>
            <a href="#">Search Dishes</a>
            <a href="#">Order Online</a>
            <a href="#">Tiffin Club</a>
            <a href="#">FAQs</a>
            <a href="#">Corporate Hire & Functions</a>
            <a href="#">Wedding & Private Hire</a>
          </div>
          <div className="footer_1_2_links">
            <h6>ORDER FROM US</h6>
            <a href="#">CHEF SPECIALS & TANDOORI GRILLS</a>
            <a href="#">SOUTH SPECIAL TIFFINS</a>
            <a href="#">AUTHENTIC CURRIES</a>
            <a href="#">INDO-CHINESE</a>
            <a href="#">GRAND BANQUET DEALS</a>
            <a href="#">NAANWRAP & MUMBAI SPECIAL MAINS</a>
            <a href="#">RICE & NAAN BREAD</a>
          </div>
        </div>

      </div>
      <div className="footer_2">
        <span>© 2021 CURRY ON NAANSTOP</span>
      </div>
    </footer>
  )
}

export default Footer;
