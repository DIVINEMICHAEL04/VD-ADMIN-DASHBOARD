import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import DataSmsSection from "../../component/Data-sms/Data_sms"

export default function DataCallerSms(){
    return(
        <div className="call-page">
            <NavSection/>
            <DataSmsSection/>
        </div>
    )
}