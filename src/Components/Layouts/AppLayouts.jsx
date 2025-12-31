import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import HeaderSecond from "./HeaderSecond";

function AppLayouts() {
  const location = useLocation();
  const path = location.pathname;
  const staticRoute = ['/congratulations', '/forgot-password', '/near-by-doctor', '/book-appointment', '/doctor-pending', '/login', '/forgot-password', '/otp', '/set-password', '/create-account', '/kyc', '/personal-info', '/medical-history', '/family-medical-history', '/select-account-type', '/prescriptions-reports']
  const userId=localStorage.getItem("userId")


  return (
    <>
      {/* <Header/>
    <Outlet/>
    <Footer/> */}

      {!staticRoute.includes(path) &&
        //  <Header/>
       ( userId?<HeaderSecond />:<Header/>)
      }
      <Outlet />
      {!staticRoute.includes(path) && <Footer />}


    </>


  )
}

export default AppLayouts