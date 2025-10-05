import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import SubscriptionSection from "../../component/Users-subscription/Users_subscription"
import { Outlet } from "react-router-dom";
import "./SubscriptionDashBoard.css"

export default function SubscriptionSect(){
    return(
        <div className="sub-sect">
            <NavSection/>
            <SubscriptionSection/>
        </div>
    )
}