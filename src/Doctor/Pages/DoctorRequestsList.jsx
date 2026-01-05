import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faCalendarPlus, faCheck, faCheckCircle, faClose, faFileAlt, faHouseMedical, faUserGear, } from "@fortawesome/free-solid-svg-icons"
import { TbGridDots } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSecureApiData, updateApiData } from "../../Services/api";
import { formatDateTime } from "../../Services/globalFunction";
import base_url from "../../baseUrl";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";


function DoctorRequestsList() {
    const userId = localStorage.getItem('userId')
    const [cardData, setCardData] = useState({
        pendingApt: 0, completeApt: 0,
        pendingRequest: 0, cancelApt: 0, totalApt: 0, todayApt: 0, approveApt: 0
    })
    const [appointmentRequest, setAppintmentRequest] = useState([])
    const [pendingAppointment, setPendingAppointment] = useState([])
    const [loading, setLoading] = useState(false)
    async function getDashboardData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`doctor/dashboard/${userId}`)
            if (result.success) {
                setCardData(result.cardData)
                setAppintmentRequest(result.appointmentRequest)
                setPendingAppointment(result.pendingAppointment)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userId) {
            getDashboardData()
        }
    }, [userId])

    const appointmentAction = async (id, status) => {
        const data = { doctorId: userId, appointmentId: id, status }
        setLoading(true)
        try {
            const response = await updateApiData(`appointment/doctor-action`, data);
            if (response.success) {
                // setCurrentPage(response.pagination.page)
                // setTotalPage(response.pagination.totalPages)
                getDashboardData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? <Loader />
                : <section className="new-profile-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3  col-sm-12 mb-3">
                                <ProfileSidebar />
                            </div>

                            <div className="col-lg-9 col-sm-12">
                                <div className="profile-right-card">
                                    <div className="all-profile-data-bx">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                                <div className="patient-nw-card">
                                                    <div className="patient-data-content">
                                                        <span className="patient-dashboard-card"> <FontAwesomeIcon icon={faFileAlt} /> </span>
                                                        <h5>{cardData?.pendingApt}</h5>
                                                    </div>
                                                    <p className="pt-2">Pending Request</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                                <div className="patient-nw-card patient-appointment-crd">
                                                    <div className="patient-data-content">
                                                        <span className="patient-dashboard-card"> <FontAwesomeIcon icon={faHouseMedical} /> </span>
                                                        <h5>{cardData?.todayApt}</h5>
                                                    </div>
                                                    <p className="pt-2">Today Appointment</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                                <div className="patient-nw-card patient-pending-crd">
                                                    <div className="patient-data-content">
                                                        <span className="patient-dashboard-card"> <FontAwesomeIcon icon={faCalendarPlus} /> </span>
                                                        <h5>{cardData?.approveApt}</h5>
                                                    </div>
                                                    <p className="pt-2">Pending Appointment</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                                <div className="patient-nw-card patient-total-crd">
                                                    <div className="patient-data-content">
                                                        <span className="patient-dashboard-card"> <FontAwesomeIcon icon={faUserGear} /> </span>
                                                        <h5>{cardData?.totalApt}</h5>
                                                    </div>
                                                    <p className="pt-2">Total Appointment</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                                <div className="patient-nw-card patient-completed-crd">
                                                    <div className="patient-data-content">
                                                        <span className="patient-dashboard-card"> <FontAwesomeIcon icon={faCheckCircle} /> </span>
                                                        <h5>{cardData?.completeApt}</h5>
                                                    </div>
                                                    <p className="pt-2">Completed Appointment</p>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
                                                <div className="patient-nw-card patient-cancel-crd">
                                                    <div className="patient-data-content">
                                                        <span className="patient-dashboard-card"> <FontAwesomeIcon icon={faCheckCircle} /> </span>
                                                        <h5>{cardData?.cancelApt}</h5>
                                                    </div>
                                                    <p className="pt-2">Cancel Appointment</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h5 className="fz-20 fw-700 text-black mb-0">Appointment Requests</h5>
                                                </div>
                                                <div>
                                                    {appointmentRequest?.length > 10 && <Link to='/doctor/requests' className="nw-thm-btn outline "> View All </Link>}
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="table-section">
                                                    <div className="table table-responsive mb-0">
                                                        <table className="table mb-0 nw-mega-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Appointment  Id</th>
                                                                    <th>Patient Details</th>
                                                                    <th>Appointment  Date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {appointmentRequest?.length > 0 ?
                                                                    appointmentRequest?.map((item, key) =>
                                                                        <tr key={key}>
                                                                            <td>{key + 1}.</td>
                                                                            <td> #{item?.customId}</td>
                                                                            <td>
                                                                                <div className="admin-table-bx">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                                        <img src={item?.patientId?.patientId?.profileImage ?
                                                                                            `${base_url}/${item?.patientId?.patientId?.profileImage}` : "/patient-pic.png"} alt="" />
                                                                                        <div>
                                                                                            <h6 className="">{item?.patientId?.name}</h6>
                                                                                            <p>{item?.patientId?.unique_id}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>{formatDateTime(item?.date)}</td>
                                                                            <td>
                                                                                <div className="d-flex align-items-center gap-2">
                                                                                    <button onClick={() => appointmentAction(item?._id, 'approved')} className="accept-title fw-700 fz-14 pe-2" style={{ borderRight: "1px solid #4D667E33" }}> <FontAwesomeIcon icon={faCheck} /> Accept</button>
                                                                                    <button onClick={() => appointmentAction(item?._id, 'reject')} className="otp-timing fw-700 fz-14"> <FontAwesomeIcon icon={faClose} /> Reject</button>
                                                                                </div>

                                                                            </td>
                                                                        </tr>) : (
                                                                        <tr>
                                                                            <td colSpan="5" className="text-center py-4 fw-600">
                                                                                No appointment request
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                            </tbody>
                                                        </table>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div>
                                                    <h5 className="fz-20 fw-700 text-black mb-0">Pending Appointment</h5>
                                                </div>
                                                <div>
                                                    {pendingAppointment?.length > 10 && <Link to='/doctor/appointment-list' className="nw-thm-btn outline "> View All </Link>}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="table-section">
                                                    <div className="table table-responsive mb-0">
                                                        <table className="table mb-0 nw-mega-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Appointment  Id</th>
                                                                    <th>Patient Details</th>
                                                                    <th>Appointment  Date</th>
                                                                    <th>Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {pendingAppointment?.length > 0 ?
                                                                    pendingAppointment?.map((item, key) =>
                                                                        <tr key={key}>
                                                                            <td>{key + 1}.</td>

                                                                            <td> #{item?.customId}</td>

                                                                            <td>
                                                                                <div className="admin-table-bx">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                                        <img src={item?.patientId?.patientId?.profileImage ?
                                                                                            `${base_url}/${item?.patientId?.patientId?.profileImage}` : "/patient-pic.png"} alt="" />
                                                                                        <div>
                                                                                            <h6 className="">{item?.patientId?.name}</h6>
                                                                                            <p>{item?.patientId?.unique_id}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>

                                                                            <td>{formatDateTime(item?.date)}</td>
                                                                            <td>

                                                                                <span className="pending-data text-capitalize">{item?.status} </span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="d-flex align-items-centet gap-2">
                                                                                    <div className="dropdown">
                                                                                        <a
                                                                                            href="javascript:void(0)"
                                                                                            className="grid-dots-btn"
                                                                                            id="acticonMenu1"
                                                                                            data-bs-toggle="dropdown"
                                                                                            aria-expanded="false"
                                                                                        >
                                                                                            <TbGridDots />
                                                                                        </a>
                                                                                        <ul
                                                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                                            aria-labelledby="acticonMenu1"
                                                                                        >
                                                                                            <li className="prescription-item">
                                                                                                <NavLink to="#" className="prescription-nav" href="#" >
                                                                                                    View Details
                                                                                                </NavLink>
                                                                                            </li>
                                                                                            <li className="prescription-item">
                                                                                                <NavLink to="/prescription-bar" className="prescription-nav" href="#" >
                                                                                                    Chat Now
                                                                                                </NavLink>
                                                                                            </li>
                                                                                            <li className="prescription-item">
                                                                                                <NavLink to="/prescription-bar" className="prescription-nav" href="#" >
                                                                                                    Video Call
                                                                                                </NavLink>
                                                                                            </li>
                                                                                            <li className="prescription-item">
                                                                                                <button onClick={() => appointmentAction(item?._id, 'completed')} className="prescription-nav " href="#" >
                                                                                                    <span className="accept-title "><FontAwesomeIcon icon={faCheck} />  Mark as in Complete</span>
                                                                                                </button>
                                                                                            </li>

                                                                                            <li className="prescription-item">
                                                                                                <a className=" prescription-nav" href="#">

                                                                                                    <span className="danger-title">Cancel appointment</span>
                                                                                                </a>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>

                                                                                </div>
                                                                            </td>
                                                                        </tr>) : (
                                                                        <tr>
                                                                            <td colSpan="6" className="text-center py-4 fw-600">
                                                                                No pending appointment
                                                                            </td>
                                                                        </tr>
                                                                    )}

                                                            </tbody>
                                                        </table>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section >}
        </>
    )
}

export default DoctorRequestsList