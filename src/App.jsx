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


      </Routes>
    </Router>
    </div>
  )
}

export default App
