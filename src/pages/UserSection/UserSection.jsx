import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import UserSect from "../../component/User-section/User_section"
import "./UserSection.css"


export default function UsersSection(){
    return(
        <div className="users-sect">
            <NavSection/>
            <UserSect/>
        </div>
    )
}