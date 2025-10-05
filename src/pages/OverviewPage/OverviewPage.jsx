import React, { useState } from 'react';
import NavSection from "../../component/Overview-dashboard/nav-section/nav_section"
import AdminSearchSection from "../../component/Overview-dashboard/search-section/search_section"
import AdminLineCharts from "../../component/Overview-dashboard/AdminLineCharts/AdminLineCharts"
import AdminBarCharts from "../../component/Overview-dashboard/AdminLineCharts/AdminLineCharts"
// import UserTable from "../../component/UserTable/UserTable";

import "./OverviewPage.css";

function OverviewSection (){
    return(
        <div className="revenue-section">
            <NavSection/>
            <AdminSearchSection/>
            <AdminLineCharts/>
            <AdminBarCharts/>
        {/* <div className="mt-6">
            <UserTable />
      </div> */}
        </div>
    )
} export default OverviewSection;