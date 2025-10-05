import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mockUsers from "../../../data/mockUsers";
import chevronDown from "../../../assets/chevron-down.png"
import Avatar from "../../../assets/Avatar.png"
import Rayna from "../../../assets/Rayna.png"
import searchNormal from "../../../assets/search-normal.png"
import Message from "../../../assets/Message (1).png"
import arrowUp from "../../../assets/arrow-up.png"
import bar from "../../../assets/bar.png"
import check from "../../../assets/check.png"
import hanna from "../../../assets/hanna.png"
import AdminLineCharts from "../AdminLineCharts/AdminLineCharts";
import AdminBarCharts from "../AdminBarCharts/AdminBarCharts";

import "./search_section.css"

 export default function AdminSearchSection(){
    const [searchHeaderText, setSearchHeaderText] = useState("");
    const [searchUserText, setSearchUserText] = useState("");
    const [openSubscriptions, setOpenSubscriptions] = useState(false);
  const [openLastAction, setOpenLastAction] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
    const handleChange = (e) => {
    setSearchText(e.target.value);  
    console.log("User typed:", e.target.value); 
  };
    return(
        <div className="accounts-overview">
        <div className="search-header">
            <div className="search-bar">
                <div className="input-search-bar">
                    <div className="search-icon">
                        <img className='search-img' src={searchNormal} alt="" />
                        <input
                             type="search"
                             value={searchHeaderText}
                             onChange={(e) => setSearchHeaderText(e.target.value)}
                             placeholder="Search anything..."
                            />
                    </div>
                </div>
            </div>
            
            <div className="admin-quick-links">
                <Link >
                <img src={Message} alt="" />
                </Link>

                <div className='search-profile'>
                    <span>
                <Link>
                <img src={Avatar} alt="" />
                </Link>
                </span>
                <span>
                <Link>
                <img className='' src={chevronDown} alt="" />
                </Link>
                </span>
                </div>
            </div>
        </div>

        <div className="accounts-view">
            <div className="admin-overview">
                <div className="overview-heading">
                    <h3>Revenue</h3>
                    <p>View total revenue from subscriptions and credits</p>
                </div>

                <div className="overview-summary">

                    <div className="all-revenue">
                        <div className="sub-all-revenue">
                            <div className="total-revenue">
                                <p>Total Revenue</p>
                                <span className="this-month">
                                <p>This month</p>
                                <img src={chevronDown} alt="" />
                                </span>
                            </div>

                            <h2 className='sum'>₦128,464,846.85</h2>

                            <div className="interest-rate">
                                <div className="interest-percentage">
                                    <p>7.4%</p>
                                    <img src={arrowUp} alt="" />
                                </div>
                                <p className='last-month-sum'>from last month</p>
                            </div>
                        </div>
                    </div>

                    <div className="all-revenue">
                        <div className="sub-all-revenue">
                            <div className="total-revenue">
                                <p>Subscriptions</p>
                                <span className="this-month">
                                <p>This month</p>
                                <img src={chevronDown} alt="" />
                                </span>
                            </div>

                            <h2 className='sum'>₦100,464,846.85</h2>

                            <div className="interest-rate">
                                <div className="interest-percentage">
                                    <p>7.4%</p>
                                    <img src={arrowUp} alt="" />
                                </div>
                                <p className='last-month-sum'>from last month</p>
                            </div>
                        </div>
                    </div>

                    <div className="all-revenue">
                        <div className="sub-all-revenue">
                            <div className="total-revenue">
                                <p>Credits Sold</p>
                                <span className="this-month">
                                <p>This month</p>
                                <img src={chevronDown} alt="" />
                                </span>
                            </div>

                            <h2 className='sum'>₦28,000,000.85</h2>

                            <div className="interest-rate">
                                <div className="interest-percentage">
                                    <p>7.4%</p>
                                    <img src={arrowUp} alt="" />
                                </div>
                                <p className='last-month-sum'>from last month</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="charts">

                    <div className="data-charts all-revenue">
                        <div className="line-chart">
                            <div className="total-revenue">
                                <p>Total Revenue</p>
                                <span className="this-month">
                                <p>This month</p>
                                <img src={chevronDown} alt="" />
                                </span>
                            </div>
                            <div className="admin-line-charts">
                                <AdminLineCharts />
                            </div>
                        </div>
                    </div>
                    
                    <div className="data-charts all-revenue">
                        <div className="line-chart">
                            <div className="total-revenue">
                                <p>Total Revenue</p>
                                <span className="this-month">
                                <p>This month</p>
                                <img src={chevronDown} alt="" />
                                </span>
                            </div>
                            <div className="admin-line-charts">
                                <AdminBarCharts />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="user-subscription">
                        <p className='Recent-Users'>Recent-Users</p>

                        <div className="search-user">
                            <div className="search-user-bar">
                                <div className="search-vd-user">
                                <input
                                  type="search"
                                  value={searchUserText}
                                  onChange={(e) => setSearchUserText(e.target.value)}
                                  placeholder="Search users..."
                                />
                                </div>
                                <img className='search-img' src={searchNormal} alt="" />
                            </div>

                             <div className="all-users-subscription">
      {/* --- All Subscriptions --- */}
      <div className="subscription-dropdown">
        <div className="all-subscription">
          <p>All Subscriptions</p>
          <img
            className="chevronDown"
            src={chevronDown}
            alt="toggle"
            onClick={() => setOpenSubscriptions(!openSubscriptions)}
          />
        </div>
        {openSubscriptions && (
          <div className="dropdown-content">
            <div className="users-content active-option">
              <p className="active-sub">All Subscription</p>
              <img src={check} alt="" />
            </div>
            <div className="users-content">
              <p>Free Plan</p>
              <img src="" alt="" />
            </div>
            <div className="users-content">
              <p>Business Plan</p>
              <img src="" alt="" />
            </div>
            <div className="users-content">
              <p>Premium Plan</p>
              <img src="" alt="" />
            </div>
          </div>
        )}
      </div>

      {/* --- Last Action --- */}
      <div className="subscription-dropdown">
        <div className="all-subscription">
          <p>Last Action</p>
          <img
            className="chevronDown"
            src={chevronDown}
            alt="toggle"
            onClick={() => setOpenLastAction(!openLastAction)}
          />
        </div>
        {openLastAction && (
          <div className="dropdown-content">
            <div className="users-content active-option">
              <p className="active-sub">Last Action</p>
              <img src={check} alt="" />
            </div>
            <div className="users-content">
              <p>Call</p>
              <img src="" alt="" />
            </div>
            <div className="users-content">
              <p>Data Call</p>
              <img src="" alt="" />
            </div>
            <div className="users-content">
              <p>SMS</p>
              <img src="" alt="" />
            </div>
            <div className="users-content">
              <p>Data Text</p>
              <img src="" alt="" />
            </div>
          </div>
        )}
      </div>

      {/* --- Profile --- */}
      <div className="subscription-dropdown">
        <div className="all-subscription">
          <p>Profile</p>
          <img
            className="chevronDown"
            src={chevronDown}
            alt="toggle"
            onClick={() => setOpenProfile(!openProfile)}
          />
        </div>
        {openProfile && (
          <div className="dropdown-content profile-drop-content">
            <div className="users-content active-option">
              <p className="active-sub">Profile</p>
              <img src={check} alt="" />
            </div>
            <div className="users-content">
              <p>60% (Incomplete)</p>
              <img src="" alt="" />
            </div>
            <div className="users-content">
              <p>100% (Complete)</p>
              <img src="" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
                        </div>
                        <div className="users-details">
                            <div className="users-initials">
                                <div className="initial-heading">
                                    <input type="checkbox" name="" id="users-initials-checkbox" />
                                    <p>Name</p>
                                </div>

                                <div className="users-info">
                                    <div className="users-basic-info">
                                        <input type="checkbox" name="" id="users-initials-checkbox" />
                                        <img src={hanna} alt="" />
                                        <div className="userName-userEmail">
                                        <p className='hanna'>Hanna Baptista</p>
                                        <p className='users-email-account'>hanna@gmail.com</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-info">
                                    <div className="users-basic-info">
                                        <input type="checkbox" name="" id="users-initials-checkbox" />
                                        <div className="default-username">
                                            <p>mg</p>
                                        </div>
                                        <div className="userName-userEmail">
                                        <p className='hanna'>Miracle Geidt</p>
                                        <p className='users-email-account'>miracle@gmail.com</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-info">
                                    <div className="users-basic-info">
                                        <input type="checkbox" name="" id="users-initials-checkbox" />
                                        <img src={Rayna} alt="" />
                                        <div className="userName-userEmail">
                                        <p className='hanna'>Rayna Torff</p>
                                        <p className='users-email-account'>rayna@gmail.com</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-info">
                                    <div className="users-basic-info">
                                        <input type="checkbox" name="" id="users-initials-checkbox" />
                                        <div className="default-username">
                                            <p>sh</p>
                                        </div>
                                        <div className="userName-userEmail">
                                        <p className='hanna'>Skylar Herwitz</p>
                                        <p className='users-email-account'>skylar@gmail.com</p>
                                    </div>
                                    </div>
                                </div>
                                
                                <div className="users-information">
                                    <div className="users-basic-info">
                                        <input type="checkbox" name="" id="users-initials-checkbox" />
                                        <div className="default-username">
                                            <p>sh</p>
                                        </div>
                                        <div className="userName-userEmail">
                                        <p className='hanna'>Skylar Herwitz</p>
                                        <p className='users-email-account'>skylar@gmail.com</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="users-tel">
                                <div className="number-heading">
                                    <p>Phone Number</p>
                                </div>

                                {[...Array(5)].map((_, index) => (
                          <div className="users-call-no" key={index}>
                            <div className="users-phone-no">
                              <p>0813 563 3745</p>
                            </div>
                          </div>
                        ))}
                            </div>

                            <div className="users-sub">
                                <div className="number-heading subscription-heading">
                                    <p>Subscription</p>
                                </div>

                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="plan-type bg-a">Free Plan</div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="plan-type bg-b">Business Plan</div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="plan-type bg-g">Premium Plan</div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="plan-type bg-a">Free Plan</div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="plan-type  bg-g">Premium Plan</div>
                                    </div>
                                </div>
                            </div>

                            <div className="users-profile">
                                <div className="number-heading profile-heading">
                                    <p>Profile</p>
                                </div>

                                <div className="users-percentage">
                                    <div className="percent-bar">
                                        <div className="full-bar">
                                            <div className="full-bar-bg-g"></div>
                                            <div className="full-bar-bg-w"></div>
                                        </div>
                                        <p>60%</p>
                                    </div>
                                </div>

                                <div className="users-percentage">
                                    <div className="percent-bar">
                                        <div className="full-bar">
                                            <div className="full-bar-bg-g progress-completed"></div>
                                        </div>
                                        <p>100%</p>
                                    </div>
                                </div>

                                <div className="users-percentage">
                                    <div className="percent-bar">
                                        <div className="full-bar">
                                            <div className="full-bar-bg-g progress-completed"></div>
                                        </div>
                                        <p>100%</p>
                                    </div>
                                </div>

                                <div className="users-percentage">
                                    <div className="percent-bar">
                                        <div className="full-bar">
                                            <div className="full-bar-bg-g"></div>
                                            <div className="full-bar-bg-w"></div>
                                        </div>
                                        <p>60%</p>
                                    </div>
                                </div>

                                <div className="users-percentage">
                                    <div className="percent-bar">
                                        <div className="full-bar">
                                            <div className="full-bar-bg-g progress-completed"></div>
                                        </div>
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="last-action">
                                <div className="number-heading action-heading">
                                    <p>Last Action</p>
                                </div>

                                <div className="users-last-action">
                                    <div className="users-call-type">
                                        <p>Call</p>
                                    </div>
                                </div>
                                <div className="users-last-action">
                                    <div className="users-call-type">
                                        <p>Data Call</p>
                                    </div>
                                </div>
                                <div className="users-last-action">
                                    <div className="users-call-type">
                                        <p>Call</p>
                                    </div>
                                </div>
                                <div className="users-last-action">
                                    <div className="users-call-type">
                                        <p>Data Text</p>
                                    </div>
                                </div>
                                <div className="users-last-action">
                                    <div className="users-call-type">
                                        <p>SMS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="more-actions">
                                <div className="no-action">
                                    <p>hell</p>
                                </div>

                                <div className="fa-bars">
                                    <img src={bar} alt="" />
                                </div>

                                <div className="fa-bars">
                                    <img src={bar} alt="" />
                                </div>

                                <div className="fa-bars">
                                    <img src={bar} alt="" />
                                </div>

                                <div className="fa-bars">
                                    <img src={bar} alt="" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div> 
    )
}