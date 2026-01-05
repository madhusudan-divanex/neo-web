import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBorderAll, faKitMedical, faArrowRightToBracket, faChevronUp, faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorDetail } from "../../Redux/features/doctor";
import base_url from "../../baseUrl";


function DoctorHeaderThird() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleLogout = () => {
        localStorage.clear()
        sessionStorage.clear()
        navigate('/')
    }
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const userId = localStorage.getItem('userId')
    const [message, setMessage] = useState('')
    const { profiles, kyc, medicalLicense, allowEdit, aboutDoctor, educationWork, customId, isRequest } = useSelector(state => state.doctor)
    useEffect(() => {
        dispatch(fetchDoctorDetail())
    }, [dispatch])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light-box nw-header-bx">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <div className="d-flex aling-items-center flex-grow-1">
                            <div className="">
                                <Link to='/' className="header-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> Back to home</Link>
                            </div>

                            <div className="d-flex align-items-center flex-grow-1 justify-content-end  gap-2">
                                <div>
                                    <a href="javascript:void(0)" className="nw-custom-btn nw-bell-btn doctor-bell-icon"> <FontAwesomeIcon icon={faBell} /> </a>
                                </div>

                                <div className="header-user dropdown tp-right-admin-details d-flex align-items-center">
                                    <a
                                        href="#"
                                        className="user-toggle d-flex align-items-center"
                                        id="userMenu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded={open}
                                        onClick={() => setOpen(!open)}
                                    >
                                        <div className="admn-icon me-2">
                                            <img src={profiles?.profileImage ?
                                                `${base_url}/${profiles?.profileImage}` : "/call-pic.jpg"} alt="" />
                                        </div>

                                        <div className="profile-info me-1">
                                            <h4 className="profile-name text-white fw-700">{profiles?.name}</h4>
                                            <p className="profile-id">Doctor</p>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={open ? faChevronUp : faChevronDown}
                                            className="location-active-icon"
                                        />
                                    </a>

                                    <ul
                                        className="dropdown-menu dropdown-menu-end user-dropdown  p-0 rounded-3"
                                        aria-labelledby="userMenu"
                                        onClick={() => setOpen(false)}
                                        onBlur={() => setOpen(false)}
                                    >
                                        <div className="profile-card-box">
                                            <div className="profile-top-section">
                                                <img src={profiles?.profileImage ?
                                                    `${base_url}/${profiles?.profileImage}` : "/call-pic.jpg"} alt="Profile" className="profile-image" />
                                                <div className="profile-info">
                                                    <h4 className="profile-name">{profiles?.name}</h4>
                                                    <p className="profile-id">Doctor</p>
                                                </div>
                                            </div>

                                            <ul className="head-list">
                                                <li className="head-item">
                                                    <Link to="/doctor/request-list" className="head-nav-link">
                                                        <FontAwesomeIcon icon={faBorderAll} /> Dashboard
                                                    </Link>
                                                </li>

                                                <li className="head-item">
                                                    <Link to='/doctor/appointment-list' className="head-nav-link">
                                                        <FontAwesomeIcon icon={faKitMedical} /> My Appointment
                                                    </Link>
                                                </li>

                                                <li className="head-item">
                                                    <button type="button" onClick={handleLogout} className="head-nav-link">
                                                        <FontAwesomeIcon icon={faArrowRightToBracket} /> Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default DoctorHeaderThird