import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import "./otp_section.css"

function OneTimePassword(){
    const location = useLocation();
        
    const getActiveClass = (path) => location.pathname === path ? '' : '';
    return(
        <div className="otp-section" id='reset-pages'>
            <div className="reset-form">
                <div className="veil-logo reset-logo">
                    <img className="veil-digits" src={logo} alt="VeilDigits Logo" />
                        <p id="brand-name">VeilDigits</p>
                </div>
            
                <div className="reset-password forgotten-passkey">
                    <h2>OTP Verification</h2>
                    <p>We have sent a verification code to email address <b id='bold'>olivia@gmail.com.</b> 
                    <Link id='link'> Wrong Email?</Link>
                    </p>
                </div>

                <div className="code-numbers">
                    <div className="code-boxes" tabIndex="0">
                        <input type="text" />
                    </div>
                    <div className="code-boxes" tabIndex="0">
                        <input type="text" />
                    </div>
                    <div className="code-boxes" tabIndex="0">
                        <input type="text" />
                    </div>
                    <div className="code-boxes" tabIndex="0">
                        <input type="text" />
                    </div>
                    
                </div>

                <div className="submit-form">
                    <div className="login-btn submit-btn">
                        <button className="log-in submit-button" type='submit'>
                            <Link className={`href submit-button ${getActiveClass('/Success')}`} to="/Success">
                              Submit
                            </Link>
                        </button>
                    </div>
                                
                </div>
            </div>

            <div className="copyright">
                <p className="right-reserved">&copy; 2023 VeilDigits . All rights reserved.</p>
                <span className="vd-terms">
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                </span>
            </div>
        </div>
    )
}
export default OneTimePassword;