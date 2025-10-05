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
import "./Users_subscription.css"

export default function SubscriptionSection(){
      const getActiveClass = (path) => 
  location.pathname.startsWith(path) ? 'active-link' : '';

                  const [searchHeaderText, setSearchHeaderText] = useState("");
                    const [searchUserText, setSearchUserText] = useState("");
                    const [openSubscriptions, setOpenSubscriptions] = useState(false); 
                    const [openDate, setOpenDate] = useState(false);
                    const [openLastAction, setOpenLastAction] = useState(false);
                    const [openProfile, setOpenProfile] = useState(false);
                    const [startDate, setStartDate] = useState(null);   
                    const [savedDate, setSavedDate] = useState(null);  
        
                    const handleChange = (e) => {
                    setSearchText(e.target.value);  
                    console.log("User typed:", e.target.value); };
                    const [open, setOpen] = useState(false);
                
                    const [openIndex, setOpenIndex] = useState(null);
                
                    const toggleDropdown = (index) => {
                    setOpenIndex(openIndex === index ? null : index);
                    };
                    const bars = [1,2,3,4,5,6,7,8,9]; 
    return(
        <div className="caller-section users-subscription">
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
            
                    <div className="callers-overview">
                        <div className="sub-callers-overview">
                            <div className="call-id">
                              <div className="admin-overview">
                                <div className="overview-heading">
                                <h3>Subscription</h3>
                                <p>view user payments.</p>
                               </div>
                             </div>
                           </div>
            
                           <div className="caller-search">
                            <div className="caller-search-input">
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
            
                            <div className="caller-subscription subscription-dropdown">
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
                                  <div className="dropdown-content  id-type-dropdown">
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
                                
                                    <div className="call-status subscription-dropdown">
                                      <div className="all-subscription">
                                        <p>Status</p>
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
            
                            <div className="total-users">
                                <div className="daily-users">
                                    <span>
                                        <p className='Total'>Total</p>
                                    </span>
                                    <div className="two-hundred-users">
                                        <p>23</p>
                                    </div>
                                </div>
                                <div className="daily-users">
                                        <p>Approved</p>
                                    <div className="two-hundred-users">
                                        <p>23</p>
                                    </div>
                                </div>
                                <div className="daily-users">
                                        <p>Rejected</p>
                                    <div className="two-hundred-users">
                                        <p>23</p>
                                    </div>
                                </div>
                                <div className="daily-users">
                                        <p>Pending</p>
                                    <div className="two-hundred-users">
                                        <p>23</p>
                                    </div>
                                </div>
                            </div>
            
                              <div className="callers-initial-info">
                                <div className="caller-users-name">
                                  <div className="initial-heading">
                                      <input type="checkbox" name="" id="users-initials-checkbox" />
                                      <p>Name</p>
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
            
                                <div className="callers-phone-number">
                                    <div className="number-heading">
                                      <p>Phone Number</p>
                                    </div>
                                  
                                    {/* Loop through an array of 9 items */}
                                    {[...Array(9)].map((_, index) => (
                                      <div className="users-call-no" key={index}>
                                        <div className="users-phone-no">
                                          <p>0813 563 3745</p>
                                        </div>
                                      </div>
                                    ))}
                                </div>
            
                                <div className="callers-subscription">
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
                                    <div className="user-account-sub">
                                        <div className="users-basic-info users-account-sub-plan">
                                            <div className="plan-type bg-b">Business Plan</div>
                                        </div>
                                    </div>
                                    <div className="user-account-sub">
                                        <div className="users-basic-info users-account-sub-plan">
                                            <div className="plan-type bg-a">Free Plan</div>
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

                                 <div className="callers-status">
                                  <div className="number-heading profile-heading">
                                      <p className='id-heading'>Status</p>
                                  </div>
                        
                                       <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className="status-type-coloured-bg Pending-bg">
                                                <div className="yellow-status-bg">h</div>
                                                <p className='Approved Pending'>Warning</p>
                                            </div>
                                        </div>
                                    </div>
       
                                    <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className=" status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
       
                                     <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className="status-type-coloured-bg">
                                                <div className="green-status-bg">h</div>
                                                <p className='Approved'>Active</p>
                                            </div>
                                        </div>
                                    </div>
       
                                    <div className="status-type">
                                        <div className="permenant-id">
                                            <div className=" status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
                       
                                    <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className="status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className="status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className="status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status-type">
                                        <div className="sub-status-type">
                                            <div className="status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
       
                                    <div className="status-type">
                                        <div className="permenant-id">
                                            <div className=" status-type-coloured-bg Rejected-bg">
                                                <div className="red-status-bg">h</div>
                                                <p className='Approved Rejected'>Expired</p>
                                            </div>
                                        </div>
                                    </div>
                                            </div>

                                <div className="callers-request-data">
                                  <div className="number-heading action-heading">
                                      <p>Payment Date</p>
                                  </div>
            
                                   {[...Array(9)].map((_, index) => (
                                     <div className="users-percentage id-type" key={index}>
                                       <div className="permenant-id">
                                         <p className='hello'>22-09-2024</p>
                                       </div>
                                     </div>
                                   ))}
                                </div>
            
                                <div className="callers-request-data">
                                  <div className="number-heading action-heading">
                                      <p>Expiry Date</p>
                                  </div>
            
                                   {[...Array(9)].map((_, index) => (
                                     <div className="users-percentage id-type" key={index}>
                                       <div className="permenant-id">
                                         <p className='hello'>22-10-2024</p>
                                       </div>
                                     </div>
                                   ))}
                                </div>
            
                                <div className="more-actions">
                                     <div className="no-action">
                                         <p>null</p> </div> {bars.map((_, index) => ( <div className="fa-bars" key={index}>
                                             <img src={bar} alt="toggle" onClick={() => toggleDropdown(index)} /> {openIndex === index && ( <div className="bars-dropdown">
                                         <div className="users-content">
                                           <Link 
                                             className={`list-link ${getActiveClass('/SubscriptionDashboard/ProfilePage')}`} 
                                             to="/SubscriptionDashboard/ProfilePage"
                                           >
                                             <p>View profile</p>
                                           </Link>
                                        </div> 
                                         
                                         <div className="users-content">
                                         <p className='revoke-action'>Reject ID</p></div> <div className="users-content">
                                         <p className='revoke-action'>Approve ID</p></div> <div className="users-content">
                                         <p className='revoke-action'>Suspend ID Usage</p></div> </div> )} </div> ))} </div>
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
                                                  <div className="page-one hidden-pages"><p className='extra-pages'>4</p></div>
                                                  <div className="page-one hidden-pages"><p className='extra-pages'>5</p></div>
                                                  <div className="page-one hidden-pages"><p className='extra-pages'>6</p></div>
                                                  <div className="page-one hidden-pages"><p className='extra-pages'>7</p></div>
                                                  <div className="page-one hidden-pages"><p className='extra-pages'>8</p></div>
                                                  <div className="page-one hidden-pages"><p className='extra-pages'>9</p></div>
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
        </div>
    )

}