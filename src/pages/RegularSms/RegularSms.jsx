import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import RegularSmsSection from "../../component/Regular-sms/Regular_sms"

export default function RegularCallerSms(){
    return(
        <div className="call-page">
            <NavSection/>
            <RegularSmsSection/>
        </div>
    )
}