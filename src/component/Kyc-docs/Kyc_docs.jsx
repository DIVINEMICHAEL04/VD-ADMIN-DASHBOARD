import React, { useState} from "react";
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import chevronDown from "../../assets/chevron-down.png"
import fineboy from "../../assets/fineboy.png"
import Avatar from "../../assets/Avatar.png"
import searchNormal from "../../assets/search-normal.png";
import Message from "../../assets/Message (1).png"
import viewArrow from "../../assets/view-arrow.png"
import check from "../../assets/check.png"
import Rayna from "../../assets/Rayna.png"
import arrowUp from "../../assets/arrow-up.png"
import bar from "../../assets/bar.png"
import close from "../../assets/close.png"
import megaid from "../../assets/megaid.png"
import arrowRight from "../../assets/arrow-right.png"  
import arrowLeft from "../../assets/arrow-left (2).png"
import pristiaa from "../../assets/pristiaa.png"
import call from "../../assets/call.png"
import mail from "../../assets/mail.png"
import frontview from "../../assets/frontview.png"
import idback from "../../assets/idback.png"
import userselfie from "../../assets/userselfie.png"
import navLeft from "../../assets/side-nav-left.png"
import "./Kyc_docs.css"

export default function KycDocs(){
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
                const [showSlide, setShowSlide] = useState(false);

    return(
        <div className="users-section-page  ">
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
                    {/* pristiaa profile */}
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
                                                        <div className="kyc-management">
                                                        <div className="profile-management-heading kyc-country">
                                                            <p>
                                                               Country and ID Type
                                                            </p>
                                                        </div>
                    
                                                        
                    
                                                            <div className="pristia-info-table kyc-table">
                                                                <div className="kyc-row">
                                                                <p className="faint-grey kyc-id">Country</p>
                                                                <p className="deep-black kyc-id">Nigeria</p>
                                                                </div>
                                                                 <div className="kyc-row">
                                                                <p className="faint-grey kyc-id">ID Type</p>
                                                                <p className="deep-black kyc-id">National ID Card</p>
                                                                </div>
                                                            </div>
                                                            </div>
                    
                                                             <div className="personal-info-heading kyc-photo">
                                                                <p>Photos</p>
                                                            </div>
                    
                                                             <div className="demarcation-line-two"></div>
                    
                                                             <div className="kyc-users-id">

                                                                <div className="f-v-img f-img">
                                                                    <p className="kyc-view">Front View</p>
                                                                    <div className="view-pp" onClick={() => setShowSlide(true)}>
                                                                        <p>view photo</p>
                                                                        <img src={viewArrow} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="f-v-img b-img">
                                                                    <p className="kyc-view">Back View</p>
                                                                </div>
                                                                <div className="f-v-img s-img">
                                                                    <p className="kyc-view">Selfie Photo</p>
                                                                </div>

                                                             </div>

                                                            {showSlide && (
                                                                <div className="slide-show">
                                                                  <div className="inner-slide-show">
                                                                    <div className="close-img" onClick={() => setShowSlide(false)}>
                                                                      <img src={close} alt="close" />
                                                                    </div>
                                                                    <p className="img-preview">Preview</p>
                                                                    <img className="mega-idd" src={megaid} alt="ID preview" />
                                                                  </div>
                                                                </div>
                                                              )}
                                                             </div>
                                                </div>
                </div>

            </div>
        </div>
    )
}