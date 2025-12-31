import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayouts from "./Components/Layouts/AppLayouts";
import Error from "./Components/Pages/Error";
import Home from "./Components/Pages/Home";
import DoctorListing from "./Components/Pages/DoctorListing";
import DateTime from "./Components/Pages/DateTime";
import DoctorDetails from "./Components/Pages/DoctorDetails";
import NewDoctorListing from "./Components/Pages/NewDoctorListing";
import FindLabs from "./Components/Pages/FindLabs";
import LabDetails from "./Components/Pages/LabDetails";
import TestDetails from "./Components/Pages/TestDetails";
import LabDoctorListing from "./Components/Pages/LabDoctorListing";
import FindHospital from "./Components/Pages/FindHospital";
import VideoCall from "./Components/Pages/VideoCall";
import AboutUs from "./Components/Pages/AboutUs";
import Faq from "./Components/Pages/Faq";
import PrivacyPolicy from "./Components/Pages/PrivacyPolicy.JSX";
import TermAndCondition from "./Components/Pages/TermAndCondition";
import Blogs from "./Components/Pages/Blogs";
import BlogDetails from "./Components/Pages/BlogDetails";
import Notification from "./Components/Pages/Notification";
import Contact from "./Components/Pages/Contact";
import HospitalDetails from "./Components/Pages/HospitalDetails";
import ChangePassword from "./Components/Pages/ChangePassword";
import EditProfile from "./Components/Pages/EditProfile";
import LabReport from "./Components/Pages/LabReport";
import Favorite from "./Components/Pages/Favorite";
import Chat from "./Components/Pages/Chat";
import Profile from "./Components/Pages/Profile";
import HealthCardDetails from "./Components/Pages/HealthCardDetails";
import ApproveHealthCard from "./Components/Pages/ApproveHealthCard";
import ShareHealthCard from "./Components/Pages/ShareHealthCard";
import Prescriptions from "./Components/Pages/Prescriptions";
import Search from "./Components/Pages/Search";
import Congratulations from "./Components/Pages/Congratulations";
import MyAppointment from "./Components/Pages/MyAppointment";
import AppointmentDetailsUpcoming from "./Components/Pages/AppointmentDetailsUpcoming";
import AppointmentDetailsCompleted from "./Components/Pages/AppointmentDetailsCompleted";
import AppointmentDetailsCompletedTwo from "./Components/Pages/AppointmentDetailsCompletedTwo";
import AppointmentDetailsCancel from "./Components/Pages/AppointmentDetailsCancel";
import LabTestDetailsUpcoming from "./Components/Pages/LabTestDetailsUpcoming";
import LabTestDetailsVisited from "./Components/Pages/LabTestDetailsVisited";
import LabTestDetailsPending from "./Components/Pages/LabTestDetailsPending";
import LabTestDetailsCompleted from "./Components/Pages/LabTestDetailsCompleted";
import LabTestDetailsCancel from "./Components/Pages/LabTestDetailsCancel";
import SelectNearByDoctor from "./Components/Pages/SelectNearByDoctor";
import BookAppointment from "./Components/Pages/BookAppointment";
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import Otp from "./Components/Auth/Otp";
import SetPassword from "./Components/Auth/SetPassword";
import CreateAccount from "./Components/Auth/CreateAccount";
import KycVerfication from "./Components/Auth/KycVerfication";
import PersonalInfo from "./Components/Auth/PersonalInfo";
import MedicalHistory from "./Components/Auth/MedicalHistory";
import FamilyMedicalHistory from "./Components/Auth/FamilyMedicalHistory";
import SelectAccountType from "./Components/Auth/SelectAccountType";
import PrescriptionsReports from "./Components/Auth/PrescriptionsReports";
import DoctorPending from "./Components/Pages/DoctorPending";
import HeaderSecond from "./Components/Layouts/HeaderSecond";
import AmbulanceBookingHistory from "./Components/Pages/AmbulanceBookingHistory";
import AmbulanceOngoing from "./Components/Pages/AmbulanceOngoing";
import AmbulanceDropSuccess from "./Components/Pages/AmbulanceDropSuccess";
import AmbulanceCancel from "./Components/Pages/AmbulanceCancel";
import BookAmbulanceMap from "./Components/Pages/BookAmbulanceMap";
import AmbulancePickup from "./Components/Pages/AmbulancePickup";
import AmbulanceDriverInfo from "./Components/Pages/AmbulanceDriverInfo";
import AmbulanceFinding from "./Components/Pages/AmbulanceFinding";
import AmbulancePatientPickup from "./Components/Pages/AmbulancePatientPickup";
import AmbulancePatientDrop from "./Components/Pages/AmbulancePatientDrop";
import AmbulanceBookingCancel from "./Components/Pages/AmbulanceBookingCancel";
import VaccinationCertificate from "./Components/Pages/VaccinationCertificate";
import VaccineCertificateType from "./Components/Pages/VaccineCertificateType.JSX";
import VaccinationSelectSim from "./Components/Pages/VaccinationSelectSim";
import VaccinationMobileNumber from "./Components/Pages/VaccinationMobileNumber";
import VaccinationOtp from "./Components/Pages/VaccinationOtp";
import VaccineCertificate from "./Components/Pages/VaccineCertificate";
import ProtectedRoute from "./ProtectedRoute";



function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayouts />,
      errorElement: <Error />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/doctor-listing",
          element: <DoctorListing />,
        },

        {
          path: "/date-time",
          element: <DateTime />,
        },

        // pending
        {
          path: "/doctor-details",
          element: <DoctorDetails />,
        },
        // pending

        {
          path: "/new-doctor-details",
          element: <NewDoctorListing />,
        },



        {
          path: "/find-labs",
          element: <FindLabs />,
        },

        {
          path: "/lab-detail/:name/:id",
          element: <LabDetails />,
        },

        {
          path: "/test-detail/:name/:id",
          element: <TestDetails />,
        },

        {
          path: "/lab-doctor-listing",
          element: <LabDoctorListing />,
        },

        {
          path: "/find-hospital",
          element: <FindHospital />,
        },

        {
          path: "/video-call",
          element: <VideoCall />,
        },

        {
          path: "/about-us",
          element: <AboutUs />,
        },

        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },

        {
          path: "/term-condition",
          element: <TermAndCondition />,
        },

        {
          path: "/blogs",
          element: <Blogs />,
        },

        {
          path: "/blogs-detail",
          element: <BlogDetails />,
        },

        {
          path: "/notification",
          element: <Notification />,
        },

        {
          path: "/hospital-details",
          element: <HospitalDetails />,
        },

        {
          path: "/contact-us",
          element: <Contact />,
        },

        {
          path: "/change-password",
          element: <ChangePassword />,
        },

        {
          path: "/edit-profile",
          element: <EditProfile />,
        },

        {
          path: "/lab-report",
          element: <LabReport />,
        },

        {
          path: "/favorite",
          element: <Favorite />,
        },
        {
          path: "/search",
          element: <Search />,
        },

        {
          path: "/congratulations",
          element: <Congratulations />,
        },

        // {
        //   path: "/my-appointment",
        //   element: <MyAppointment />,
        // },


        {
          path: "/appointment-upcoming",
          element: <AppointmentDetailsUpcoming />,
        },

        {
          path: "/appointment-complete",
          element: <AppointmentDetailsCompleted />,
        },

        {
          path: "/appointment-complete-two",
          element: <AppointmentDetailsCompletedTwo />,
        },

        {
          path: "/appointment-cancel",
          element: <AppointmentDetailsCancel />,
        },

        {
          path: "/lab-upcoming/:name/:id",
          element: <LabTestDetailsUpcoming />,
        },

        {
          path: "/lab-visited",
          element: <LabTestDetailsVisited />,
        },

        {
          path: "/lab-pending",
          element: <LabTestDetailsPending />,
        },

        {
          path: "/lab-complete",
          element: <LabTestDetailsCompleted />,
        },

        {
          path: "/lab-cancel",
          element: <LabTestDetailsCancel />,
        },

        {
          path: "/near-by-doctor",
          element: <SelectNearByDoctor />,
        },

        {
          path: "/book-appointment",
          element: <BookAppointment />,
        },

        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },

        {
          path: "/otp",
          element: <Otp />,
        },

        {
          path: "/set-password",
          element: <SetPassword />,
        },

        {
          path: "/create-account",
          element: <CreateAccount />,
        },

        {
          path: "/kyc",
          element: <KycVerfication />,
        },
        {
          path: "/personal-info",
          element: <PersonalInfo />,
        },

        {
          path: "/medical-history",
          element: <MedicalHistory />,
        },

        {
          path: "/family-medical-history",
          element: <FamilyMedicalHistory />,
        },

        {
          path: "/select-account-type",
          element: <SelectAccountType />,
        },

        {
          path: "/prescriptions-reports",
          element: <PrescriptionsReports />,
        },

        {
          path: "/doctor-pending",
          element: <DoctorPending />,
        },

        //  {
        //   path: "/header-second",
        //   element: <HeaderSecond />,
        // },

        {
          path: "/ambulance-booking-histroy",
          element: <AmbulanceBookingHistory />,
        },

        {
          path: "/ambulance-ongoing",
          element: <AmbulanceOngoing />,
        },

        {
          path: "/ambulance-drop-success",
          element: <AmbulanceDropSuccess />,
        },

        {
          path: "/ambulance-cancel",
          element: <AmbulanceCancel />,
        },

        {
          path: "/ambulance-book-map",
          element: <BookAmbulanceMap />,
        },

        {
          path: "/ambulance-pickup",
          element: <AmbulancePickup />,
        },

        {
          path: "/ambulance-driver-info",
          element: <AmbulanceDriverInfo />,
        },

        {
          path: "/ambulance-finding",
          element: <AmbulanceFinding />,
        },

        {
          path: "/ambulance-patient-pickup",
          element: <AmbulancePatientPickup />,
        },

        {
          path: "/ambulance-patient-drop",
          element: <AmbulancePatientDrop />,
        },

        {
          path: "/ambulance-booking-cancel",
          element: <AmbulanceBookingCancel />,
        },


        {
          path: "/vaccination-certificate",
          element: <VaccinationCertificate />,
        },



        {
          path: "/vaccine-select-sim",
          element: <VaccinationSelectSim />,
        },

        {
          path: "/vaccine-mobile",
          element: <VaccinationMobileNumber />,
        },

        {
          path: "/vaccine-otp",
          element: <VaccinationOtp />,
        },

        {
          path: "/vaccine-certificate-type",
          element: <VaccineCertificateType />,
        },

        {
          path: "/vaccine-certificate",
          element: <VaccineCertificate />,
        },
        // 🔐 Protected routes wrapper
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/my-appointment",
              element: <MyAppointment />,
            },
            {
              path: "/chat",
              element: <Chat />,
            },
            {
              path: "/share-health-card",
              element: <ShareHealthCard />,
            },
            {
              path: "/prescription",
              element: <Prescriptions />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/approve-health-card",
              element: <ApproveHealthCard />,
            },
            {
              path: "/health-card-details",
              element: <HealthCardDetails />,
            },


          ]
        }


      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router