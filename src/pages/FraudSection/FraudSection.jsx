import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import FraudDetection from "../../component/Fraud-dashboard/Fraud_dashboard"
import "./FraudSection.css"

export default function FraudDetectionSection(){
    return(
        <div className="fraud-sect">
            <NavSection/>
            <FraudDetection/>
        </div>
    )
}