import React from "react";
import "./Footer.css";
import logo from "../../assets/CSI.png";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    CSI is a student council of Department of Computer
                    Engineering at Pad. Dr. D.Y. Patil Institute of Engineering
                    and Technology, Pimpri. Formed in the year 2012, the club
                    has always been "For the students and By the students"
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <Instagram className="icon-bg" />
                  </a>
                  <a target="_blank" href="#">
                    <Facebook className="icon-bg" />
                  </a>
                  <a target="_blank" href="#">
                    <LinkedIn className="icon-bg" />
                  </a>
                  <a target="_blank" href="#">
                    <Email className="icon-bg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Members</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <Telegram className="icon-bg" />
                    </button>
                  </form>
                </div>
                <div className="created-website">
                  <p>
                    Created By{" "}
                    <a href="https://www.linkedin.com/in/burhanuddin49/">
                      Burhanuddin Marcha &
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/in/aniketghavte/">
                      {" "}
                      Aniket Ghavte
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright &copy; 2023, All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
