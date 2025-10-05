import React, { useState } from 'react';
import OneTimePassword from "../../component/Login-page/otp-section/otp_section"

function OtpSection(){
    return(
        <div className="otp-page">
            <OneTimePassword/>
        </div>
    )
}
export default OtpSection;