import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./login_section.css"
import earPiece from "../../../assets/earpiece.png"
import logo from "../../../assets/logo.png"
import ornament from "../../../assets/Ornament.png"
import eyeOff from "../../../assets/slashed eye.png"
import alertCicle from "../../../assets/alert-circle.png"
import eye from "../../../assets/eye.png"

function LoginSection(){
     const getActiveClass = (path) => location.pathname === path ? '' : '';
    return(
        <div className="login-page">
            <div className="login-intro">
                <div className="earpiece-img">
                    <img src={earPiece} alt="earpiece" />
                </div>

                <div className="login-text">

                    <div className="veil-logo">
                        <img className="veil-digits" src={logo} alt="VeilDigits Logo" />
                            <p>VeilDigits</p>
                    </div>

                    <div className="vd-heading-texts">
                        <h2>Let's empower your <br className="mobile-break"/> employees today.</h2>
                    </div>

                    <div className="vd-paragraph-text">
                        <p>We help to complete all your conveyancing needs easily</p>
                    </div>
                </div>
            </div>

            {/* Login Form */}
            <div className="login-form-section">
                <div className="login-arrow-img">
                    <img src={ornament} alt="arrow img" />
                </div>

                <div className="login-form">
                    <div className="login-heading-text">
                        <h4>Login to your account</h4>
                    </div>

                    <div className="input-field">
                        <div className="email-section">
                            <div className="users-info">
                               <p className="e-mail">Email Address</p>
                               <p className="email-asterisk">*</p>
                            </div>

                            <div className="info-field" tabIndex="0">
                                <input type="email" name="" id="user-email" placeholder="Input your registered email"/>
                            </div>
                            <div className="warning">
                                <img src={alertCicle} alt="" />
                                <p>The email you entered is not registered. Please check again</p>
                            </div>
                        </div>

                        <div className="password-section">
                            <div className="users-info">
                               <p className="e-mail">Password</p>
                               <p className="email-asterisk">*</p>
                            </div>

                            <div className="info-field password-field" tabIndex="0">
                                <input type="password" name="" id="user-password" placeholder="Input your password account"/>
                                <img src={eyeOff} alt="eye img" />
                                <img className="password-eye" src={eye} alt="eye img" />
                            </div>
                            <div className="warning">
                                <img src={alertCicle} alt="" />
                                <p>The email you entered is not registered. Please check again</p>
                            </div>
                        </div>

                        <div className="reset-password">
                              <div className="remember-password">
                                <input type="checkbox" name="" id="checkbox"/>
                                <p>Remember Me</p>
                              </div>
                              <p className="forgotten-password">
                              <Link className={`href ${getActiveClass('/Reset')}`} to="/Reset">Forgot Password</Link>
                              </p>
                        </div>
                    </div>

                    <div className="login-btn">
                        <button className="log-in">
                            <Link className={`href ${getActiveClass('/OverviewPage')}`} to="./OverviewPage">Login</Link>
                        </button>
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

        </div>
    )
}

export default LoginSection;