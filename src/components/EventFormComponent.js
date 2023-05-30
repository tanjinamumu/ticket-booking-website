import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDriveFileRenameOutline, MdLocationOn } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import bg1 from '../assets/the-ticket-logo.png';
import '../Style/style.css';

const EventFormComponent = ({ props }) => {
  const [eventType, setEventType] = useState("");

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-md-6">
                    <img src={bg1} alt="bg1" className="bg1" />
                </div>

                <div className="col col-12 col-md-6">
                    <form action="" method="POST">
                        <div className="title">
                            <h2>Event Form</h2>
                            <p>Fill Up the form to Join Event</p>
                        </div>

                        <div className="input-field">
                            <input type="text" id="text" name="firstname" required />
                            <label for="firstname">
                            {" "}
                            <MdDriveFileRenameOutline className="icon" size={20} /> Event
                            Title
                            </label>
                        </div>

                        <div className="input-field">
                            <select
                                id="event-type"
                                name="event-type"
                                value={eventType}
                                onChange={handleEventTypeChange}
                                required
                            >
                                <option value="">Select Event Type</option>
                                <option value="Type 1">Concert</option>
                                <option value="Type 2">Sport</option>
                                <option value="Type 3">Theatre Show</option>       
                                <option value="Type 3">Movie</option>                      
                            </select>
                            <label for="event-type">{" "}
                            </label>
                        </div>

                        <div className="input-field">
                            <input type="text" id="addrs" name="addrs" required />
                            <label for="addrs">
                            {" "}
                            <MdLocationOn className="icon" size={20} /> Location{" "}
                            </label>
                        </div>

                        <div className="input-field date-sp">
                            <input type="date" id="date" name="date" required />
                            <label htmlFor="date" className="hidden-placeholder">
                                <HiOutlineMail className="icon" size={20} /> Date
                            </label>
                        </div>

                        <div className="input-field">
                            <input type="text" id="number" name="number" required />
                            <label for="number">
                            {" "}
                            <FaPhoneAlt className="icon" size={20} /> Phone Number
                            </label>
                        </div>

                        <div className="input-field">
                            <input type="text" id="pername" name="pername" required />
                            <label for="pername">
                            {" "}
                            <MdDriveFileRenameOutline className="icon" size={20} /> Artist/Performer Name
                            </label>
                        </div>
                        <button type="submit" name="submit">
                            Submit
                        </button>

                            <p className="label no-account-text">
                                Back to 
                                <Link to={"/"}>
                                    <span className="primary-color"> Home</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EventFormComponent;
