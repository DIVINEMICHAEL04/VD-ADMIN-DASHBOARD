import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cheers from "../../../assets/cheers.png"
import "./successful_section.css"

function SuccessfulSection(){
    const location = useLocation();
            
    const getActiveClass = (path) => location.pathname === path ? '' : '';
    return(
        <div className="successful-sect" id="reset-pages">
            <div className="reset-form">
                <div className="veil-logo reset-logo">
                    <img className="veil-digits cheers" src={cheers} alt="VeilDigits Logo" />
                </div>
            
                <div className="reset-password forgotten-passkey">
                    <h2>You've successfully changed your password</h2>
                    <p>Always remember the password for your account at Humanline!</p>
                </div>
            
                <div className="submit-form">
                    <div className="login-btn submit-btn">
                        <button className="log-in submit-button" type='submit'>
                            <Link className={`href submit-button ${getActiveClass('/')}`} to="/">
                              Back To Login
                            </Link>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}
export default SuccessfulSection;