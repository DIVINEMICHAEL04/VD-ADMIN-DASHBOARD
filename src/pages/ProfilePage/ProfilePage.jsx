import React, {useState} from "react";
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import UsersPageSection from "../../component/Users-page/Users_page"
import "./ProfilePage.css"

export default function ProfilePageSection(){
    return(
        <div className="profile-sect">
            <NavSection/>
            <UsersPageSection/>
        </div>
    )
}