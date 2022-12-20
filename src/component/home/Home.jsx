import { Devices } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h3 className="text-center pt-5 mb-5">
        Welcome to Computer Society of India, DIT Chapter
      </h3>
      <div className="container-fluid py-4 p-sm-5 overview">
        <div className="row firstRow">
          <div className="col-sm-6">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner diff">
                <div className="carousel-item active">
                  <div className="d-block w-100" data-interval="4000" alt="...">
                    <h1>What is CSI ?</h1>
                    <p className="slider-p">
                      Computer Society of India (CSI) is a body where computer
                      professionals meet to exchange views & information, to
                      learn & share ideas and is committed to the advancement of
                      theory and practice of Computer Engineering and
                      Technology. It was started on 6 March 1965 by few computer
                      professionals.
                    </p>
                    <Link
                      className="home-link"
                      to="/blog"
                      style={{ width: "60px", textAlign: "center" }}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100" data-interval="4000" alt="...">
                    <h1>Overview of CSI</h1>
                    <p className="slider-p">
                      CSI is the oldest & largest organization of IT
                      professional in India having more than 1,00,000 members
                      across the country exclusively focusing on the interest of
                      IT Professionals. One of the major initiatives of the
                      Computer Society of India is to serve the student
                      community by bridging the gap between academia and
                      industry. CSI DIT Chapter promotes various activities
                      among their student branches such as seminars, workshops,
                      conferences, symposium, quiz competition, project
                      competition and many more.
                    </p>
                    <Link className="home-link" to="/about">
                      About More
                    </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100" data-interval="4000" alt="...">
                    <h1>CSI Mission</h1>
                    <ul className="list">
                      <li>
                        Facilitate Research, Knowledge Sharing, Learning and
                        Career Enhancement among all categories of IT
                        professionals.
                      </li>
                      <li>
                        Inspire, nurture and assist students to integrate into
                        the IT communtiy
                      </li>
                      <li>
                        Percolate benefits of IT advancement to all sections of
                        Indian Society.
                      </li>
                      <li>
                        Professional Development at Individual level and Career
                        Support.
                      </li>
                      <li>
                        To create a distinguished fraternity of famous IT
                        industry leaders, brilliant scientists and dedicated
                        academicians.
                      </li>
                    </ul>
                    <Link className="home-link" to="/about">
                      About More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right col-sm-6">
            <div
              id="carouselExampleFade-2"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/75a1d2b5-fde9-4680-b46b-6d20cd41edf4"
                    className="d-block w-100"
                    data-interval="2000"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://m.media-amazon.com/images/I/71LXZS7hBqL._AC_UL320_.jpg"
                    className="d-block w-100"
                    data-interval="2000"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://ichef.bbci.co.uk/news/800/cpsprodpb/BEC3/production/_122953884_photo24-01-2022113902.jpg"
                    className="d-block w-100"
                    data-interval="2000"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleFade-2"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselExampleFade-2"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 timeline">
        <div className="offer" style={{ background: "#3c618a" }}>
          <h1>What CSI Offers?</h1>
        </div>
        <div className="wrapper">
          <div className="center-line">
          </div>
          <div className="row row-1">
            <section>
              <div className="icon">
                <Devices />
              </div>
              <div className="details">
                <span className="title">Technology Updates</span>
              </div>
              <p>
                Updates of Latest Technology through Conferences, Lectures,
                Seminars, Tutorials and Workshops.
              </p>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <div className="icon">
                <Devices />
              </div>
              <div className="details">
                <span className="title">Interactive Activities</span>
              </div>
              <p>
                Project & Paper presentations, Quizzes, Competitions and
                Exhibitions.
              </p>
            </section>
          </div>
          <div className="row row-1">
            <section>
              <div className="icon">
                <Devices />
              </div>
              <div className="details">
                <span className="title">Networking</span>
              </div>
              <p>
                Ability to connect and interact with distinguished speakers,
                experts and peers on different technology areas
              </p>
            </section>
          </div>
          <div className="row row-2">
            <section>
              <div className="icon">
                <Devices />
              </div>
              <div className="details">
                <span className="title">Training & Certification</span>
              </div>
              <p>
                Get Appreciation letters /certifications from a nationally
                recognized professional IT body.
              </p>
            </section>
          </div>
        </div>
      </div>
      <EventCard />
    </div>
  );
};

export default Home;
