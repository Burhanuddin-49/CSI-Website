import React from "react";
import "./EventCard.css";

const EventCard = () => {
  return (
    <div className="event">
      <div className="event-header">
        <h1>Events</h1>
      </div>
      <div className="event-card">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71LXZS7hBqL._AC_UL320_.jpg"
            className="card-img-top"
            alt=""
          />
          <div className="info">
            <h5>Card title</h5>
          </div>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71LXZS7hBqL._AC_UL320_.jpg"
            className="card-img-top"
            alt=""
          />
          <div className="info">
            <h5>Card title</h5>
          </div>
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71LXZS7hBqL._AC_UL320_.jpg"
            className="card-img-top"
            alt=""
          />
          <div className="info">
            <h5>Card title</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
