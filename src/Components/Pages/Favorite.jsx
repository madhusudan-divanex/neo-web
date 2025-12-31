import { faLocationDot, faRoute, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"

function Favorite() {
    return (
        <>
            <section className="new-profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 mb-3">
                            <ProfileSidebar />
                        </div>

                        <div className="col-lg-9  col-sm-12">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0"> Favorite </h5>
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
                                                    Doctor

                                                    <span className="count-card">6</span>


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
                                                    Hospital

                                                    <span className="count-card">4</span>
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
                                                    Lab

                                                    <span className="count-card">4</span>
                                                </a>
                                            </li>


                                        </ul>

                                        <div className="new-panel-card">
                                            <div className="employee-tabs">
                                                <div className="tab-content" id="myTabContent">
                                                    <div
                                                        className="tab-pane fade show active"
                                                        id="home"
                                                        role="tabpanel"
                                                    >

                                                        <div className="all-profile-data-bx">
                                                            <div className="row">
                                                                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                                                                    <div className="favorite-docotr-card">
                                                                        <div className="favorite-doctor-picture text-center">
                                                                            <img src="/date-time-img.png" alt="" />
                                                                            <div className="favorite-doctor-details">
                                                                                <h4 className="">Dr.James Harris</h4>
                                                                                <div className="my-2">
                                                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                </div>
                                                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                                                <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                                                <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <h5 className="ammount-title"><span className="fees-title">Fees :</span> $ 22.00</h5>

                                                                                <div className="d-flex justify-content-between mt-3">
                                                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                                                                    <div className="favorite-docotr-card">
                                                                        <div className="favorite-doctor-picture text-center">
                                                                            <img src="/date-time-img.png" alt="" />
                                                                            <div className="favorite-doctor-details">
                                                                                <h4 className="">Dr.James Harris</h4>
                                                                                <div className="my-2">
                                                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                </div>
                                                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                                                <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                                                <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <h5 className="ammount-title"><span className="fees-title">Fees :</span> $ 22.00</h5>

                                                                                <div className="d-flex justify-content-between mt-3">
                                                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                                                                    <div className="favorite-docotr-card">
                                                                        <div className="favorite-doctor-picture text-center">
                                                                            <img src="/date-time-img.png" alt="" />
                                                                            <div className="favorite-doctor-details">
                                                                                <h4 className="">Dr.James Harris</h4>
                                                                                <div className="my-2">
                                                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                </div>
                                                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                                                <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                                                <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <h5 className="ammount-title"><span className="fees-title">Fees :</span> $ 22.00</h5>

                                                                                <div className="d-flex justify-content-between mt-3">
                                                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                                                                    <div className="favorite-docotr-card">
                                                                        <div className="favorite-doctor-picture text-center">
                                                                            <img src="/date-time-img.png" alt="" />
                                                                            <div className="favorite-doctor-details">
                                                                                <h4 className="">Dr.James Harris</h4>
                                                                                <div className="my-2">
                                                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                </div>
                                                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                                                <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                                                <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <h5 className="ammount-title"><span className="fees-title">Fees :</span> $ 22.00</h5>

                                                                                <div className="d-flex justify-content-between mt-3">
                                                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                                                                    <div className="favorite-docotr-card">
                                                                        <div className="favorite-doctor-picture text-center">
                                                                            <img src="/date-time-img.png" alt="" />
                                                                            <div className="favorite-doctor-details">
                                                                                <h4 className="">Dr.James Harris</h4>
                                                                                <div className="my-2">
                                                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                </div>
                                                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                                                <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                                                <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <h5 className="ammount-title"><span className="fees-title">Fees :</span> $ 22.00</h5>

                                                                                <div className="d-flex justify-content-between mt-3">
                                                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                                                                    <div className="favorite-docotr-card">
                                                                        <div className="favorite-doctor-picture text-center">
                                                                            <img src="/date-time-img.png" alt="" />
                                                                            <div className="favorite-doctor-details">
                                                                                <h4 className="">Dr.James Harris</h4>
                                                                                <div className="my-2">
                                                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                </div>
                                                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                                                <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                                                <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <h5 className="ammount-title"><span className="fees-title">Fees :</span> $ 22.00</h5>

                                                                                <div className="d-flex justify-content-between mt-3">
                                                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
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
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/hospital-pic.jpg" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Sunrise Health Clinic</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3 d-flex align-items-center justify-content-between">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                    <p><FontAwesomeIcon icon={faRoute} />2.5 km</p>
                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/hospital-pic.jpg" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Sunrise Health Clinic</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3 d-flex align-items-center justify-content-between">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                    <p><FontAwesomeIcon icon={faRoute} />2.5 km</p>
                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/hospital-pic.jpg" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Sunrise Health Clinic</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3 d-flex align-items-center justify-content-between">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                    <p><FontAwesomeIcon icon={faRoute} />2.5 km</p>
                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/hospital-pic.jpg" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Sunrise Health Clinic</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3 d-flex align-items-center justify-content-between">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                                                    <p><FontAwesomeIcon icon={faRoute} />2.5 km</p>
                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
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
                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/lab-pic.png" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Advance Lab Tech</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>

                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/lab-pic.png" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Advance Lab Tech</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>

                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/lab-pic.png" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Advance Lab Tech</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>

                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                                                    <div className="lab-technology-card">
                                                                        <div className="doctor-mega-card">
                                                                            <div className="doctor-pic-bx">
                                                                                <img src="/lab-pic.png" alt="" />
                                                                            </div>
                                                                            <div className="doctor-details  flex-grow-1">
                                                                                <h4 className="innr-title fz-700">Advance Lab Tech</h4>
                                                                                <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                <div className="my-3">
                                                                                    <span className="lab-rating"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>

                                                                                </div>

                                                                                <div className="  d-flex align-items-center justify-content-between">
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-solid fa-heart nw-red-heart"></i></a>
                                                                                    </div>
                                                                                    <div>
                                                                                        <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
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
                </div>

            </section>
        </>
    )
}

export default Favorite