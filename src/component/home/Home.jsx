import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid p-5">
      <div className="left-home">
        <h3>Welcome to Computer Society of India, DIT Chapter</h3>
        <div className="row text-center">
          <div className="col-sm-6">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p className="d-block w-100" data-interval="2000">
                    Computer Society of India (CSI) is a body where computer
                    professionals meet to exchange views & information, to learn
                    & share ideas and is committed to the advancement of theory
                    and practice of Computer Engineering and Technology. It was
                    started on 6 March 1965 by few computer professionals.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="d-block w-100" data-interval="2000">
                    CSI is the oldest & largest organization of IT professional
                    in India having more than 1,00,000 members across the
                    country exclusively focusing on the interest of IT
                    Professionals. One of the major initiatives of the Computer
                    Society of India is to serve the student community by
                    bridging the gap between academia and industry. CSI DIT
                    Chapter promotes various activities among their student
                    branches such as seminars, workshops, conferences,
                    symposium, quiz competition, project competition and many
                    more.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="d-block w-100" data-interval="2000">
                    Facilitate Research, Knowledge Sharing, Learning and Career
                    Enhancement among all categories of IT professionals.t
                    Inspire, nurture and assist students to integrate into the
                    IT communtiy Percolate benefits of IT advancement to all
                    sections of Indian Society. Professional Development at
                    Individual level and Career Support. To create a
                    distinguished fraternity of famous IT industry leaders,
                    brilliant scientists and dedicated academicians.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              id="carouselExampleFade"
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
                data-target="#carouselExampleFade"
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
                data-target="#carouselExampleFade"
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
      <div className="right-home"></div>
    </div>
  );
};

export default Home;
