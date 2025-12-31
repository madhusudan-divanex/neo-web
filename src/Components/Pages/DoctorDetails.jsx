import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingSlider from "./RatingSlider";
function DoctorDetails() {

  return (
    <>
      <section className="tp-breadcrum-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center mb-3">
                <h4 className="lg_title">Doctor Details</h4>
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
                      Doctor Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='doctor-details-seaction '>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="date-time-main-bx">
                <div className="doctor-parent-crd ">
                  <div className="doctor-detailsseaction-contant">
                    <div className="doctor-detailsseaction-contant-img">
                      <img src="/docer.png" alt="doctor" />
                    </div>
                    <div className="doctor-detailsseaction-contant-text flex-grow-1 ">
                      <div className="d-flex justify-content-between  align-items-start">
                        <div className="docotr-estetment-bx">
                          <h4>Dr. James Harris</h4>
                          <h6> Psychologists  <span className="slash-title"> | </span> Mercy Hospital </h6>
                          <p> Language : <span className="language-title">English</span> </p>
                          <h5> <i className="fas fa-map-marker-alt me-1" style={{color : "#052F59"}}></i> Malviya Nagar, Jaipur </h5>
                        </div>
                        <div className="ms-auto d-flex gap-3">
                          <a href="javascript:void(0)" className="heart-btn"><i className="far fa-heart"></i></a>
                          <a href="javascript:void(0)" className="heart-btn"><i className="fas fa-share-alt"></i></a>
                        </div>
                      </div>
                      <div className="contentcardicon mt-3">
                        <div className=" d-flex align-items-center gap-3">
                          <div className="doctor-detailsseaction-contant-text-icon">
                            <span className="doctor-nw-icon"><i className="fas fa-user-friends"></i></span>
                          </div>
                          <div>
                            <h5>2,000+</h5>
                            <p>Patients</p>
                          </div>
                        </div>
                        <div className=" d-flex align-items-center gap-3">
                          <div className="doctor-detailsseaction-contant-text-icon">
                            <span className="doctor-nw-icon"><i className="fas fa-award"></i></span>
                          </div>
                          <div>
                            <h5>10+</h5>
                            <p>Patients</p>
                          </div>
                        </div>
                        <div className=" d-flex align-items-center gap-3">
                          <div className="doctor-detailsseaction-contant-text-icon">
                            <span className="doctor-nw-icon"> <i class="fas fa-star"></i></span>
                          </div>
                          <div>
                            <h5>5</h5>
                            <p>Rating</p>
                          </div>
                        </div>
                        <div className=" d-flex align-items-center gap-3">
                          <div className="doctor-detailsseaction-contant-text-icon">
                            <span className="doctor-nw-icon"><i className="fas fa-money-bill-wave"></i></span>
                          </div>
                          <div>
                            <h5>$25.00</h5>
                            <p>Fees</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-end mt-4">
                        <a href="#" className='nw-thm-btn'>Book Appointment</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-me">
                <h2>About Me</h2>
                <p className="new_para about-para">“Highly motivated and experienced doctor with a passion for providing excellent care to patients. Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine. Skilled in using the latest technology to streamline patient care. Committed to delivering compassionate, personalized care to each and every patient.” <a href="#" className="more-btn">Read More</a> </p>
              </div>

              <div className="about-me specialty-bx my-3">
                <h2>Specialty</h2>
                <ul className="specialty-list">
                  <li className="specialty-item"> <span className="specialty-title"> Psychologists</span></li>
                </ul>
              </div>

              <div className="about-me specialty-bx">
                <h2>Treatment Areas</h2>
                <ul className="specialty-list">
                  <li className="specialty-item"> <span className="specialty-title"> Cosmetic Surgery</span></li>
                  <li className="specialty-item"> <span className="specialty-title"> Neurology</span></li>
                  <li className="specialty-item"> <span className="specialty-title"> General Surgery</span></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <RatingSlider />


    </>

  )
}

export default DoctorDetails