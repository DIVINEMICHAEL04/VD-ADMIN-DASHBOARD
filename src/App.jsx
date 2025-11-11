import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSect from "./pages/Login/Login"
import ResetPassword from "./pages/Reset/Reset"
import SubmitForm from "./pages/Submit/Submit"
import OtpSection from "./pages/Otp/Otp"
import SuccessSection from "./pages/Success/Success"
import OverviewSection from "./pages/OverviewPage/OverviewPage"
import UserListSection from "./pages/UserListPage/UserListPage"
import CallManagementSection from "./pages/CallManagement/CallManagement"
import FraudDetectionSection from "./pages/FraudSection/FraudSection"
import CallerIDSection from "./pages/CallerID/CallerID"
import SubscriptionSect from "./pages/SubscriptionDashboard/SubscriptionDashboard"
import ProfilePageSection from "./pages/ProfilePage/ProfilePage"
import UsersSection from "./pages/UserSection/UserSection"
import UserCallLog from "./pages/CallLog/CallLog"
import RegularCaller from "./pages/RegularCalls/RegularCalls"
import DataCaller from "./pages/DataCall/DataCall"
import AllCallerSms from "./pages/AllSms/AllSms"
import RegularCallerSms from "./pages/RegularSms/RegularSms"
import DataCallerSms from "./pages/DataSms/DataSms"
import ManagementSect from "./pages/UserManagement/UserManagement"
import KycSection from "./pages/Kyc/Kyc"
import KycDocuments from "./pages/KycDocument/KycDocument"
// import './App.css'

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginSect />} /> 
        <Route path="/Reset" element={<ResetPassword />} />
        <Route path="/Submit" element={<SubmitForm />} />
        <Route path="/Otp" element={<OtpSection />} />
        <Route path="/Success" element={<SuccessSection />} /> 
        <Route path="/OverviewPage" element={<OverviewSection />} /> 
        <Route path="/UserListPage" element={<UserListSection />} /> 
        <Route path="/CallManagement" element={<CallManagementSection />} /> 
        <Route path="/FraudSection" element={<FraudDetectionSection />} /> 
        <Route path="/CallerID" element={<CallerIDSection />} /> 
        <Route path="/SubscriptionDashboard" element={<SubscriptionSect />} />
        <Route path="/SubscriptionDashboard/ProfilePage" element={<ProfilePageSection />} />
        <Route path="/UserListPage/UserSection" element={<UsersSection />} /> 
        <Route path="/UserSection/CallLog" element={<UserCallLog />} />
        <Route path="/CallLog/RegularCalls" element={<RegularCaller />} />
        <Route path="/RegularCalls/DataCall" element={<DataCaller />} />
        <Route path="/CallLog/AllSms" element={<AllCallerSms />} />
        <Route path="/AllSms/RegularSms" element={<RegularCallerSms />} />
        <Route path="/RegularSms/DataSms" element={<DataCallerSms />} />
        <Route path="/AllSms/UserManagement" element={<ManagementSect />} />
        <Route path="/Kyc" element={<KycSection />} />
        <Route path="/Kyc/KycDocument" element={<KycDocuments />} />


      </Routes>
    </Router>
    </div>
  )
}

export default App
