import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faCheck, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function PatientProfileApprovalRequest() {
    return (
        <>
            <section className="new-profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-sm-12 mb-3">
                            <ProfileSidebar />
                        </div>

                        <div className="col-lg-9 col-sm-12">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0">Patient  Profile Approval request</h5>
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
                                                                <a href="#" className="fz-16 clear-btn">Reset</a>
                                                            </div>

                                                            <div className="p-3">
                                                                <ul className="permision-check-list filtring-list">
                                                                    <h6>Status</h6>
                                                                    <li>
                                                                        <div className="accordion-body-concet">
                                                                            <input className="form-check-input mt-0" type="checkbox" id="pending" value="" aria-label="Checkbox for following text input" />
                                                                            <label htmlFor="pending">Pending</label>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div className="accordion-body-concet">
                                                                            <input className="form-check-input mt-0" type="checkbox" id="completed" value="" aria-label="Checkbox for following text input" />
                                                                            <label htmlFor="completed">Completed</label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="accordion-body-concet">
                                                                            <input className="form-check-input mt-0" type="checkbox" id="canceled" value="" aria-label="Checkbox for following text input" />
                                                                            <label htmlFor="canceled">Canceled</label>
                                                                        </div>
                                                                    </li>

                                                                </ul>

                                                                <div className="mt-3 filtring-list ">

                                                                    <div className="row">
                                                                        <h6>Date Range</h6>
                                                                        <div className="col-lg-6">
                                                                            <div className="custom-frm-bx">
                                                                                <input type="date" className="form-control admin-table-search-frm" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="custom-frm-bx">
                                                                                <input type="date" className="form-control admin-table-search-frm" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between drop-heading-bx px-3 pt-2 pb-2 border-top">
                                                                <a href="javascript:void(0)" className="thm-btn thm-outline-btn rounded-4 px-4 py-2 outline"> Cancel</a>
                                                                <a href="javascript:void(0)" className="thm-btn rounded-4 px-4 py-2"> Apply</a>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="page-selector">
                                                <div className="filters">
                                                    <select className="form-select custom-page-dropdown nw-custom-page ">
                                                        <option value="1" selected>100</option>
                                                        <option value="2">1</option>
                                                        <option value="3">2</option>
                                                    </select>
                                                </div>
                                            </div>
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

                                                            <tr>
                                                                <td>01.</td>

                                                                <td> #89324879</td>

                                                                <td>
                                                                    <div className="admin-table-bx">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                            <img src="/patient-pic.png" alt="" />
                                                                            <div>
                                                                                <h6 className="">Annette Black</h6>
                                                                                <p>PA-9001</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>30 June 2025 10:00pm</td>
                                                                <td>

                                                                    <span className="pending-data">Pending </span>
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
                                                                                    <NavLink to="/prescription-bar" className="prescription-nav " href="#" >
                                                                                        <span className="accept-title "><FontAwesomeIcon icon={faCheck} /> Approve</span>
                                                                                    </NavLink>
                                                                                </li>

                                                                                <li className="prescription-item">
                                                                                    <a className=" prescription-nav" href="#">

                                                                                        <span className="danger-title">Reject</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>02.</td>

                                                                <td> #89324879</td>

                                                                <td>
                                                                    <div className="admin-table-bx">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                            <img src="/patient-pic.png" alt="" />
                                                                            <div>
                                                                                <h6 className="">Annette Black</h6>
                                                                                <p>PA-9001</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>30 June 2025 10:00pm</td>
                                                                <td>

                                                                    <span className="complete-data">Completed </span>
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
                                                                                    <NavLink to="/prescription-bar" className="prescription-nav " href="#" >
                                                                                        <span className="accept-title "><FontAwesomeIcon icon={faCheck} /> Approve</span>
                                                                                    </NavLink>
                                                                                </li>

                                                                                <li className="prescription-item">
                                                                                    <a className=" prescription-nav" href="#">

                                                                                        <span className="danger-title">Reject</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>03.</td>

                                                                <td> #89324879</td>

                                                                <td>
                                                                    <div className="admin-table-bx">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                            <img src="/patient-pic.png" alt="" />
                                                                            <div>
                                                                                <h6 className="">Annette Black</h6>
                                                                                <p>PA-9001</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>30 June 2025 10:00pm</td>
                                                                <td>

                                                                    <span className="complete-data">Completed </span>
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
                                                                                    <NavLink to="/prescription-bar" className="prescription-nav " href="#" >
                                                                                        <span className="accept-title "><FontAwesomeIcon icon={faCheck} /> Approve</span>
                                                                                    </NavLink>
                                                                                </li>

                                                                                <li className="prescription-item">
                                                                                    <a className=" prescription-nav" href="#">

                                                                                        <span className="danger-title">Reject</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td>04.</td>

                                                                <td> #89324879</td>

                                                                <td>
                                                                    <div className="admin-table-bx">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                            <img src="/patient-pic.png" alt="" />
                                                                            <div>
                                                                                <h6 className="">Annette Black</h6>
                                                                                <p>PA-9001</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>30 June 2025 10:00pm</td>
                                                                <td>

                                                                    <span className="cancel-data">Canceled </span>
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
                                                                                    <NavLink to="/prescription-bar" className="prescription-nav " href="#" >
                                                                                        <span className="accept-title "><FontAwesomeIcon icon={faCheck} /> Approve</span>
                                                                                    </NavLink>
                                                                                </li>

                                                                                <li className="prescription-item">
                                                                                    <a className=" prescription-nav" href="#">

                                                                                        <span className="danger-title">Reject</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>05.</td>

                                                                <td> #89324879</td>

                                                                <td>
                                                                    <div className="admin-table-bx">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                            <img src="/patient-pic.png" alt="" />
                                                                            <div>
                                                                                <h6 className="">Annette Black</h6>
                                                                                <p>PA-9001</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td>30 June 2025 10:00pm</td>
                                                                <td>

                                                                    <span className="pending-data">Pending </span>
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
                                                                                    <NavLink to="/prescription-bar" className="prescription-nav " href="#" >
                                                                                        <span className="accept-title "><FontAwesomeIcon icon={faCheck} /> Approve</span>
                                                                                    </NavLink>
                                                                                </li>

                                                                                <li className="prescription-item">
                                                                                    <a className=" prescription-nav" href="#">

                                                                                        <span className="danger-title">Reject</span>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                            </tr>
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

            </section>
        </>
    )
}

export default PatientProfileApprovalRequest