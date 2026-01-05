import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faCheck, faChevronDown, faCircleXmark, faDownload, faDroplet, faEye, faFilePdf, faLocationDot, faMarsAndVenus, faMessage, faPerson, faPhone, faPrint, faRulerVertical, faStar, faVideo, faWeightScale } from "@fortawesome/free-solid-svg-icons"
import { BsPlusCircleFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { BsCapsule } from "react-icons/bs";
import "../Css/style.css"
import "../Css/responsive.css"

function DoctorDetailsView() {
    return (
        <>
            <section className="new-profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 mb-3">
                            <ProfileSidebar />
                        </div>

                        <div className="col-lg-9 col-sm-12">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0">Details</h5>
                                </div>

                                <div className="">
                                    <div className="employee-tabs">
                                        <ul className="nav nav-tabs gap-3 mt-3 px-3" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link active"
                                                    id="home-tab"
                                                    data-bs-toggle="tab"
                                                    href="#home"
                                                    role="tab"
                                                >
                                                    Resent Appointments Overview
                                                </a>
                                            </li>

                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="profile-tab"
                                                    data-bs-toggle="tab"
                                                    href="#profile"
                                                    role="tab"
                                                >
                                                    Past Appointments
                                                </a>
                                            </li>

                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="contact-tab"
                                                    data-bs-toggle="tab"
                                                    href="#contact"
                                                    role="tab"
                                                >
                                                    Personal Details
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="upload-tab"
                                                    data-bs-toggle="tab"
                                                    href="#upload"
                                                    role="tab"
                                                >
                                                    Prescriptions
                                                </a>
                                            </li>

                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="report-tab"
                                                    data-bs-toggle="tab"
                                                    href="#report"
                                                    role="tab"
                                                >
                                                    Lab Reports
                                                </a>
                                            </li>

                                        </ul>

                                        <div className="">
                                            <div className="employee-tabs">
                                                <div className="tab-content" id="myTabContent">
                                                    <div className="tab-pane fade show active" id="home" role="tabpanel">
                                                        <div className="all-profile-data-bx">
                                                            <div className="new-panel-card mb-3">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="mb-3">
                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Patient Information</h4>
                                                                        </div>

                                                                        <div className="main-patient-info-bx ">
                                                                            <div className="patient-info-bx flex-grow-1">
                                                                                <div className="patient-picture-bx">
                                                                                    <img src="/patient-pic.png" alt="" />
                                                                                    <div className="patient-nw-content">
                                                                                        <h6>Annette Black</h6>
                                                                                        <p>PA-9001</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="patient-general-details-bx flex-grow-1">
                                                                                <div className="general-info-content">
                                                                                    <h5>Gender</h5>
                                                                                    <p>Male</p>
                                                                                </div>
                                                                                <div className="general-info-content">
                                                                                    <h5>Age</h5>
                                                                                    <p>20 Years</p>
                                                                                </div>
                                                                                <div className="general-info-content">
                                                                                    <h5>Blood Group</h5>
                                                                                    <p>B+</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-grow-1">
                                                                                <ul className="doctor-social-list">
                                                                                    <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faMessage} /> </a></li>
                                                                                    <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faPhone} /> </a></li>
                                                                                    <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faVideo} /> </a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="new-panel-card">
                                                                <div className="row">
                                                                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                                                        <div>
                                                                            <h5 className="new_title mb-0">Appointments Details</h5>
                                                                            <p className="fz-14 fw-500">ID #2988924</p>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                            <button className="progress-btn"> <FontAwesomeIcon icon={faCheck} /> Mark as in Complete</button>
                                                                            <button className="thm-btn"> <BsPlusCircleFill /> Add  Lab Test </button>
                                                                            <button className="thm-btn"> <BsPlusCircleFill /> Add Prescriptions</button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                                        <div className="bordr-bx">
                                                                            <div className="mb-3">
                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-6 mb-3">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Created Date</h5>
                                                                                        <p>28 June 2025 </p>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 mb-3">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Appointment Date</h5>
                                                                                        <p>30 June 2025 10:00pm</p>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 mb-3">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Status</h5>
                                                                                        <p ><span className="pending-data">Pending</span> </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                                        <div className="mb-3">
                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-12 mb-3">
                                                                                <div className="general-info-content">
                                                                                    <h5>Fees</h5>
                                                                                    <p>$25 </p>
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-lg-6 mb-3">
                                                                                <div className="general-info-content">
                                                                                    <h5>Payment Status</h5>
                                                                                    <p ><span className="pending-data">Pending</span> </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="tab-pane fade" id="profile" role="tabpanel">
                                                        <div className="all-profile-data-bx">

                                                            {/* <div className="new-panel-card mb-3">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="mb-3">
                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Patient Information</h4>
                                                                        </div>

                                                                        <div className="main-patient-info-bx ">
                                                                            <div className="patient-info-bx flex-grow-1">
                                                                                <div className="patient-picture-bx">
                                                                                    <img src="/patient-pic.png" alt="" />
                                                                                    <div className="patient-nw-content">
                                                                                        <h6>Annette Black</h6>
                                                                                        <p>PA-9001</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="patient-general-details-bx flex-grow-1">
                                                                                <div className="general-info-content">
                                                                                    <h5>Gender</h5>
                                                                                    <p>Male</p>
                                                                                </div>
                                                                                <div className="general-info-content">
                                                                                    <h5>Age</h5>
                                                                                    <p>20 Years</p>
                                                                                </div>
                                                                                <div className="general-info-content">
                                                                                    <h5>Blood Group</h5>
                                                                                    <p>B+</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex-grow-1">
                                                                                <ul className="doctor-social-list">
                                                                                    <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faMessage} /> </a></li>
                                                                                    <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faPhone} /> </a></li>
                                                                                    <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faVideo} /> </a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="new-panel-card">
                                                                <div className="row">
                                                                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                                                        <div>
                                                                            <h5 className="new_title mb-0">Appointments Details</h5>
                                                                            <p className="fz-14 fw-500">ID #2988924</p>
                                                                        </div>
                                                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                            <button className="progress-btn"> <FontAwesomeIcon icon={faCheck} /> Mark as in Complete</button>
                                                                            <button className="thm-btn"> <BsPlusCircleFill /> Add  Lab Test </button>
                                                                            <button className="thm-btn"> <BsPlusCircleFill /> Add Prescriptions</button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                        <div className="bordr-bx">
                                                                            <div className="mb-3">
                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-6 mb-2">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Created Date</h5>
                                                                                        <p>28 June 2025 </p>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 mb-2">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Appointment Date</h5>
                                                                                        <p>30 June 2025 10:00pm</p>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 mb-2">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Status</h5>
                                                                                        <p ><span className="pending-data">Pending</span> </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                        <div className="pe-lg-3 pe-sm-0 bordr-bx">
                                                                            <div className="mb-3">
                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Prescriptions</h4>
                                                                            </div>
                                                                            <div className="prescriptin-bx">
                                                                                <div className="prescriptin-content">
                                                                                    <div className="prescriptin-picture">
                                                                                        <img src="/prescriptin-pic.png" alt="" />
                                                                                        <div>
                                                                                            <p>Prescription Date</p>
                                                                                            <h6>8/21/2025</h6>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                        <div className="switch">
                                                                                            <input type="checkbox" id="toggle7" />
                                                                                            <label for="toggle7"></label>
                                                                                        </div>
                                                                                        <div>
                                                                                            
                                                                                            <div>
                                                                                                            
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
                                                                                        Edit
                                                                                    </NavLink>
                                                                                </li>
                                                                                <li className="prescription-item">
                                                                                    <NavLink to="#" className="prescription-nav" href="#" >
                                                                                       View
                                                                                    </NavLink>
                                                                                </li>
                                                                                <li className="prescription-item">
                                                                                    <NavLink to="#" className="prescription-nav" href="#" >
                                                                                        Delete
                                                                                    </NavLink>
                                                                                </li>
                                                                             
                                                                            </ul>
                                                                        </div>
                                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>



                                                                    </div>

                                                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                        <div className="mb-3">
                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-12 mb-2">
                                                                                <div className="general-info-content">
                                                                                    <h5>Fees</h5>
                                                                                    <p>$25 </p>
                                                                                </div>
                                                                            </div>


                                                                            <div className="col-lg-6 mb-2">
                                                                                <div className="general-info-content">
                                                                                    <h5>Payment Status</h5>
                                                                                    <p ><span className="pending-data">Pending</span> </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="">
                                                                            <div className="mb-3">
                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Lab tests prescribed by the doctor</h4>
                                                                            </div>
                                                                            <div className="lab-parent-bx">
                                                                                <div className="nw-presc-lab-bx">
                                                                                    <img src="/lab-pic.png" alt="" />
                                                                                    <div className="appointment-info-details">
                                                                                        <h4 className="">Advance Lab Tech</h4>
                                                                                        <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="prescriptin-bx my-3">
                                                                                <div className="prescriptin-content">
                                                                                    <div className="prescriptin-picture lab-test-bx">
                                                                                        <img src="/lab-tube.svg" alt="" style={{ width: "50px", height: "50px" }} />
                                                                                        <div>
                                                                                            <h6 className="fz-18 fw-700 mb-0">CBC Report</h6>
                                                                                            <p>30 June 2025</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>  */}

                                                            <div class="accordion custom-accordion" id="myAccordion">
                                                                <div class="accordion-item">
                                                                    <h2 class="accordion-header" id="headingOne">
                                                                        <button class="accordion-button custom-acc-btn " type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                            <div>
                                                                                <h5 className="new_title mb-0">Appointments Details</h5>
                                                                                <p className="fz-14 fw-500">ID #2988924</p>
                                                                            </div>
                                                                            <span className="toggle-icon"> <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" /></span>

                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                                        data-bs-parent="#myAccordion">
                                                                        <div class="accordion-body">
                                                                            <div className="row">


                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                    <div className="bordr-bx">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Created Date</h5>
                                                                                                    <p>28 June 2025 </p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Appointment Date</h5>
                                                                                                    <p>30 June 2025 10:00pm</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Status</h5>
                                                                                                    <p ><span className="complete-data">Completed</span> </p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Ratting</h5>
                                                                                                    <p ><span className="" style={{ color: "#FFAA78" }}> <FontAwesomeIcon icon={faStar} /> </span> 5</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>



                                                                                    </div>
                                                                                    <div className="pe-lg-3 pe-sm-0 bordr-bx">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Prescriptions</h4>
                                                                                        </div>
                                                                                        <div className="prescriptin-bx">
                                                                                            <div className="prescriptin-content">
                                                                                                <div className="prescriptin-picture">
                                                                                                    <img src="/prescriptin-pic.png" alt="" />
                                                                                                    <div>
                                                                                                        <p>Prescription Date</p>
                                                                                                        <h6>8/21/2025</h6>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="d-flex align-items-center gap-2">
                                                                                                    <div className="switch">
                                                                                                        <input type="checkbox" id="toggle7" />
                                                                                                        <label for="toggle7"></label>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        {/* <a href="javascript:void(0)" className="grid-dots-btn"><TbGridDots /></a> */}
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
                                                                                                                        Edit
                                                                                                                    </NavLink>
                                                                                                                </li>
                                                                                                                <li className="prescription-item">
                                                                                                                    <NavLink to="#" className="prescription-nav" href="#" >
                                                                                                                        View
                                                                                                                    </NavLink>
                                                                                                                </li>
                                                                                                                <li className="prescription-item">
                                                                                                                    <NavLink to="#" className="prescription-nav" href="#" >
                                                                                                                        Delete
                                                                                                                    </NavLink>
                                                                                                                </li>

                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                    <div className="mb-3">
                                                                                        <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-12 mb-3">
                                                                                            <div className="general-info-content">
                                                                                                <h5>Fees</h5>
                                                                                                <p>$25 </p>
                                                                                            </div>
                                                                                        </div>


                                                                                        <div className="col-lg-6 mb-3">
                                                                                            <div className="general-info-content">
                                                                                                <h5>Payment Status</h5>
                                                                                                <p ><span className="complete-data">Done</span> </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Lab tests prescribed by the doctor</h4>
                                                                                        </div>
                                                                                        <div className="lab-parent-bx">
                                                                                            <div className="nw-presc-lab-bx">
                                                                                                <img src="/lab-pic.png" alt="" />
                                                                                                <div className="appointment-info-details">
                                                                                                    <h4 className="">Advance Lab Tech</h4>
                                                                                                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="prescriptin-bx my-3">
                                                                                            <div className="prescriptin-content">
                                                                                                <div className="prescriptin-picture lab-test-bx">
                                                                                                    <img src="/lab-tube.svg" alt="" style={{ width: "50px", height: "50px" }} />
                                                                                                    <div>
                                                                                                        <h6 className="fz-18 fw-700 mb-0">CBC Report</h6>
                                                                                                        <p>30 June 2025</p>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div>
                                                                                                    <a href="javascript:void(0)" className="thm-btn thm-outline-btn rounded-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download</a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div class="accordion-item">
                                                                    <h2 class="accordion-header" id="headingTwo">
                                                                        <button class="accordion-button custom-acc-btn collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <div>
                                                                                <h5 className="new_title mb-0">Appointments Details</h5>
                                                                                <p className="fz-14 fw-500">ID #2988924</p>
                                                                            </div>
                                                                            <span className="toggle-icon"> <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" /></span>
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                                        data-bs-parent="#myAccordion">
                                                                        <div class="accordion-body">
                                                                            <div className="row">


                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                    <div className="bordr-bx">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Created Date</h5>
                                                                                                    <p>28 June 2025 </p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Appointment Date</h5>
                                                                                                    <p>30 June 2025 10:00pm</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Status</h5>
                                                                                                    <p ><span className="complete-data">Completed</span> </p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Ratting</h5>
                                                                                                    <p ><span className="" style={{ color: "#FFAA78" }}> <FontAwesomeIcon icon={faStar} /> </span> 5</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>



                                                                                    </div>
                                                                                    <div className="pe-lg-3 pe-sm-0 bordr-bx">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Prescriptions</h4>
                                                                                        </div>
                                                                                        <div className="prescriptin-bx">
                                                                                            <div className="prescriptin-content">
                                                                                                <div className="prescriptin-picture">
                                                                                                    <img src="/prescriptin-pic.png" alt="" />
                                                                                                    <div>
                                                                                                        <p>Prescription Date</p>
                                                                                                        <h6>8/21/2025</h6>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="d-flex align-items-center gap-2">
                                                                                                    <div className="switch">
                                                                                                        <input type="checkbox" id="toggle7" />
                                                                                                        <label for="toggle7"></label>
                                                                                                    </div>
                                                                                                    <div>
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
                                                                                                                        Edit
                                                                                                                    </NavLink>
                                                                                                                </li>
                                                                                                                <li className="prescription-item">
                                                                                                                    <NavLink to="#" className="prescription-nav" href="#" >
                                                                                                                        View
                                                                                                                    </NavLink>
                                                                                                                </li>
                                                                                                                <li className="prescription-item">
                                                                                                                    <NavLink to="#" className="prescription-nav" href="#" >
                                                                                                                        Delete
                                                                                                                    </NavLink>
                                                                                                                </li>

                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                    <div className="mb-3">
                                                                                        <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-12 mb-3">
                                                                                            <div className="general-info-content">
                                                                                                <h5>Fees</h5>
                                                                                                <p>$25 </p>
                                                                                            </div>
                                                                                        </div>


                                                                                        <div className="col-lg-6 mb-3">
                                                                                            <div className="general-info-content">
                                                                                                <h5>Payment Status</h5>
                                                                                                <p ><span className="complete-data">Done</span> </p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Lab tests prescribed by the doctor</h4>
                                                                                        </div>
                                                                                        <div className="lab-parent-bx">
                                                                                            <div className="nw-presc-lab-bx">
                                                                                                <img src="/lab-pic.png" alt="" />
                                                                                                <div className="appointment-info-details">
                                                                                                    <h4 className="">Advance Lab Tech</h4>
                                                                                                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="prescriptin-bx my-3">
                                                                                            <div className="prescriptin-content">
                                                                                                <div className="prescriptin-picture lab-test-bx">
                                                                                                    <img src="/lab-tube.svg" alt="" style={{ width: "50px", height: "50px" }} />
                                                                                                    <div>
                                                                                                        <h6 className="fz-18 fw-700 mb-0">CBC Report</h6>
                                                                                                        <p>30 June 2025</p>
                                                                                                    </div>
                                                                                                </div>

                                                                                                <div>
                                                                                                    <a href="javascript:void(0)" className="thm-btn thm-outline-btn rounded-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download</a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div class="accordion-item">
                                                                    <h2 class="accordion-header" id="headingThree">
                                                                        <button class="accordion-button custom-acc-btn collapsed" type="button" data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                            <div>
                                                                                <h5 className="new_title mb-0">Appointments Details</h5>
                                                                                <p className="fz-14 fw-500">ID #2988924</p>
                                                                            </div>
                                                                            <span className="toggle-icon"> <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" /></span>
                                                                        </button>
                                                                    </h2>
                                                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                                                        data-bs-parent="#myAccordion">
                                                                        <div class="accordion-body">
                                                                            <div className="row">


                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                    <div className="bordr-bx">
                                                                                        <div className="mb-3">
                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Created Date</h5>
                                                                                                    <p>28 June 2025 </p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Appointment Date</h5>
                                                                                                    <p>30 June 2025 10:00pm</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Status</h5>
                                                                                                    <p ><span className="cancel-data">Canceled</span> </p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 mb-3">
                                                                                                <div className="general-info-content">
                                                                                                    <h5>Ratting</h5>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                    <div className="mb-3">
                                                                                        <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-12 mb-3">
                                                                                            <div className="general-info-content">
                                                                                                <h5>Fees</h5>
                                                                                                <p>$25 </p>
                                                                                            </div>
                                                                                        </div>


                                                                                        <div className="col-lg-6 mb-3">
                                                                                            <div className="general-info-content">
                                                                                                <h5>Payment Status</h5>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>


                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>


                                                    </div>

                                                    <div className="tab-pane fade" id="contact" role="tabpanel">
                                                        <div className="all-profile-data-bx">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div>
                                                                        <div className=" patient-details-bx mb-3">
                                                                            <div className="admin-table-sub-bx patient-avartr-bx gap-3">
                                                                                <img src="/table-avatar.jpg" alt="" />
                                                                                <div className=" patient-bio-content">
                                                                                    <h6>Sunil Kumar Sharma</h6>
                                                                                    <p>ID: SUNIL33209490</p>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                    <div className="new-item-list p-0 mt-0">
                                                                        <fieldset class="address-fieldset mb-4">
                                                                            <legend class="float-none w-auto px-3 field-title">
                                                                                Personal  Info
                                                                            </legend>
                                                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                                                <ul className="patient-bio-list">
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faPerson} /> Age :<span className="patient-bio-title"> 18</span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faMarsAndVenus} /> Gender :<span className="patient-bio-title"> Male</span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faRulerVertical} /> Height :<span className="patient-bio-title"> 6 fit </span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faWeightScale} /> Weight :<span className="patient-bio-title"> 50 Kg</span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faDroplet} /> Blood Group :<span className="patient-bio-title"> B+</span> </li>

                                                                                </ul>
                                                                                <div>

                                                                                </div>
                                                                            </div>
                                                                        </fieldset>

                                                                        <fieldset class="address-fieldset mb-4">
                                                                            <legend class="float-none w-auto px-3 field-title">
                                                                                Medical History
                                                                            </legend>

                                                                            <div className="medical-history-content">
                                                                                <div>
                                                                                    <h4 className="fz-16 fw-700">Do you have any chronic conditions?</h4>
                                                                                    <h5 className="hearth-disese">Heart Disease</h5>
                                                                                </div>

                                                                                <div className="mt-3">
                                                                                    <h4 className="fz-16 fw-700">Are you currently on any medications?</h4>
                                                                                    <h5 className="hearth-disese">Yes</h5>
                                                                                </div>

                                                                            </div>

                                                                            <div className="medical-history-content my-3">
                                                                                <div>
                                                                                    <h4 className="fz-16 fw-700">Medication Details</h4>
                                                                                    <p>ACE Inhibitors (Twice daily)</p>
                                                                                    <p>Beta Blockers  (Once daily)</p>
                                                                                </div>

                                                                                <div className="mt-3">
                                                                                    <h4 className="fz-16 fw-700">Allergies</h4>
                                                                                    <p>Penicillin</p>
                                                                                    <p>Peanuts</p>
                                                                                </div>

                                                                                <div className="mt-3">
                                                                                    <h4 className="fz-16 fw-700">Are you currently on any medications?</h4>
                                                                                    <h5 className="hearth-disese">Yes</h5>
                                                                                </div>

                                                                            </div>

                                                                        </fieldset>

                                                                        <fieldset class="address-fieldset mb-4">
                                                                            <legend class="float-none w-auto px-3 field-title">
                                                                                Family Medical History
                                                                            </legend>

                                                                            <div className="medical-history-content ">
                                                                                <div>
                                                                                    <h4 className="fz-16 fw-700">Any family history of chronic disease?</h4>
                                                                                    <h5 className="hearth-disese">Yes</h5>

                                                                                </div>

                                                                                <div className="mt-3">
                                                                                    <h4 className="fz-16 fw-700">Chronic Diseases in Family</h4>
                                                                                    <p> Father: Hypertension, Type 2 Diabetes</p>
                                                                                    <p>Mother: Osteoarthritis</p>
                                                                                    <p>Maternal Grandfather: Heart Disease</p>
                                                                                    <p>Paternal Grandmother: Stroke</p>
                                                                                </div>

                                                                            </div>

                                                                        </fieldset>

                                                                        <fieldset class="address-fieldset mb-4">
                                                                            <legend class="float-none w-auto px-3 field-title">
                                                                                Prescriptions and Reports
                                                                            </legend>

                                                                            <div className="row">
                                                                                <div className="col-lg-6 col-sm-12 mb-3">
                                                                                    <div className="prescription-patients-card">
                                                                                        <div className="prescription-patients-picture">
                                                                                            <img src="/patient-card-one.png" alt="" />
                                                                                        </div>
                                                                                        <div className="card-details-bx">
                                                                                            <div className="card-info-title">
                                                                                                <h3>CBC Report 8/21/2025</h3>
                                                                                                <p>8/21/2025</p>
                                                                                            </div>

                                                                                            <div className="">
                                                                                                <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 col-sm-12 mb-3">
                                                                                    <div className="prescription-patients-card">
                                                                                        <div className="prescription-patients-picture">

                                                                                            <img src="/patient-card-two.png" alt="" />
                                                                                        </div>
                                                                                        <div className="card-details-bx">
                                                                                            <div className="card-info-title">
                                                                                                <h3>Prescriptions 8/21/2025</h3>
                                                                                                <p>8/21/2025</p>
                                                                                            </div>

                                                                                            <div className="">
                                                                                                <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </fieldset>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="tab-pane fade" id="upload" role="tabpanel">
                                                        <div className="all-profile-data-bx">
                                                            <div className="">
                                                                <div className="row">
                                                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                        <div className="qrcode-prescriptions-bx">
                                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                    <img src="/prescriptions.png" alt="" className="rounded-0" />
                                                                                    <div>
                                                                                        <h6 className="fs-16 fw-600 text-black">Prescriptions</h6>
                                                                                        <p className="fs-14 fw-500">RE-89767</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <span className="active-barcode">Active</span>
                                                                                </div>
                                                                            </div>

                                                                            <div className="barcode-active-bx">
                                                                                <div className="mb-2">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                        <div className="admin-table-bx gap-2">
                                                                                            <img src="/doctor-timing.png" alt="" />
                                                                                            <div>
                                                                                                <h6>Advance Lab Tech</h6>
                                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="d-flex align-items-center gap-2">
                                                                                            <button className="card-sw-btn" ><FontAwesomeIcon icon={faPrint} /></button>
                                                                                            <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="barcd-scannr barcde-scnnr-card">
                                                                                    <div className="barcd-content">
                                                                                        <h4 className="mb-1">SP-9879</h4>
                                                                                        <ul class="qrcode-list">
                                                                                            <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                            <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                        </ul>
                                                                                        <img src="/barcode.png" alt="" />
                                                                                    </div>
                                                                                    <div className="barcode-id-details">
                                                                                        <div>
                                                                                            <h6>Patient Id </h6>
                                                                                            <p>PS-9001</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <h6>Appointment ID </h6>
                                                                                            <p>OID-8876</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                        <div className="qrcode-prescriptions-bx">
                                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                    <img src="/prescriptions.png" alt="" className="rounded-0" />
                                                                                    <div>
                                                                                        <h6 className="fs-16 fw-600 text-black">Prescriptions</h6>
                                                                                        <p className="fs-14 fw-500">RE-89767</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <span className="active-barcode">Active</span>
                                                                                </div>
                                                                            </div>

                                                                            <div className="barcode-active-bx">
                                                                                <div className="mb-2">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                        <div className="admin-table-bx gap-2">
                                                                                            <img src="/doctor-timing.png" alt="" />
                                                                                            <div>
                                                                                                <h6>Advance Lab Tech</h6>
                                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="d-flex align-items-center gap-2">
                                                                                            <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                            <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="barcd-scannr barcde-scnnr-card">
                                                                                    <div className="barcd-content">
                                                                                        <h4 className="mb-1">SP-9879</h4>
                                                                                        <ul class="qrcode-list">
                                                                                            <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                            <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                        </ul>
                                                                                        <img src="/barcode.png" alt="" />
                                                                                    </div>
                                                                                    <div className="barcode-id-details">
                                                                                        <div>
                                                                                            <h6>Patient Id </h6>
                                                                                            <p>PS-9001</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <h6>Appointment ID </h6>
                                                                                            <p>OID-8876</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                        <div className="qrcode-prescriptions-bx">
                                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                    <img src="/prescriptions.png" alt="" className="rounded-0" />
                                                                                    <div>
                                                                                        <h6 className="fs-16 fw-600 text-black">Prescriptions</h6>
                                                                                        <p className="fs-14 fw-500">RE-89767</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <span className="active-barcode">Active</span>
                                                                                </div>
                                                                            </div>

                                                                            <div className="barcode-active-bx">
                                                                                <div className="mb-2">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                        <div className="admin-table-bx gap-2">
                                                                                            <img src="/doctor-timing.png" alt="" />
                                                                                            <div>
                                                                                                <h6>Advance Lab Tech</h6>
                                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="d-flex align-items-center gap-2">
                                                                                            <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                            <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="barcd-scannr barcde-scnnr-card">
                                                                                    <div className="barcd-content">
                                                                                        <h4 className="mb-1">SP-9879</h4>
                                                                                        <ul class="qrcode-list">
                                                                                            <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                            <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                        </ul>
                                                                                        <img src="/barcode.png" alt="" />
                                                                                    </div>
                                                                                    <div className="barcode-id-details">
                                                                                        <div>
                                                                                            <h6>Patient Id </h6>
                                                                                            <p>PS-9001</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <h6>Appointment ID </h6>
                                                                                            <p>OID-8876</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="tab-pane fade" id="report" role="tabpanel">
                                                        <div className="all-profile-data-bx">
                                                            <div className="">
                                                                <div className="row">
                                                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                        <div className="qrcode-prescriptions-bx">
                                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                    <img src="/reprt-plus.png" alt="" className="rounded-0" />
                                                                                    <div>
                                                                                        <h6 className="fs-16 fw-600 text-black">Final Diagnostic Report</h6>
                                                                                        <p className="fs-14 fw-500">RE-89767</p>

                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="barcode-active-bx">
                                                                                <div className="mb-2">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                        <div>
                                                                                            <h6>Advance Lab Tech</h6>
                                                                                            <p className="fs-14 fw-500">DO-4001</p>
                                                                                        </div>
                                                                                        <div className="d-flex align-items-center gap-2">
                                                                                            <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                            <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>


                                                                                <div className="barcd-scannr barcde-scnnr-card">
                                                                                    <div className="barcd-content">
                                                                                        <h4 className="mb-1">SP-9879</h4>

                                                                                        <ul class="qrcode-list">
                                                                                            <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                            <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                        </ul>

                                                                                        <img src="/barcode.png" alt="" />
                                                                                    </div>

                                                                                    <div className="barcode-id-details">
                                                                                        <div>
                                                                                            <h6>Patient Id </h6>
                                                                                            <p>PS-9001</p>
                                                                                        </div>


                                                                                        <div>
                                                                                            <h6>Appointment ID </h6>
                                                                                            <p>OID-8876</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="text-center mt-3">
                                                                                    <button className="pdf-download-tbn py-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download Report</button>

                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                        <div className="qrcode-prescriptions-bx">
                                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                    <img src="/reprt-plus.png" alt="" className="rounded-0" />
                                                                                    <div>
                                                                                        <h6 className="fs-16 fw-600 text-black">Final Diagnostic Report</h6>
                                                                                        <p className="fs-14 fw-500">RE-89767</p>

                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="barcode-active-bx">
                                                                                <div className="mb-2">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                        <div>
                                                                                            <h6>Advance Lab Tech</h6>
                                                                                            <p className="fs-14 fw-500">DO-4001</p>
                                                                                        </div>
                                                                                        <div className="d-flex align-items-center gap-2">
                                                                                            <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                            <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>


                                                                                <div className="barcd-scannr barcde-scnnr-card">
                                                                                    <div className="barcd-content">
                                                                                        <h4 className="mb-1">SP-9879</h4>

                                                                                        <ul class="qrcode-list">
                                                                                            <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                            <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                        </ul>

                                                                                        <img src="/barcode.png" alt="" />
                                                                                    </div>

                                                                                    <div className="barcode-id-details">
                                                                                        <div>
                                                                                            <h6>Patient Id </h6>
                                                                                            <p>PS-9001</p>
                                                                                        </div>


                                                                                        <div>
                                                                                            <h6>Appointment ID </h6>
                                                                                            <p>OID-8876</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="text-center mt-3">
                                                                                    <button className="pdf-download-tbn py-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download Report</button>

                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                        <div className="qrcode-prescriptions-bx">
                                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                    <img src="/reprt-plus.png" alt="" className="rounded-0" />
                                                                                    <div>
                                                                                        <h6 className="fs-16 fw-600 text-black">Final Diagnostic Report</h6>
                                                                                        <p className="fs-14 fw-500">RE-89767</p>

                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="barcode-active-bx">
                                                                                <div className="mb-2">
                                                                                    <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                        <div>
                                                                                            <h6>Advance Lab Tech</h6>
                                                                                            <p className="fs-14 fw-500">DO-4001</p>
                                                                                        </div>
                                                                                        <div className="d-flex align-items-center gap-2">
                                                                                            <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                            <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>


                                                                                <div className="barcd-scannr barcde-scnnr-card">
                                                                                    <div className="barcd-content">
                                                                                        <h4 className="mb-1">SP-9879</h4>

                                                                                        <ul class="qrcode-list">
                                                                                            <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                            <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                        </ul>

                                                                                        <img src="/barcode.png" alt="" />
                                                                                    </div>

                                                                                    <div className="barcode-id-details">
                                                                                        <div>
                                                                                            <h6>Patient Id </h6>
                                                                                            <p>PS-9001</p>
                                                                                        </div>


                                                                                        <div>
                                                                                            <h6>Appointment ID </h6>
                                                                                            <p>OID-8876</p>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="text-center mt-3">
                                                                                    <button className="pdf-download-tbn py-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download Report</button>

                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>




                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/*prescription-Modal Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#prescription-Modal" */}
            <div className="modal step-modal" id="prescription-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content rounded-5">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-4">
                            <div>
                                <h6 className="heading-grad mb-0 fz-24"> Prescription</h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body p-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-report-card">
                                        <div className="view-report-header">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <span className="active-barcode">Active</span>
                                                    <h5>RX-10014</h5>
                                                    <h6>Date: 8/21/2025</h6>
                                                </div>

                                                <div className="d-flex gap-2">
                                                    <button className="fz-18"><FontAwesomeIcon icon={faDownload} /> </button>
                                                    <button className="fz-18"><FontAwesomeIcon icon={faPrint} /> </button>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="view-report-content">
                                            <div className="sub-content-title">
                                                <h4>RX.</h4>
                                                <h3><BsCapsule style={{ color: "#00B4B5" }} /> Medications</h3>
                                            </div>

                                            <div className="view-medications-bx mb-3">
                                                <h5>1. Aserpin</h5>
                                                <ul className="viwe-medication-list">
                                                    <li className="viwe-medication-item">Dosage: 10mg </li>
                                                    <li className="viwe-medication-item">Frequency: Once daily </li>
                                                    <li className="viwe-medication-item">Duration: 30 days</li>
                                                    <li className="viwe-medication-item">Instructions: Bbbjjj</li>

                                                </ul>
                                            </div>

                                            <div className="view-medications-bx mb-3">
                                                <h5>1. Aserpin</h5>
                                                <ul className="viwe-medication-list">
                                                    <li className="viwe-medication-item">Dosage: 10mg </li>
                                                    <li className="viwe-medication-item">Frequency: Once daily </li>
                                                    <li className="viwe-medication-item">Duration: 30 days</li>
                                                    <li className="viwe-medication-item">Instructions: Bbbjjj</li>

                                                </ul>
                                            </div>

                                            <div className="diagnosis-bx mb-3">
                                                <h5>Diagnosis</h5>
                                                <p>Hypertension</p>
                                            </div>

                                            <div className="diagnosis-bx mb-3">
                                                <h5>Diagnosis</h5>
                                                <p>-</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  prescription-Modal Popup End */}
        </>
    )
}

export default DoctorDetailsView