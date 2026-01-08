import { faArrowRightFromBracket, faCircleXmark, faCreditCard, faFile, faHistory, faKey, faMessage, faPen, faTachometerAlt, faUserAltSlash, faUserCircle, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BiScan } from "react-icons/bi";
import "../Css/style.css"
import DoctorScanner from "./DoctorScanner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDoctorDetail } from "../../Redux/features/doctor";
import { securePostData } from "../../Services/api";
import { toast } from "react-toastify";
import base_url, { client_url } from "../../baseUrl";

function ProfileSidebar() {
  const navigate=useNavigate()
  const [scannerOpen, setScannerOpen] = useState(false)
  const handleDetected = (code) => {
    navigate(`${client_url}doctor/patient-details/${code}`)
  };
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const userId = localStorage.getItem('userId')
  const [message, setMessage] = useState('')
  const { profiles, kyc, medicalLicense, allowEdit, aboutDoctor, educationWork, customId, isRequestallowEdit } = useSelector(state => state.doctor)
  useEffect(() => {
    dispatch(fetchDoctorDetail())
  }, [dispatch])
  const closeScanner = () => setScannerOpen(false);
  const handleSubmit=async(e)=>{
    const data=new FormData()
    data.append('userId',userId)
    data.append('profileImage',e.target.files[0])
    try {
      const result=await securePostData('doctor/update-image',data)
      if(result.success){
        toast.success("Profile photo updated")
        dispatch(fetchDoctorDetail())
      }
    } catch (error) {
      
    }
  }
  return (
    <>
      <div className="doctor-profile-card position-relative">
        <div className="user-background">
          <div className="user-parent-bx">
            {/* <img src="/profile-bg.png" alt="" /> */}
          </div>


        </div>

        <div className="patient-left-mega-bx">
          {/* <div>
                    <div className="main-user-profile-card">
                        <div className="main-user-picture">
                            <img src="/call-pic.jpg" alt="" />
                        </div>
                        <div className="user-detail-bx">
                            <h5>Dr. David Patel </h5>
                            <p>ID: DO-4001</p>
                        </div>
                    </div>
                </div> */}

          <div>
            <div className="main-user-profile-card">
              <div className="main-user-picture position-relative">

                <img src={profiles?.profileImage?
                `${base_url}/${profiles?.profileImage}`:"/call-pic.jpg"} alt="" />
                <input
                  type="file"
                  onChange={handleSubmit}
                  id="profileImageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                />

                <label htmlFor="profileImageInput" className="profile-edit-icon">
                  <FontAwesomeIcon icon={faPen} />
                </label>

              </div>

              <div className="user-detail-bxs">
                <h5>Dr. {profiles?.name}</h5>
                <p>ID: {customId}</p>
              </div>
            </div>
          </div>



          <div className="new-item-lists">
            <ul className="nw-profile-list">
              <li className="nw-profile-item"><Link to='/doctor/request-list' className="nw-nav-links"> <FontAwesomeIcon icon={faTachometerAlt} className="nw-nav-icon" /> Dashboard </Link></li>

              <li className="nw-profile-item"><Link to='/doctor/profile-approval-request' className="nw-nav-links"> <FontAwesomeIcon icon={faUserAltSlash} className="nw-nav-icon" />Patient  Profile Approval request</Link></li>

              <li className="nw-profile-item"><Link to='/doctor/requests' className="nw-nav-links"> <FontAwesomeIcon icon={faFile} className="nw-nav-icon" />Appointment Requests</Link></li>

              <li className="nw-profile-item"><Link to='/doctor/appointment-list' className="nw-nav-links"> <FontAwesomeIcon icon={faUserEdit} className="nw-nav-icon" />Appointment</Link></li>

              <li className="nw-profile-item"><Link to='/doctor/add-appointment' className="nw-nav-links"> <FontAwesomeIcon icon={faCreditCard} className="nw-nav-icon" />My Add Appointment</Link></li>

              <li className="nw-profile-item"><Link to='/doctor/patient-history' className="nw-nav-links"> <FontAwesomeIcon icon={faHistory} className="nw-nav-icon" /> Patient history</Link></li>

              <li className="nw-profile-item"><a onClick={() => setScannerOpen(true)} href="javascript:void(0)" className="nw-nav-links" > <BiScan className="nw-nav-icon" />  Scan</a></li>

              <li className="nw-profile-item"><Link to={'/doctor/profile-edit-request'} className="nw-nav-links"> <FontAwesomeIcon icon={faUserCircle} className="nw-nav-icon" />Profile</Link></li>

              <li className="nw-profile-item"><Link to='/doctor/chat' className="nw-nav-links"> <FontAwesomeIcon icon={faMessage} className="nw-nav-icon" /> Chat</Link></li>

              <li className="nw-profile-item"><Link to='/doctor/change-password' className="nw-nav-links"> <FontAwesomeIcon icon={faKey} className="nw-nav-icon" />Change Password</Link></li>

              <li className="nw-profile-item"><a href="javascript:void(0)" className="nw-nav-links" data-bs-toggle="modal" data-bs-target="#logout"> <FontAwesomeIcon icon={faArrowRightFromBracket} className="nw-nav-icon" />Logout</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/*Logout Popup Start  */}
      {/* data-bs-toggle="modal" data-bs-target="#logout" */}
      <div className="modal step-modal" id="logout" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content rounded-0 ">
            <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
              <div>
                <h6 className="heading-grad mb-0 fz-24">Logout</h6>
              </div>
              <div>
                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "rgba(239, 0, 0, 1)" }}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            </div>
            <div className="modal-body pb-5 px-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="logout-bx text-center" >
                    <img src="/logout.svg" alt="" />
                    <h5 className="py-2">Logout</h5>
                    <p className="py-2">Are you sure you want to log out?</p>

                    <div className="d-flex align-items-center gap-3 justify-content-center mt-3">
                      <button className="nw-thm-btn outline px-5" data-bs-dismiss="modal" aria-label="Close">No</button>
                      <button className="thm-btn px-3" data-bs-dismiss="modal" aria-label="Close">Yes, Logout</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Logout Popup End */}


      {/*Payment Status Popup Start  */}
      {/* data-bs-toggle="modal" data-bs-target="#scanner-Request" */}
      {scannerOpen &&
       <div className="modal fade show step-modal"
          id="scanner-Request"
          style={{ display: "block", background: "#00000080" }}
          data-bs-backdrop="static"
          data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content rounded-5 p-4">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h6 className="mb-0">Scan </h6>
              </div>
              <div>
                <button type="button" className="fz-18" onClick={closeScanner} style={{ color: "#00000040" }}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            </div>
            <div className="modal-body p-0">
              <div className="row ">
                <div className="col-lg-12">
                  {/* <Scanner onDetected={handleDetected}/> */}
                  <DoctorScanner open={scannerOpen} onDetected={handleDetected} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {/*  Payment Status Popup End */}

    </>
  )
}

export default ProfileSidebar