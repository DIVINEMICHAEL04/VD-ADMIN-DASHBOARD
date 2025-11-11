import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import KycDocs from "../../component/Kyc-docs/Kyc_docs"
import "./KycDocument.css"

export default function KycDocuments(){
    return(
        <div className="kycdocs">
            <NavSection/>
            <KycDocs/>
        </div>
    )
}