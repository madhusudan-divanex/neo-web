import { faChevronLeft, faChevronRight, faDroplet, faEye, faMarsAndVenus, faPerson, faRulerVertical, faWeightScale, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { NavLink } from "react-router-dom";

function DoctorProfileApproval() {
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
                                    <h5 className="heading-grad fz-24 mb-0">View Details</h5>
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
                                                    Personal  Info
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
                                                    Medical History
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
                                                    Family Medical History
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
                                                    Prescriptions and Reports
                                                </a>
                                            </li>

                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    id="notes-tab"
                                                    data-bs-toggle="tab"
                                                    href="#notes"
                                                    role="tab"
                                                >
                                                    Note & Approve
                                                </a>
                                            </li>

                                        </ul>

                                        <div className="">
                                            <div className="employee-tabs">
                                                <div className="tab-content" id="myTabContent">
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="home"
                                                        role="tabpanel"
                                                    >

                                                        <div className="all-profile-data-bx">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div>
                                                                        <div class="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                                            <div class="form-check uniquee">
                                                                                <input class="form-check-input" type="checkbox" id="approve" checked />
                                                                                <label class="form-check-label" for="approve">
                                                                                    Approve
                                                                                </label>
                                                                            </div>

                                                                            <div class="form-check uniquee">
                                                                                <input class="form-check-input" type="checkbox" id="reject" />
                                                                                <label class="form-check-label" for="reject">
                                                                                    Reject
                                                                                </label>
                                                                            </div>

                                                                        </div>

                                                                        <fieldset class="address-fieldset mb-4">
                                                                            <legend class="float-none w-auto px-3 legend-heading">
                                                                                Personal  Info
                                                                            </legend>
                                                                            <div className=" patient-details-bx mb-3">
                                                                                <div className="admin-table-sub-bx patient-avartr-bx gap-3">
                                                                                    <img src="/table-avatar.jpg" alt="" />
                                                                                    <div className="patient-bio-content">
                                                                                        <h6>Sunil Kumar Sharma</h6>
                                                                                        <p>ID: SUNIL33209490</p>
                                                                                    </div>
                                                                                </div>


                                                                            </div>
                                                                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                                                <ul className="patient-bio-list">
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faPerson} /> Age :<span className="patient-bio-title"> 18</span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faMarsAndVenus} /> Gender :<span className="patient-bio-title"> Male</span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faRulerVertical} /> Height :<span className="patient-bio-title"> 6 fit </span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faWeightScale} /> Weight :<span className="patient-bio-title"> 50 Kg</span> </li>
                                                                                    <li className="patient-bio-item"><FontAwesomeIcon icon={faDroplet} /> Blood Group :<span className="patient-bio-title"> B+</span> </li>
                                                                                </ul>
                                                                                <div>
                                                                                    <NavLink to="/patient-view" className="option-rep-add-btn">View More</NavLink>
                                                                                </div>
                                                                            </div>

                                                                        </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="profile-btm-footer">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-flex gap-3">
                                                                    <button className="nw-prev-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                                                                    <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronRight} /> </button>
                                                                </div>
                                                                <div className="">
                                                                    <button className="thm-btn">Next & submit</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="tab-pane fade" id="profile" role="tabpanel">
                                                        <form action="">
                                                            <div className="all-profile-data-bx">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div>
                                                                            <div class="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                                                <div class="form-check uniquee">
                                                                                    <input class="form-check-input" type="checkbox" id="approve" checked />
                                                                                    <label class="form-check-label" for="approve">
                                                                                        Approve
                                                                                    </label>
                                                                                </div>

                                                                                <div class="form-check uniquee">
                                                                                    <input class="form-check-input" type="checkbox" id="reject" />
                                                                                    <label class="form-check-label" for="reject">
                                                                                        Reject
                                                                                    </label>
                                                                                </div>

                                                                            </div>

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
                                                                        </div>
                                                                    </div>

                                                                </div>



                                                            </div>


                                                            <div className="profile-btm-footer">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <div className="d-flex gap-3">
                                                                        <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                                                                        <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronRight} /> </button>
                                                                    </div>
                                                                    <div className="">
                                                                        <button className="thm-btn">Next & submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className="tab-pane fade" id="contact" role="tabpanel">

                                                        <div className="all-profile-data-bx">
                                                            <div>
                                                                <div class="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                                    <div class="form-check uniquee">
                                                                        <input class="form-check-input" type="checkbox" id="approve" checked />
                                                                        <label class="form-check-label" for="approve">
                                                                            Approve
                                                                        </label>
                                                                    </div>

                                                                    <div class="form-check uniquee">
                                                                        <input class="form-check-input" type="checkbox" id="reject" />
                                                                        <label class="form-check-label" for="reject">
                                                                            Reject
                                                                        </label>
                                                                    </div>

                                                                </div>

                                                                <fieldset class="address-fieldset mb-4">
                                                                    <legend class="float-none w-auto px-3 field-title">
                                                                        Family Medical History
                                                                    </legend>

                                                                    <div className="medical-history-content">
                                                                        <div>
                                                                            <h4 className="fz-16 fw-700">Any family history of chronic disease?</h4>
                                                                            <h5 className="hearth-disese">Yes</h5>
                                                                        </div>
                                                                    </div>

                                                                    <div className="medical-history-content my-3">
                                                                        <div>
                                                                            <h4 className="fz-16 fw-700">Chronic Diseases in Family</h4>
                                                                            <p>Father: Hypertension, Type 2 Diabetes</p>
                                                                            <p>Mother: Osteoarthritis</p>
                                                                            <p>Maternal Grandfather: Heart Disease</p>
                                                                            <p>Paternal Grandmother: Stroke</p>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                            </div>

                                                        </div>




                                                        <div className="profile-btm-footer">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-flex gap-3">
                                                                    <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                                                                    <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronRight} /> </button>
                                                                </div>
                                                                <div className="">
                                                                    <button className="thm-btn">Next & submit</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="tab-pane fade" id="upload" role="tabpanel">
                                                        <div className="all-profile-data-bx">
                                                            <fieldset class="address-fieldset mb-4">
                                                                <legend class="float-none w-auto px-3 field-title">
                                                                    Family Medical History
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

                                                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                                                                        <div class="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                                            <div class="form-check uniquee">
                                                                                <input class="form-check-input" type="checkbox" id="approve" checked />
                                                                                <label class="form-check-label" for="approve">
                                                                                    Approve
                                                                                </label>
                                                                            </div>

                                                                            <div class="form-check uniquee">
                                                                                <input class="form-check-input" type="checkbox" id="reject" />
                                                                                <label class="form-check-label" for="reject">
                                                                                    Reject
                                                                                </label>
                                                                            </div>

                                                                        </div>
                                                                    </div>


                                                                </div>


                                                                <div className="row">

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

                                                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                                                                        <div class="d-flex align-items-center justify-content-start gap-3 mb-3">
                                                                            <div class="form-check uniquee">
                                                                                <input class="form-check-input" type="checkbox" id="approve" checked />
                                                                                <label class="form-check-label" for="approve">
                                                                                    Approve
                                                                                </label>
                                                                            </div>

                                                                            <div class="form-check uniquee">
                                                                                <input class="form-check-input" type="checkbox" id="reject" />
                                                                                <label class="form-check-label" for="reject">
                                                                                    Reject
                                                                                </label>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                        <div className="profile-btm-footer">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-flex gap-3">
                                                                    <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                                                                    <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronRight} /> </button>
                                                                </div>
                                                                <div className="">
                                                                    <button className="thm-btn">Next & submit</button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className="tab-pane fade" id="notes" role="tabpanel">
                                                        <div className="all-profile-data-bx">
                                                            <form action="">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="custom-frm-bx">
                                                                            <label htmlFor="">Note</label>
                                                                            <textarea name="" id="" className="form-control nw-frm-select nw-text-filed"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>


                                                        </div>
                                                        <div className="profile-btm-footer">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-flex gap-3">
                                                                    <button className="nw-next-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                                                                    <button className="nw-prev-btn"> <FontAwesomeIcon icon={faChevronRight} /> </button>
                                                                </div>
                                                                <div className="d-flex gap-3">
                                                                    <button className="nw-danger-thm-btn">Reject</button>
                                                                    <button className="thm-btn">Approve</button>
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
        </>
    )
}

export default DoctorProfileApproval