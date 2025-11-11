import React, {useState} from "react"
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import DataCallSection from "../../component/Data-call/Data_call"

export default function DataCaller(){
    return(
        <div className="call-page">
            <NavSection/>
            <DataCallSection/>
        </div>
    )
}