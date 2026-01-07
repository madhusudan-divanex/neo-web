import { matchPath, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeaderSecond from "./HeaderSecond";
import DoctorHeaderThird from "../../Doctor/DoctorLayouts/DoctorHeaderThird";

function AppLayouts() {
  const location = useLocation();
  const path = location.pathname;
  const userId = localStorage.getItem("userId");

  const staticRoute = [
    '/congratulations','/forgot-password','/near-by-doctor','/book-appointment',
    '/doctor-pending','/login','/otp','/set-password','/create-account','/kyc',
    '/personal-info','/medical-history','/family-medical-history','/select-account-type',
    '/prescriptions-reports','/doctor/login','/doctor/forgot-password','/doctor/otp',
    '/doctor/set-password','/doctor/medical-license','/doctor/create-account',
    '/doctor/kyc','/doctor/address-about','/doctor/education-work',
    '/doctor/select-type','/doctor/kyc-message'
  ];

  const doctorsRoute = [
    '/doctor/report-view/:name/:id',
    '/doctor/profile-approval/:name/:id',
    '/doctor/patient-history',
    '/doctor/appointment-list',
    '/doctor/requests',
    '/doctor/detail-view',
    '/doctor/edit-profile',
    '/doctor/request-list',
    '/doctor/profile-edit-request',
    '/doctor/profile-approval-request',
    '/doctor/chat',
    '/doctor/change-password'
  ];

  const isDoctorRoute = doctorsRoute.some(route =>
    matchPath({ path: route, end: false }, path)
  );

  const renderHeader = () => {
    if (isDoctorRoute) return <DoctorHeaderThird />;
    if (userId) return <HeaderSecond />;
    return <Header />;
  };

  return (
    <>
      {!staticRoute.includes(path) && renderHeader()}
      <Outlet />
      {!staticRoute.includes(path) && !isDoctorRoute && <Footer />}
    </>
  );
}


export default AppLayouts;
