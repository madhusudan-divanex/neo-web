import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faArrowLeft, faCalendar, faEye, faLocationDot, faMessage, faPhone, faVideo, } from "@fortawesome/free-solid-svg-icons"


function AppointmentDetailsCompleted() {
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
                                    <h5 className="heading-grad fz-24 mb-0"> <a href="javascript:void(0)" className="text-black fz-18"><FontAwesomeIcon icon={faArrowLeft} /></a> Appointment Details </h5>
                                </div>
                                <div className="all-profile-data-bx">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="my-appointment-info-card">
                                                <div className="my-appointment-tp-bx">
                                                    <div className="appoint-left-title-bx">
                                                        <h5 className="fz-16 fw-700 mb-0 text-black"> <span className="cal-icon"><FontAwesomeIcon icon={faCalendar} /></span> 30 June 2025, at 10:00pm </h5>
                                                    </div>
                                                    <div className="appoint-right-title-bx">
                                                        <span className="nw-result-bx completed-title">Upcoming</span>
                                                    </div>
                                                </div>

                                                <div className="appointment-info-parent-bx">
                                                    <div className="appointment-info-sub-bx">
                                                        <img src="/doctor-timing.png" alt="" />
                                                        <div className="appointment-info-details">
                                                            <h4 className="">Dr.James Harris</h4>
                                                            <h6 className="nw-appointment-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                            <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                        </div>
                                                    </div>
                                                    <div className="appointment-info-mega-bx">
                                                        <div className="not-accpent-bx">
                                                            <h6 className="not-accept-title"></h6>
                                                        </div>

                                                        <div>
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

                                        <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Booking Details</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <ul className="appoint-booking-list">
                                                        <li className="booking-item">Appointment ID<span className="booking-title">#987676454</span></li>
                                                        <li className="booking-item">Booking Date<span className="booking-title">28 June 2025  10:00pm</span></li>
                                                        <li className="booking-item">Fees<span className="booking-title">$ 25 </span></li>
                                                        <li className="booking-item">Payment<span className="booking-title paid-title">Paid</span></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Patient info</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <ul className="appoint-booking-list">
                                                        <li className="booking-item">Name<span className="booking-title">Sunil Kumar Sharma</span></li>
                                                        <li className="booking-item">Email<span className="booking-title">sunil@gamil.com</span></li>
                                                        <li className="booking-item">Mobile Number<span className="booking-title">+91-9876543210</span></li>

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Prescriptions</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <div className="prescriptin-bx">
                                                        <div className="prescriptin-content">

                                                            <div className="prescriptin-picture">
                                                                <img src="/prescriptin-pic.png" alt="" />
                                                                <div>
                                                                    <p>Prescription Date</p>
                                                                    <h6>8/21/2025</h6>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <button className="thm-outline-btn thm-btn"> <FontAwesomeIcon icon={faEye} /> View </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Lab tests prescribed by the doctor</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                  <div className="nw-presc-lab-bx">
                                                        <img src="/lab-pic.png" alt="" />
                                                        <div className="appointment-info-details">
                                                            <h4 className="">Advance Lab Tech</h4>
                                                            <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                        </div>
                                                    </div>

                                                    <div className="my-3">
                                                         <ul className="permision-check-list">
                                                            <li className="permission-item">
                                                                <div className="accordion-body-concet nw-select-test-bx">
                                                                    <input className="form-check-input mt-0" type="checkbox" id="available" checked />
                                                                    <label htmlFor="available">CBC</label>
                                                                    <span class="price">$25.00</span>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                       
                                                    </div>

                                                     <div className="text-center">
                                                            <button className="thm-btn">Book Appointment</button>
                                                        </div>


                                                </div>

                                            </div>
                                        </div>

                                        <div className=" mt-3 text-end d-flex align-items-center justify-content-end gap-2">
                                            <button className="nw-warning-outline-btn">Add Rating</button>
                                            <button className="nw-thm-btn">Re -Appointment </button>
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

export default AppointmentDetailsCompleted