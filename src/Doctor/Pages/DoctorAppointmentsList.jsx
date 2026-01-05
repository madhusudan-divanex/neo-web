import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faCheck, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { getSecureApiData, updateApiData } from "../../Services/api";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../Services/globalFunction";
import base_url from "../../baseUrl";
import Loader from "../../Loader/Loader";
import { toast } from "react-toastify";

function DoctorAppointmentsList() {
    const userId = localStorage.getItem('userId')
    const [appointmentRequest, setAppintmentRequest] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState([])
    async function getAppointmentData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`appointment/doctor/${userId}?page=${currentPage}&search=${search}&startDate=${startDate}&endDate=${endDate}&statuses=${status}`)
            if (result.success) {
                setAppintmentRequest(result.data)
                setCurrentPage(result.pagination.curretPage)
                setTotalPages(result.pagination.totalPages)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userId) {
            getAppointmentData()
        }
    }, [userId, currentPage])
    const handleStatusChange = (value) => {
        setStatus((prev) =>
            prev.includes(value)
                ? prev.filter((s) => s !== value)
                : [...prev, value]
        );
    };
    const handleReset = () => {
        setStatus['']
        setStartDate(null)
        setEndDate(null)
        getAppointmentData()
    }
    const appointmentAction = async (id, status) => {
        const data = { doctorId: userId, appointmentId: id, status }
        setLoading(true)
        try {
            const response = await updateApiData(`appointment/doctor-action`, data);
            if (response.success) {
                getAppointmentData()
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
                                    <div className="profile-tp-header">
                                        <h5 className="heading-grad fz-24 mb-0">Appointments</h5>
                                    </div>
                                    <div className="all-profile-data-bx">
                                        <div className="row">
                                            <div className="d-flex align-items-center justify-content-between mb-3 gap-2">
                                                <div>
                                                    <div className="d-flex align-items-center gap-2 nw-box">
                                                        <div className="custom-frm-bx mb-0">
                                                            <input
                                                                type="email"
                                                                className="form-control admin-table-search-frm  pe-5"
                                                                id="email"
                                                                placeholder="Search"
                                                                required
                                                            />
                                                            <div className="adm-search-bx">
                                                                <button className="tp-search-btn text-secondary">
                                                                    <FontAwesomeIcon icon={faSearch} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a href="#" className="nw-filtr-btn" id="acticonMenus" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                <FontAwesomeIcon icon={faFilter} />
                                                            </a>

                                                            <div className="dropdown-menu dropdown-menu-end user-dropdown nw-drop-action-menu"
                                                                aria-labelledby="acticonMenus">

                                                                <div
                                                                    className="d-flex align-items-center justify-content-between drop-heading-bx px-3 pt-2 pb-2 border-bottom">
                                                                    <h6 className="mb-0 fz-18">Filter</h6>
                                                                    <button onClick={handleReset} className="fz-16 clear-btn">Reset</button>
                                                                </div>

                                                                <div className="p-3">
                                                                    <ul className="permision-check-list filtring-list">
                                                                        <h6>Status</h6>

                                                                        {["pending", "completed", "canceled"].map((item) => (
                                                                            <li key={item}>
                                                                                <div className="accordion-body-concet">
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="checkbox"
                                                                                        id={item}
                                                                                        checked={status.includes(item)}
                                                                                        onChange={() => handleStatusChange(item)}
                                                                                    />
                                                                                    <label htmlFor={item}>
                                                                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                                                                    </label>
                                                                                </div>
                                                                            </li>
                                                                        ))}
                                                                    </ul>

                                                                    <div className="mt-3 filtring-list">
                                                                        <div className="row">
                                                                            <h6>Date Range</h6>

                                                                            <div className="col-lg-6">
                                                                                <div className="custom-frm-bx">
                                                                                    <input
                                                                                        type="date"
                                                                                        className="form-control admin-table-search-frm"
                                                                                        value={startDate || ""}
                                                                                        onChange={(e) => setStartDate(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-6">
                                                                                <div className="custom-frm-bx">
                                                                                    <input
                                                                                        type="date"
                                                                                        className="form-control admin-table-search-frm"
                                                                                        value={endDate || ""}
                                                                                        onChange={(e) => setEndDate(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-center justify-content-between drop-heading-bx px-3 pt-2 pb-2 border-top">
                                                                    <button className="thm-btn thm-outline-btn rounded-4 px-4 py-2 outline"> Cancel</button>
                                                                    <button onClick={() => getAppointmentData()} className="thm-btn rounded-4 px-4 py-2"> Apply</button>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                {totalPages > 1 && <div className="page-selector">
                                                    <div className="filters">
                                                        <select className="form-select custom-page-dropdown nw-custom-page "
                                                            value={currentPage}
                                                            onChange={(e) => setCurrentPage(e.target.value)}>
                                                            {Array.from({ length: totalPages }, (_, i) => (
                                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>

                                        <div className="row ">
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

                                                                                {item?.status == "pending" && <span className="pending-data">Pending </span>}
                                                                                {item?.status == "cancel" && 
                                                                                    <span className="danger-title">Cancel appointment</span>
                                                                                }
                                                                                {item?.status == "rejected" && 
                                                                                    <span className="danger-title">Rejected appointment</span>
                                                                                }
                                                                                {item?.status == 'completed' && <span className="complete-data">Completed </span>}
                                                                            </td>
                                                                            {/* <td>
                                                                        <a href="javascript:void(0)" className="grid-dots-btn"><TbGridDots /></a>
                                                                </td> */}

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
                                                                                                <button className="prescription-nav " onClick={()=>appointmentAction(item?._id,'completed')} >
                                                                                                    <span className="accept-title "><FontAwesomeIcon icon={faCheck} />  Mark as in Complete</span>
                                                                                                </button>
                                                                                            </li>

                                                                                            <li className="prescription-item">
                                                                                                <button className=" prescription-nav" onClick={()=>appointmentAction(item?._id,'rejected')} >

                                                                                                    <span className="danger-title">Cancel appointment</span>
                                                                                                </button>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>

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
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>}
        </>
    )
}

export default DoctorAppointmentsList