import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import CallerIdentity from "../../component/Caller-identity/Caller_identity"
import "./CallerID.css"

export default function CallerIDSection(){
    return(
        <div className="caller-id">
            <NavSection/>
            <CallerIdentity/>
        </div>
    )
}