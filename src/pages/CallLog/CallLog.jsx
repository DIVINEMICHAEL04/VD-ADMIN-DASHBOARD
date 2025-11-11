import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import CallSection from "../../component/Call-log/Call_log"
import "./CallLog.css"

export default function UserCallLog(){
    return(
        <div className="call-page">
            <NavSection/>
            <CallSection/>
        </div>
    )
}