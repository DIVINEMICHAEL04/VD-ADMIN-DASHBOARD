import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import eyeOff from "../../../assets/slashed eye.png"
import eye from "../../../assets/eye.png"
import closeCircle from "../../../assets/close-circle.png"
import tickCircle from "../../../assets/tick-circle.png"
import "./submit_section.css"

function SubmitSection(){
      const location = useLocation();
    
      const getActiveClass = (path) => location.pathname === path ? 'active-link' : '';
    return(
        <div className="submit-section" id='reset-pages'>
            <div className="reset-form">
                    <div className="veil-logo reset-logo">
                        <img className="veil-digits" src={logo} alt="VeilDigits Logo" />
                            <p id="brand-name">VeilDigits</p>
                    </div>
    
                    <div className="reset-password forgotten-passkey">
                        <h2>Update Your Password</h2>
                        <p>Set your new password with minimum 8 characters with a combination of letters and numbers.</p> 
                    </div>
    
                    <div className="password-section">
                        <div className="users-info">
                           <p className="e-mail">New Password</p>
                           <p className="email-asterisk">*</p>
                        </div>
                        <div className="info-field password-field" tabIndex="0">
                            <input type="password" name="" id="user-password" placeholder="Input your new password"/>
                            <img src={eyeOff} alt="eye img" />
                            <img className="password-eye" src={eye} alt="eye img" />
                        </div>

                        <div className="password-character">
                            <div className="numbers-character">
                                <span className='custom-checkbox'>
                                    <img src={tickCircle} alt="" />
                                    <p>8 characters</p>
                                </span>
                                <span className='custom-checkbox number-check'>
                                    <img src={tickCircle} alt="" />
                                    <p>Number (0-9)</p>
                                </span>
                            </div>

                            <div className="numbers-character">
                                <span className='custom-checkbox'>
                                    <img src={tickCircle} alt="" />
                                    <p>Uppercase letter (A-Z)</p>
                                </span>
                                <span className='custom-checkbox'>
                                    <img src={closeCircle} alt="" />
                                    <p className='lowercase'>Lowercase letter (a-z)</p>
                                </span>
                            </div>
                        </div>

                        <div className="users-info submit-password">
                           <p className="e-mail">Confirm New Password</p>
                           <p className="email-asterisk">*</p>
                        </div>
                        <div className="info-field password-field" tabIndex="0">
                            <input type="password" name="" id="user-password" placeholder="Re-type your new password"/>
                            <img src={eyeOff} alt="eye img" />
                            <img className="password-eye" src={eye} alt="eye img" />
                        </div>
                    </div>
    
                    <div className="submit-form">
                        <div className="login-btn submit-btn">
                            <button className="log-in submit-button" type='submit'>
                                <Link className={`href submit-button ${getActiveClass('/Otp')}`} to="/Otp">
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
};
export default SubmitSection