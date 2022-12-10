import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/CSI.png";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark    ">
      <Link className="navbar-brand" href="/">
        <img className="logo_csi" src={logo} alt="" />
        <span style={{ fontSize: "17px" }}> COMPUTER SOCIETY OF INDIA</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex-lg-row justify-content-lg-around"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://acunetix10.netlify.app/">
              ACUNETIX 10.0
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Members
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Contact us
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row r-0">
          <li className="nav-item me-3 me-lg-0">
            <Link className="nav-link" href="#!">
              <InstagramIcon />
            </Link>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <Link className="nav-link" href="#!">
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
