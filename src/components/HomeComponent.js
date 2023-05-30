import React from "react";
import './home.css';
import { Link } from "react-router-dom";

const HomeComponent = (props) => {
  // console.log("props", props);
  return (
    <>
      <div className="container">
        <div className="row mt-4">
            <div className="col col-12 col-md-3">

            </div>
            <div className="col col-12 col-md-6 mt-4">
                <div className="thome">
                    <h1>Hi, Do you need any Ticket??</h1>
                    <h2>Grab your Ticket!</h2>
                </div>
            </div>
            <div className="col col-12 col-md-3">

            </div>
        </div>

        <div className="row mt-4">
            <div className="col col-12 col-md-3">

            </div>
            <div className="col col-12 col-md-6 mt-4">
                <div className="thome-menu">
                    <ul>
                      <li>
                        <Link to={'/'}>Home</Link>
                      </li>
                      <li>
                        <Link to={'/event'}>Event</Link>
                      </li>
                      <li>
                        <Link to={'/login'}>Login</Link>
                      </li>
                      <li>
                        <Link to={'/signup'}>Signup</Link>
                      </li>
                    </ul>
                </div>
            </div>
            <div className="col col-12 col-md-3">

            </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
