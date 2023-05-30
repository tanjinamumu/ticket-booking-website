import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import bg1 from '../assets/the-ticket-logo.png';
import '../Style/style.css';

const LoginComponent = ({ props }) => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-6">
                        <img src={bg1} alt="bg1" className="bg1"/>
                    </div>

                    <div className="col col-12 col-md-6">
                        <form action="" method="POST">
                    
                            <div className="title">
                                <h2>Welcome!</h2>
                                <p>Log in to continue</p>           
                            </div>

                            <div class="input-field">
                                <input type="email" id="email" name="email" required/>
                                <label for="email"> <HiOutlineMail className="icon" size={20}/> Email </label>
                            </div>
                        
                            <div class="input-field">
                                <input type="password" id="password" name="password" required/>
                                <label for="password"> <RiLockPasswordLine className="icon" size={20}/> Password</label>
                            </div>

                            <button type="submit" name="submit" >Login </button>

                            <Link to={'/'} className="btn btn-primary mt-3 button-ok">
                                <FaFacebookF className="mr-2" /> Login with Facebook
                            </Link>

                            <Link to={'/'} className="btn btn-danger mx-2 mt-3 button-ok">
                                <FaGoogle className="mr-2" /> Login with Google
                            </Link>
                            
                            <p className="label no-account-text">
                                Don't have an account?
                                <Link to={"/signup"}>
                                    <span className="primary-color"> Sign Up</span>
                                </Link>
                            </p>
                
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
export default LoginComponent;
