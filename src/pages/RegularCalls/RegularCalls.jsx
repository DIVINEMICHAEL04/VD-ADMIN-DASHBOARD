import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import RegularCallSection from "../../component/Regular-calls/Regular_calls";

export default function RegularCaller (){
    return(
        <div className="call-page">
            <NavSection/>
            <RegularCallSection/>
        </div>
    )
}