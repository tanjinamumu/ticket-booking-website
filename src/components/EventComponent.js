import React from "react";
import eventPic from "../assets/event-pic.jpg";
import "./event.css";
import { Link } from "react-router-dom";
const EventComponent = () => {
  
  return (
    <>
        <div className="container mt-4">
            <div className="row">
                <div className="col col-12 col-md-4">
                    <div className="eimg">
                        <img src={eventPic} alt="event photo"/>
                    </div>
                    <div className="e-title">
                        <h2>Innovation Summit: Shaping the Future</h2>
                    </div>
                    <div className="e-desc">
                        <p>Join us at the Innovation Summit: Shaping the Future, where forward-thinking visionaries</p>
                    </div>
                    <div className="e-more">
                        <Link to={'/event-details'}>View More</Link>
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="eimg">
                        <img src={eventPic} alt="event photo"/>
                    </div>
                    <div className="e-title">
                        <h2>Innovation Summit: Shaping the Future</h2>
                    </div>
                    <div className="e-desc">
                        <p>Join us at the Innovation Summit: Shaping the Future, where forward-thinking visionaries</p>
                    </div>
                    <div className="e-more">
                        <Link to={'/event-details'}>View More</Link>
                    </div>
                </div>
                <div className="col col-12 col-md-4">
                    <div className="eimg">
                        <img src={eventPic} alt="event photo"/>
                    </div>
                    <div className="e-title">
                        <h2>Innovation Summit: Shaping the Future</h2>
                    </div>
                    <div className="e-desc">
                        <p>Join us at the Innovation Summit: Shaping the Future, where forward-thinking visionaries</p>
                    </div>
                    <div className="e-more">
                        <Link to={'/event-details'}>View More</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default EventComponent;

