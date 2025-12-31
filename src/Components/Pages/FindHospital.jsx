import { faHome, faLocationDot, faRoute, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function FindHospital() {
  return (
     <>
            <section className="tp-breadcrum-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center mb-3">
                                <h4 className="lg_title">Find Doctors</h4>
                            </div>
                            <div className="admin-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb custom-breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="breadcrumb-link">
                                                <FontAwesomeIcon icon={faHome} />
                                            </a>
                                        </li>


                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Labs List
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="find-lab-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 mb-3">
                            <div className="Sidebar-Filter">
                                <div className="filltering-bx">
                                    <div>
                                        <h4 className="subtitle mb-0">Filter</h4>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0)" className="filter-clear-btn">Clear All</a>
                                    </div>

                                </div>
                                <div className="sidebar-filter-checkbox">
                                    <div className="accordion-box accordion " id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Availability
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                     <ul className="permision-check-list">
                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="available" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="available">Available Now</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="not" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="not">No Available</label>
                                                            </div>
                                                        </li>

                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Ratting
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <ul className="permision-check-list">
                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="star1" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="star1">1 Star</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="star2" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="star2">2 Star</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="star3" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="star3">3 Star</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="star4" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="star4">4 Star</label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="accordion-body-concet">
                                                                <input className="form-check-input mt-0" type="checkbox" id="star5" value="" aria-label="Checkbox for following text input" />
                                                                <label htmlFor="star5">5 Star</label>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-12 col-sm-12">
                            <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="email"
                                            className="form-control admin-table-search-frm search-table-frm pe-5"
                                            id="email"
                                            placeholder="Search"
                                            required
                                        />
                                        <div className="adm-search-bx">
                                            <button className="tp-search-btn">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="filters">
                                        <div className="field custom-frm-bx mb-0 custom-select admin-table-search-frm ">
                                            <label className="label">Sort By</label>
                                            <select className="">
                                                <option>Price (Low to High) </option>
                                                <option>Test 1</option>
                                                <option>Test 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="show-result-bx">
                                <p className="show-pra">Showing <span className="show-title">450</span> labs For You</p>
                            </div>

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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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
                                                    <p><FontAwesomeIcon icon={faRoute}/>2.5 km</p>
                                                </div>

                                                <div className="  d-flex align-items-center justify-content-between">
                                                     <div>
                                                        <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
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

            </section>

        </>
  )
}

export default FindHospital