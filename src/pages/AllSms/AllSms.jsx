import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import AllSmsSection from "../../component/All-sms/All_sms"

export default function AllCallerSms(){
    return(
        <div className="call-page">
            <NavSection/>
            <AllSmsSection/>
        </div>
    )
}