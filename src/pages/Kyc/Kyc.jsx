import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section";
import KycVerification from "../../component/Kyc-verification/Kyc_verification";
import "./Kyc.css"

export default function KycSection(){
    return(
        <div className="kyc-verification">
            <>
            <NavSection />
            <KycVerification />
            </>
        </div>
    )
}