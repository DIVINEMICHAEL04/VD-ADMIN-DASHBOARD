import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./reset_section.css"
import logo from "../../../assets/logo.png"

function PasswordReset(){
  const location = useLocation();

    const getActiveClass = (path) => location.pathname === path ? '' : '';
    return(
        <div className="login-page" id="reset-pages">
            <div className="reset-form">
                <div className="veil-logo reset-logo">
                    <img className="veil-digits" src={logo} alt="VeilDigits Logo" />
                        <p id="brand-name">VeilDigits</p>
                </div>

                <div className="reset-password forgotten-passkey">
                    <h2>Reset Your Password</h2>
                    <p>Enter your email address and we'll send you password
                      <br className="mobile-break"/> reset instructions.</p>
                </div>

                <div className="email-section">
                    <div className="users-info">
                       <p className="e-mail">Registered email</p>
                       <p className="email-asterisk">*</p>
                    </div>
                    <div className="info-field" tabIndex="0">
                        <input type="email" name="" id="user-email" required placeholder="Input your registered email"/>
                    </div>
                </div>

                <div className="submit-form">
                    <div className="login-btn submit-btn">
                        <button className="log-in submit-button" type='submit'>
                            <Link className={`href submit-button ${getActiveClass('/Submit')}`} to="/Submit">
                              Submit
                            </Link>
                            </button>
                    </div>
                    <div className="login-btn back-to-btn">
                            <Link className={`href reset-link ${getActiveClass('/')}`} to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Back To Login
                            </Link>
                            
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
export default PasswordReset;