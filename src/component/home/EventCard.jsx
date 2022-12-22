import React from "react";
import "./EventCard.css";
import img1 from "../../assets/coderscarnival.jpg";
import img2 from "../../assets/innotech.jpg.png";
import img3 from "../../assets/acunetix9.jpg";

const EventCard = () => {
  return (
    <div className="event">
      <div className="event-header">
        <h1>Events</h1>
      </div>
      <div className="upcoming-event">
        <h1>Upcoming Events</h1>
        <h2>Acunetix 10.0</h2>
        <p>
          This year we're celebrating the tenth year of ACUNETIX which is a
          flagship fest with a series of technical and non- technical events
          under it, in collaboration with ACES.
        </p>
      </div>
      <div className="event-card-body">
        <h2>Events held by us</h2>
        <p>For the students and By the students</p>
        <div className="event-card">
          <div className="card">
            <img src={img1} className="card-img-top" alt="" />
            {/* <div className="info">
            <h5>Card title</h5>
          </div> */}
          </div>
          <div className="card">
            <img src={img2} className="card-img-top" alt="" />
            {/* <div className="info">
            <h5>Card title</h5>
          </div> */}
          </div>
          <div className="card">
            <img src={img3} className="card-img-top" alt="" />
            {/* <div className="info">
            <h5>Card title</h5>
          </div> */}
          </div>
        </div>
      </div>
      <div className="free-space"></div>
    </div>
  );
};

export default EventCard;
