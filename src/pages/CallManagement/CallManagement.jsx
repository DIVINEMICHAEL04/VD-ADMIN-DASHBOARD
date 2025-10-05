import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import CallManagementSect from "../../component/CallManagement-dashboard/CallManagement_dashboard"
import './CallManagement.css'

export default function CallManagementSection(){
    return(
        <div className="call-section">
            <NavSection/>
            <CallManagementSect/>
        </div>
    )
}