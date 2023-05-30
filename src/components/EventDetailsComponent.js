import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdDriveFileRenameOutline, MdOutlineLocationOn } from "react-icons/md";
import ticket from "../assets/ticket-icon.png";
import './home.css';

const EventDetailsComponent = ({ onEventSubmit }) => {
  // ...

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect the form data and create an eventDetails object
    const eventDetails = {
      title: e.target.elements.firstname.value,
      type: e.target.elements["event-type"].value,
      location: e.target.elements.addrs.value,
      date: e.target.elements.date.value,
      phoneNumber: e.target.elements.number.value,
      artistName: e.target.elements.pername.value,
    };

    // Call the onEventSubmit function and pass the eventDetails object
    onEventSubmit(eventDetails);
  };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    creditCard: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
    // You can access the form data from the formData state
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      creditCard: '',
    });
    // Close the modal
    setShowModal(false);
  };

  
  return (
    <>
        <div className="container">
            <div className="row detail-style">
                <div className="col col-12 col-md-3"></div>
                <div className="col col-12 col-md-6 detail-box mt-4">
                    {/* <div className="details-image">
                        <img src={ticket} alt="ticket" />
                    </div>
                    <hr /> */}
                    <div className="booking-details">
                        <h2>Event deatils</h2>
                        <hr />
                        <div className="row">
                            <div className="col-md-8">
                                <table className="table table-hover table-bordered">
                                    <tbody>
                                    <tr>
                                        <td>Date</td>
                                        <td>2021-02-15</td>
                                    </tr>
                                    <tr>
                                        <td>Time</td>
                                        <td>2.00pm</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <MdOutlineLocationOn className="icon" size={20} />
                                        Location
                                        </td>
                                        <td>Pathantula</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>1534564456456</td>
                                    </tr>
                                    <tr>
                                        <td>Artist/Performer Name</td>
                                        <td>James</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>2000 tk</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                                                Open Purchase Form
                                            </button>
                                            {showModal && (
                                                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Purchase Form</h5>
                                                        <button type="button" className="close" onClick={() => setShowModal(false)}>
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form onSubmit={handleSubmitt}>
                                                        <div className="form-group mt-2">
                                                            <label htmlFor="name" className="plabel">Name</label>
                                                            <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            required
                                                            />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label htmlFor="email" className="plabel">Email</label>
                                                            <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                            />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label htmlFor="phone" className="plabel">Phone</label>
                                                            <input
                                                            type="tel"
                                                            className="form-control"
                                                            id="phone"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            required
                                                            />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <label htmlFor="creditCard" className="plabel">Credit Card</label>
                                                            <input
                                                            type="text"
                                                            className="form-control"
                                                            id="creditCard"
                                                            name="creditCard"
                                                            value={formData.creditCard}
                                                            onChange={handleInputChange}
                                                            required
                                                            />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary mt-2">
                                                            Submit
                                                        </button>
                                                        </form>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-4">
                                <h2>Want to Book Ticket?</h2>
                                <h3>
                                    Please
                                    <Link to="/login" className="primary-color">
                                    {" "}
                                    Login{" "}
                                    </Link>
                                    /
                                    <Link to="/signup" className="primary-color">
                                    {" "}
                                    Sign Up{" "}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div className="col col-12 col-md-3"></div>
            </div>
        </div>
    </>
  );
};

export default EventDetailsComponent;

