import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import UserListDashboard from "../../component/Userlist-dashboard/Userlist_dashboard"
import "./UserListPage.css"

export default function UserListSection (){
    return(
    <div className="users-section">
        <NavSection/>
        <UserListDashboard/>
    </div>
    )
}