import React, {useState}  from "react"
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
import userOne from "../../assets/Ellipse 3.png"
import userTwo from "../../assets/Ellipse 3 (3).png"
import userThree from "../../assets/Ellipse 3 (2).png"
import userFour from "../../assets/Ellipse 3 (4).png"
import userFive from "../../assets/Ellipse 3 (5).png"
import userSix from "../../assets/Ellipse 3 (6).png"
import missedCall from "../../assets/call-remove.png"
import redIncoming from "../../assets/call-incoming (1).png"
import greenOutgoing from "../../assets/call-outgoing (1).png"
import calender from "../../assets/calendar.png"  
import arrowRight from "../../assets/arrow-right.png"  
import arrowLeft from "../../assets/arrow-left (2).png"
import pristiaa from "../../assets/pristiaa.png"
import call from "../../assets/call.png"
import mail from "../../assets/mail.png"
import navLeft from "../../assets/side-nav-left.png"
import navRight from "../../assets/side-nav-right.png"

export default function DataCallSection(){
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
        <div className="users-section-page user-call-log-">
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

              <div className="individual-info">
                <div className="sub-individual-info">
                    <div className="sub-user-heading">
                         <img src={navLeft} alt="" />
                         <h3>User Details</h3>
                     </div>

                     <div className="users-details-log">
                        <div className="user-initial-log">
                            <img src={pristiaa} alt="" />
                            
                                <div className="pristiaa-candra">
                                    <p className="user-pristiaa">Pristia Candra</p>
                                    <p className="pristiaa-tel">0813 563 3745</p>
                                </div>

                             <div className="user-sub-plan">
                                    <div className="sub-free-plan">
                                        <p>Free Plan</p>
                                    </div>
                                </div>

                             <div className="demarcation-line-one"></div>

                             <div className="pristiaa-socials">
                                <span className="pristia-mail">
                                    <img src={mail} alt="" />
                                    <p>lincoln@gmail.com</p>
                                </span>
                                <span className="pristia-phone">
                                    <img src={call} alt="" />
                                    <p>0813 563 3745</p>
                                </span>
                            </div>
                        </div>
                        
                        <div className="profile-management">
                            <div className="profile-management-heading">
                                <div className="pristia-call-logs">
                                    <Link id="heading-link"
                                    className={`${getActiveClass('/UserListPage/UserSection')}`} 
                                    to="/UserListPage/UserSection"
                                       >
                                    <p>
                                    Profile
                                    </p>
                                    </Link>
                                </div>
                                <div className="pristia-profile">
                                    <Link id="heading-links">
                                     <p>
                                    Call logs
                                    </p>
                                    </Link>
                                </div>
                                <div className="pristia-call-logs">
                                    <Link id="heading-link"  className={`${getActiveClass('/CallLog/AllSms')}`} 
                                     to="/CallLog/AllSms">
                                    <p>
                                   SMS logs
                                   </p>
                                    </Link>
                                </div>
                                <div className="pristia-call-logs">
                                     <Link id="heading-link"  className={`${getActiveClass('/AllSms/UserManagement')}`} 
                                      to="/AllSms/UserManagement">
                                      <p>
                                    Management
                                    </p>
                                    </Link>
                                </div>
                            </div>

                            <div className="pristia-personal-info">
                                <div className="personal-info-heading">
                                    <div className="type-of-call">
                                        <div className="trans-calls-btn">
                                            <Link id="heading-link"
                                             className={`${getActiveClass('/UserSection/CallLog')}`} 
                                             to="/UserSection/CallLog"
                                            >
                                            <p>All Calls</p>
                                            </Link>
                                        </div>
                                        <div className="trans-calls-btn">
                                             <Link id="heading-link"
                                             className={`${getActiveClass('/CallLog/RegularCalls')}`} 
                                             to="/CallLog/RegularCalls"
                                             >
                                            <p>Regular Calls</p>
                                            </Link>
                                        </div>
                                        <div className="all-calls-btn">
                                            <p>Data Calls</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="demarcation-line-two"></div>

                                <div className="call-search">
                                    <div className="call-search-bar">
                                        <div className="user-call-searchbar">
                                            <div className="sub-user-call-searchbar">
                                            <img src={searchNormal} alt="" />
                                            <input type="search" name="" id="call-search-input" placeholder="Search day, month, year..."/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="call-routes-dropdown">
                                    <div className="call-routes">
                                        <p>All routes</p>
                                        <img src={chevronDown} alt="" />
                                    </div>
                                    <div className="routes-dropdown-content">
                                        <div className="typesof-routes active-route-bg">
                                            <p className="active-route">All routes</p>
                                            <img src={check} alt="" />
                                        </div>
                                        <div className="typesof-routes ">
                                            <p className="inactive-route">Outgoing</p>
                                        </div>
                                        <div className="typesof-routes">
                                            <p className="inactive-route">Incoming</p>
                                        </div>
                                        <div className="typesof-routes">
                                            <p className="inactive-route">Missed</p>
                                        </div>
                                    </div>
                                    </div>

                                </div>

                                <div className="incoming-calls">
                                    <div className="call-log-date">
                                        <p>Wednesday, 9 October 2024</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userOne} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={greenOutgoing} alt="" />
                                                    <p className="outgoing-green-color">Outgoing</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userTwo} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={redIncoming} alt="" />
                                                    <p className="incoming-red-color">Incoming</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userThree} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={missedCall} alt="" />
                                                    <p className="missed-yellow-color">Missed</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userTwo} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={redIncoming} alt="" />
                                                    <p className="incoming-red-color">Incoming</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="call-log-date">
                                        <p>Tuesday, 8 October 2024</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userOne} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={redIncoming} alt="" />
                                                    <p className="incoming-red-color">Incoming</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userFour} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={redIncoming} alt="" />
                                                    <p className="incoming-red-color">Incoming</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userFive} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={redIncoming} alt="" />
                                                    <p className="incoming-red-color">Incoming</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="call-log-date">
                                        <p>Monday, 7 October 2024</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userSix} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={greenOutgoing} alt="" />
                                                    <p className="outgoing-green-color">Outgoing</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                    <div className="calling-userid">
                                        <div className="first-outgoing">
                                            <img src={userFour} alt="" />
                                            <div className="outgoing-name">
                                                <p>Tony Cruz</p>
                                                <span className="which-call-type">
                                                    <img src={redIncoming} alt="" />
                                                    <p className="incoming-red-color">Incoming</p>
                                                </span>
                                            </div>
                                        </div>

                                        <p>12:04</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                     </div>

                </div>
              </div>
       </div>
    )
}