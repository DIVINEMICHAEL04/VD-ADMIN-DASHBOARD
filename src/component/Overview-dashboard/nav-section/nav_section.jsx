import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import chart from "../../../assets/chart.png"
import moneyTime from "../../../assets/money-time.png"
import profileUser from "../../../assets/profile-2user.png"
import shieldSearch from "../../../assets/shield-search.png"
import shieldSecurity from "../../../assets/shield-security.png"
import revenue from "../../../assets/revenue.png"
import logout from "../../../assets/logout.png"
import settingImg from "../../../assets/settings-img.png"
import adminiImg from "../../../assets/admin-img.png"
import "./nav_section.css"

function NavSection (){
    
  const getActiveClass = (path) => location.pathname === path ? 'active-link' : '';
    return(
        <div className="nav-bar">
            <div className="veil-nav-bar">
                <div className="nav-logo">
                    <div className="veil-logo nav-img">
                        <img className="veil-digits" src={logo} alt="VeilDigits Logo" />
                            <h2 className='header-logo'>VeilDigits</h2>
                    </div>
                    <div className="nav-list">
                        <div className="nav-links">
                            <span className="quick-links">
                                <Link className={`list-link ${getActiveClass('/OverviewPage')}`} to="/OverviewPage">
                                <img src={revenue} alt="" />
                                <p>Overview Dashboard</p>
                                </Link>
                            </span>
                        </div>
                        <div className="nav-links">
                            <span className="quick-links">
                                <Link className={`list-link  ${getActiveClass('/UserListPage')}`} to="/UserListPage">
                                <img src={profileUser} alt="" />
                                <p className='user-page'>User List</p>
                                </Link>
                            </span>
                        </div>
                        <div className="nav-links">
                            <span className="quick-links">
                                <Link className={`list-link ${getActiveClass('/SubscriptionDashboard')}`} to ="/SubscriptionDashboard">
                                <img src={moneyTime} alt="" />
                                <p>Subscriptions</p>
                                </Link>
                            </span>
                        </div>
                        <div className="nav-links">
                            <span className="quick-links">
                                <Link className={`list-link ${getActiveClass('/CallerID')}`} to ="/CallerID">
                                <img src={shieldSecurity} alt="" />
                                <p>Caller IDs</p>
                                </Link>
                            </span>
                        </div>
                        <div className="nav-links">
                            <span className="quick-links">
                                <Link className={`list-link ${getActiveClass('/CallManagement')}`} to ="/CallManagement">
                                <img src={chart} alt="" />
                               <p>call Management</p>
                               </Link>
                            </span>
                        </div>
                        <div className="nav-links">
                            <span className="quick-links">
                                <Link className={`list-link ${getActiveClass('/FraudSection')}`} to ="/FraudSection">
                                <img src={shieldSearch} alt="" />
                                <p>Fraud Detection</p>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="settings">
                    <div className="org-settings">
                        <div className="account-settings">
                            <Link className='list-link'>
                            <img src={settingImg} alt="" />
                            <p>Org Settings</p>
                            </Link>
                        </div>
                    </div>
                    <div className="managers-account">
                        <div className="accounts-email">
                                <img src={adminiImg} alt="" />
                                <span className='usernameAndEmail'>
                                    <p className='managers-name'>Olivia Rhye</p>
                                    <p className='managers-email'>olivia@gmail.com</p>
                                </span>
                        </div>
                        <Link>
                        <img className='logout-img' src={logout} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavSection;