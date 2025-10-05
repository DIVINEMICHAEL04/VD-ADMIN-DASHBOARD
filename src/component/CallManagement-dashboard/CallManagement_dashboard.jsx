import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from 'react-router-dom';
import chevronDown from "../../assets/chevron-down.png"
import Avatar from "../../assets/Avatar.png"
import searchNormal from "../../assets/search-normal.png";
import Message from "../../assets/Message (1).png"
import check from "../../assets/check.png"
import Rayna from "../../assets/Rayna.png"
import arrowUp from "../../assets/arrow-up.png"
import bar from "../../assets/bar.png"
import hanna from "../../assets/hanna.png"
import giana from "../../assets/giana.png"
import james from "../../assets/james.png"
import jordyn from "../../assets/jordyn.png"
import pristia from "../../assets/pristia.png"
import calender from "../../assets/calendar.png"  
import arrowRight from "../../assets/arrow-right.png"  
import arrowLeft from "../../assets/arrow-left (2).png"  
import "./CallManagement_dashboard.css"


export default function CallManagementSect(){
const [searchHeaderText, setSearchHeaderText] = useState("");
    const [searchUserText, setSearchUserText] = useState("");
    const [openSubscriptions, setOpenSubscriptions] = useState(false);
    const [openLastAction, setOpenLastAction] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openDate, setOpenDate] = useState(false);
    const [startDate, setStartDate] = useState(null);   
    const [savedDate, setSavedDate] = useState(null);  
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log("User typed:", e.target.value);
      };
    return(
        <div className="accounts-overview call-management">
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
                    <h3>Call Management</h3>
                    <p>Visualize call data, table and success rate.</p>
                </div>
                  </div>
            </div>
            <div className="user-subscription">
                <div className="search-user">
                    <div className="search-user-bar call-bar">
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
                    <div className="all-users-subscription search-call-users">
                                                        
                        <div className="date-picker subscription-dropdown">
                                                      <div className="all-subscription">
                                                        <p>
                                                          {savedDate 
                                                            ? savedDate.toLocaleDateString("en-GB")  
                                                            : "Select Date"}
                                                        </p>
                                                        <img
                                                          className="chevronDown"
                                                          src={calender}
                                                          alt="toggle"
                                                          onClick={() => setOpenDate(!openDate)}
                                                        />
                                                      </div>                      
                                                    
                                                      {openDate && (
                                                        <div className="date-dropdown-content">
                                                          <div className="set-date">
                                                            <p className="set-date-heading">Set Date</p>
                                                          </div>                      
                                                    
                                                          <div className="dropdown-border"></div>                      
                                                    
                                                          <div className="date-picker-wrapper">
                                                            <DatePicker
                                                              selected={startDate}
                                                              onChange={(date) => setStartDate(date)}
                                                              inline   
                                                              calendarClassName="custom-calendar"
                                                            />
                                                          </div>                      
                                                    
                                                          <div className="date-picker-actions">
                                                            <button 
                                                      className="admin-cancel" 
                                                      onClick={() => {
                                                        setStartDate(null);   
                                                        setOpenDate(false);  
                                                      }}
                                                    >
                                                      Cancel
                                                    </button>
                                                            <button 
                                                              className="admin-save" 
                                                              onClick={() => {
                                                                setSavedDate(startDate);
                                                                setOpenDate(false);
                                                              }}
                                                            >
                                                              Save
                                                            </button>
                                                          </div>
                                                        </div>
                                                      )}
                        </div>
                                                    
                        <div className="subscription-dropdown">
                          <div className="all-subscription">
                            <p>ID Type</p>
                            <img
                              className="chevronDown"
                              src={chevronDown}
                              alt="toggle dropdown"
                              onClick={() => setOpen(!open)} 
                            />
                        </div>

                         {open && (
                           <div className="dropdown-content id-type-dropdown">
                             <div className="users-content active-option">
                               <p className="active-sub">All</p>
                               <img src={check} alt="selected" />
                             </div>
                             <div className="users-content">
                               <p>Temporary IDs</p>
                               <img src="" alt="" />
                             </div>
                             <div className="users-content">
                               <p>Permanent IDs</p>
                               <img src="" alt="" />
                             </div>
                           </div>
                         )}
                       </div>
                        </div>
                </div>
                <div className="total-users">
                    <div className="daily-users">
                        <span>
                            <p className='Total'>Total</p> /<p className='daily'>daily</p>
                        </span>
                        <div className="two-hundred-users">
                            <p>200</p>
                        </div>
                    </div>
                    <div className="daily-users">
                            <p>Permenant IDs</p>
                        <div className="two-hundred-users">
                            <p>120</p>
                        </div>
                    </div>
                    <div className="daily-users">
                            <p>Temporary IDs</p>
                        <div className="two-hundred-users">
                            <p>80</p>
                        </div>
                    </div>
                    <div className="daily-users">
                            <p>Pending</p>
                        <div className="two-hundred-users">
                            <p>23</p>
                        </div>
                    </div>
                </div>

                <div className="users-details call-manage">
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
                                        <img src={pristia} alt="" />
                                        <div className="userName-userEmail">
                                        <p className='hanna'>Pristia Candra</p>
                                        <p className='users-email-account'>pristia@gmail.com</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-info">
                                     <div className="users-basic-info">
                                         <input type="checkbox" name="" id="users-initials-checkbox" />
                                         <img src={giana} alt="" />
                                         <div className="userName-userEmail">
                                         <p className='hanna'>Giana Lipshutz</p>
                                         <p className='users-email-account'>giana@gmail.com</p>
                                     </div>
                                     </div>
                                 </div>
              
                                 <div className="users-info">
                                     <div className="users-basic-info">
                                         <input type="checkbox" name="" id="users-initials-checkbox" />
                                         <img src={james} alt="" />
                                         <div className="userName-userEmail">
                                         <p className='hanna'>James George</p>
                                         <p className='users-email-account'>james@gmail.com</p>
                                     </div>
                                     </div>
                                 </div>
              
                                 <div className="users-info">
                                     <div className="users-basic-info">
                                         <input type="checkbox" name="" id="users-initials-checkbox" />
                                         <img src={jordyn} alt="" />
                                         <div className="userName-userEmail">
                                         <p className='hanna'>Jordyn George</p>
                                         <p className='users-email-account'>jordyn@gmail.com</p>
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
                
                            <div className="users-tel location">
                                <div className="number-heading">
                                    <p>Location</p>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                    <div className="users-location">
                                    <p className='state'>Lagos</p>
                                    <p className='country'>Nigeria</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no">
                                    <div className="users-location">
                                    <p className='state'>Kano</p>
                                    <p className='country'>Nigeria</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                        <div className="users-location">
                                        <p className='state'>Rivers</p>
                                        <p className='country'>Nigeria</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                    <div className="users-location">
                                    <p className='state'>Oyo</p>
                                    <p className='country'>Nigeria</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                        <div className="users-location">
                                        <p className='state'>Enugu</p>
                                        <p className='country'>Nigeria</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                        <div className="users-location">
                                        <p className='state'>Delta</p>
                                        <p className='country'>Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                        <div className="users-location">
                                        <p className='state'>Abia</p>
                                        <p className='country'>Nigeria</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no">
                                        <div className="users-location">
                                        <p className='state'>Ekiti</p>
                                        <p className='country'>Nigeria</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-call-no">
                                    <div className="users-phone-no ">
                                        <div className="users-location">
                                        <p className='state'>Benue</p>
                                        <p className='country'>Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="users-sub id-details">
                                <div className="number-heading subscription-heading">
                                    <p>ID Details</p>
                                </div>

                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Emily Stone</p>
                                        <p className='country'>0924 678 5432</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Mia Johnson</p>
                                        <p className='country'>0632 456 7890</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Olivia Brown</p>
                                        <p className='country'>0543 678 1234</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Lily Adams</p>
                                        <p className='country'>0751 234 8901</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Ava Wilson</p>
                                        <p className='country'>0487 321 6540</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Sophia Davis</p>
                                        <p className='country'>0398 765 4321</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Isabella Miller</p>
                                        <p className='country'>0265 890 1234</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Charlotte Taylor</p>
                                        <p className='country'>0176 543 2109</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-account-sub">
                                    <div className="users-basic-info users-account-sub-plan">
                                        <div className="users-location">
                                        <p className='state'>Amelia Anderson</p>
                                        <p className='country'>0112 345 6789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <div className="users-profile users-id-type">
                                <div className="number-heading profile-heading">
                                    <p className='id-heading'>ID Type</p>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id">
                                            <div className="permenent-bg-b">h</div>
                                            <p className='permenent-bg-para'>Permenent</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id bg-g">
                                            <div className="permenent-bg-b permenent-bg-g">h</div>
                                            <p className='permenent-bg-para permenent-bg-g-para'>Temporary</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id bg-g">
                                            <div className="permenent-bg-b permenent-bg-g">h</div>
                                            <p className='permenent-bg-para permenent-bg-g-para'>Temporary</p>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id">
                                            <div className="permenent-bg-b">h</div>
                                            <p className='permenent-bg-para'>Permenent</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id bg-g">
                                            <div className="permenent-bg-b permenent-bg-g">h</div>
                                            <p className='permenent-bg-para permenent-bg-g-para'>Temporary</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id">
                                            <div className="permenent-bg-b">h</div>
                                            <p className='permenent-bg-para'>Permenent</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id">
                                            <div className="permenent-bg-b">h</div>
                                            <p className='permenent-bg-para'>Permenent</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id bg-g">
                                            <div className="permenent-bg-b permenent-bg-g">h</div>
                                            <p className='permenent-bg-para permenent-bg-g-para'>Temporary</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="users-percentage id-type">
                                    <div className="permenant-id">
                                        <div className="sub-permenant-id">
                                            <div className="permenent-bg-b">h</div>
                                            <p className='permenent-bg-para'>Permenent</p>
                                        </div>
                                    </div>
                                </div>

                            </div>   
                            <div className="last-action duration">
                                <div className="number-heading action-heading">
                                    <p>Duration</p>
                                </div>   
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>02:34:56</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>01:15:30</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>00:45:12</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>00:22:05</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>00:11:59</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>01:30:45</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>00:05:27</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>00:50:33</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>00:59:59</p>
                                    </div>
                                </div>
                            </div>

                            <div className="last-action  users-id-type">
                                <div className="number-heading action-heading">
                                    <p>Call Date</p>
                                </div>   
                                 <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                 <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>22-09-2024</p>
                                    </div>
                                </div>
                            </div>

                            <div className="last-action call-date success-rate">
                                <div className="number-heading action-heading">
                                    <p>Success Rate</p>
                                </div>   
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>75%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>50%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>100%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>25%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>20%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>90%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>60%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>30%</p>
                                    </div>
                                </div>
                                <div className="users-percentage id-type">
                                    <div className="permenant-id ">
                                            <p className='hello'>15%</p>
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
                                <div className="fa-bars">
                                    <img src={bar} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-pagination">
                            <div className="numbered-pager">
                                <div className="arrow-left">
                                    <img src={arrowLeft} alt="" />
                                </div>
                                <div className="pages-number">
                                    <div className="page-one active-page"><p className='pages'>1</p></div>
                                    <div className="page-one"><p className='pages'>2</p></div>
                                    <div className="page-one"><p className='pages'>3</p></div>
                                    <div className="more-pages"><p className='elipses'>...</p>
                                    <div className="page-one hidden-pages"><p className='pages'>4</p></div>
                                    <div className="page-one hidden-pages"><p className='pages'>5</p></div>
                                    <div className="page-one hidden-pages"><p className='pages'>6</p></div>
                                    <div className="page-one hidden-pages"><p className='pages'>7</p></div>
                                    <div className="page-one hidden-pages"><p className='pages'>8</p></div>
                                    <div className="page-one hidden-pages"><p className='pages'>9</p></div>
                                    </div>
                                    <div className="page-one"><p className='pages'>10</p></div>
                                </div>
                                <div className="arrow-left">
                                    <img src={arrowRight} alt="" />
                                </div>
                            </div>

                            <div className="nine-fifty-entries">
                                <p>Showing 1 to 9 of 50 entries</p>
                            </div>
                        </div>
            </div>
        </div>
    )
}