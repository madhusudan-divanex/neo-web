import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck, faTimes, faSearch, faBell, faBorderAll, faKitMedical, faArrowRightToBracket, faChevronUp, faChevronDown, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import base_url from "../../baseUrl";
import { fetchPatientDetail } from "../../Redux/features/patient";

function HeaderSecond() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("Jaipur, India");

    const locations = ["Jaipur, India", "Delhi, India", "Mumbai, India"];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const [open, setOpen] = useState(false);

    const dispatch=useDispatch()
    const { profiles, medicalHistory, demographic, labAppointment, kyc, prescription, isRequest,customId,role } = useSelector(state => state.patient)
    useEffect(()=>{
        dispatch(fetchPatientDetail())
    },[dispatch])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light-box">
                <div className="container">
                    <NavLink className="navbar-brand me-0" to="/">
                        <img src="/logo.png" alt="Logo" className="logo-img" />
                    </NavLink>


                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon" />
                    </button>


                    <div
                        className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
                        id="navbarSupportedContent"
                    >

                        <div className="mobile-close-btn d-lg-none">
                            <FontAwesomeIcon icon={faTimes} onClick={closeMenu} />
                        </div>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2 gap-sm-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" onClick={closeMenu}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={closeMenu}>
                                    Doctors
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={closeMenu}>
                                    Hospitals
                                </a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/find-labs" onClick={closeMenu}>
                                    Labs
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={closeMenu}>
                                    Book ambulance
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={closeMenu}>
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={closeMenu}>
                                    Contact
                                </a>
                            </li>
                        </ul>


                        <div className="d-flex align-items-center flex-wrap gap-2">
                            <div className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle nw-address-btn"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <FontAwesomeIcon icon={faLocationDot} /> {selectedLocation}
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end mt-2 nw-location-bx">
                                    {locations.map((loc, index) => (
                                        <li
                                            key={index}
                                            className="prescription-item"
                                            onClick={() => setSelectedLocation(loc)}
                                        >
                                            <div className="prescription-nav d-flex justify-content-between align-items-center">
                                                {loc}
                                                {selectedLocation === loc && (
                                                    <FontAwesomeIcon icon={faCheck} />
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="d-flex align-items-centet gap-2">
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="nw-custom-btn"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <FontAwesomeIcon icon={faSearch} />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end nw-search-dropdown"
                                                aria-labelledby="acticonMenu1"
                                            >
                                                <div className="custom-frm-bx">
                                                    <input
                                                        type="email"
                                                        className="form-control admin-table-search-frm  pe-5"
                                                        id="email"
                                                        placeholder="Search Location"
                                                        required
                                                    />
                                                    <div className="adm-search-bx">
                                                        <button className="tp-search-btn text-secondary">
                                                            <FontAwesomeIcon icon={faSearch} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="location-box">
                                                    <div className="current-location-bx">
                                                        <span> <FontAwesomeIcon icon={faLocationCrosshairs} /> </span>
                                                        <div>
                                                            <h4>Get current location </h4>
                                                            <p>Using GPS</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </ul>
                                        </div>

                                    </div>




                                </div>
                            </div>

                            <div>
                                <a href="javascript:void(0)" className="nw-custom-btn nw-bell-btn"> <FontAwesomeIcon icon={faBell} /> </a>
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
                                        <img src={profiles?.profileImage?
                                            `${base_url}/${profiles?.profileImage}`:"/call-pic.jpg"} alt="" />
                                    </div>

                                    <div className="profile-info me-1">
                                        <h4 className="profile-name text-ellipse">{profiles?.name}</h4>
                                        <p className="profile-id text-capitalize">{role}</p>
                                    </div>
                                    <FontAwesomeIcon
                                        icon={open ? faChevronUp : faChevronDown}
                                        className="location-active-icon"
                                    />
                                </a>

                                <ul
                                    className="dropdown-menu dropdown-menu-end user-dropdown sallr-drop-box p-0 rounded-3"
                                    aria-labelledby="userMenu"
                                    onClick={() => setOpen(false)}
                                    onBlur={() => setOpen(false)}
                                >
                                    <div className="profile-card-box">
                                        <div className="profile-top-section">
                                            <img src={profiles?.profileImage?
                                            `${base_url}/${profiles?.profileImage}`:"/call-pic.jpg"} alt="Profile" className="profile-image" />
                                            <div className="profile-info">
                                                <h4 className="profile-name">{profiles?.name}</h4>
                                                <p className="profile-id text-capitalize">{role}</p>
                                            </div>
                                        </div>

                                        <ul className="head-list">
                                            <li className="head-item">
                                                <a href="javascript:void(0)" className="head-nav-link">
                                                    <FontAwesomeIcon icon={faBorderAll} /> Dashboard
                                                </a>
                                            </li>

                                            <li className="head-item">
                                                <Link to='/my-appointment' className="head-nav-link">
                                                    <FontAwesomeIcon icon={faKitMedical} /> My Appointment
                                                </Link>
                                            </li>

                                            <li className="head-item">
                                                <Link to='/' onClick={()=>{
                                                    localStorage.clear() 
                                                    sessionStorage.clear()
                                                }} className="head-nav-link">
                                                    <FontAwesomeIcon icon={faArrowRightToBracket} /> Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
        </>
    )
}

export default HeaderSecond