import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import ManagementSection from "../../component/Management/Management"

export default function ManagementSect(){
    return(
        <div className="call-page">
            <NavSection/>
            <ManagementSection/>
        </div>
    )
}