import React, {useState}  from "react"
import { Link, useLocation } from 'react-router-dom';
import chevronDown from "../../assets/chevron-down.png"
import Avatar from "../../assets/Avatar.png"
import searchNormal from "../../assets/search-normal.png";
import Message from "../../assets/Message (1).png"
import pristiaa from "../../assets/pristiaa.png"
import call from "../../assets/call.png"
import mail from "../../assets/mail.png"
import navLeft from "../../assets/side-nav-left.png"
import navRight from "../../assets/side-nav-right.png"
import "./Management.css"

export default function ManagementSection(){
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
        <div className="users-section-page management-page">
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
                        <Link className={`list-link  ${getActiveClass('/UserListPage')}`} to="/UserListPage">
                            {/* <img src={profileUser} alt="" /> */}
                        <img src={navLeft} alt="" 
                        />
                        </Link>
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
                                <div className="pristia-call-logs">
                                    <Link id="heading-link"  className={`${getActiveClass('/UserSection/CallLog')}`} 
                                    to="/UserSection/CallLog">
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
                                <div className="pristia-profile">
                                      <p>
                                    Management
                                    </p>
                                </div>
                            </div>

                             <div className="pristia-personal-info">
                                        <div className="profile-managements">
                                            <div className="management-password-reset">
                                            <p className="manage-reset">Reset Password</p>
                                            <p className="password-reset-para">Reset user account password</p>
                                            </div>
                                           <div className="management-btn">
                                            <p>Reset Password</p>
                                           </div>
                                        </div>

                                        <div className="demarcation-line-two"></div>

                                         <div className=" profile-managements">
                                            <div className="management-password-reset">
                                            <p className="manage-reset">Reset Password</p>
                                            <b className="password-reset-para">
                                                Temporarily shutdown user account due to potential bridge <br /> in policy or report
                                            </b>
                                            </div>
                                           <div className="management-btn management-deactivate">
                                            <p>Reset Password</p>
                                           </div>
                                        </div>

                                         <div className="demarcation-line-two"></div>

                                         <div className="profile-managements">
                                            <div className="management-password-reset">
                                            <p className="manage-reset">Reset Password</p>
                                            <b className="password-reset-para">Ban user account due to confirmed bridge in policy <br /> or fraudulent activities
                                            </b>
                                            </div>
                                           <div className="management-btn management-ban">
                                            <p>Reset Password</p>
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