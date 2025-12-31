import { faLocationDot, faRoute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RatingSlider from "./RatingSlider"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useRef } from "react";


function HospitalDetails() {

    const splideRef = useRef(null);

    const nextSlide = () => {
        splideRef.current.splide.go(">");
    };

    const prevSlide = () => {
        splideRef.current.splide.go("<");
    };



    return (
        <>
            <section className="hospital-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 px-0">
                            <div className="hospital-picture-bx">
                                <img src="/hospital-detail-pic.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pb-4">
                                <div className="doctor-details my-3">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h4 className="heading-grad mb-0 fz-40">Mercy Hospital</h4>
                                            <div className="my-3">
                                                <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                            </div>
                                            <p className="mb-0"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="javascript:void(0)" className="heart-btn"><i className="fa-regular fa-heart"></i></a>
                                            <a href="javascript:void(0)" className="heart-btn"><i className="fas fa-share-alt"></i></a>
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
                                        <li className="specialty-item"> <span className="specialty-title">  Psychologists</span></li>

                                    </ul>
                                </div>

                                <div className="about-me specialty-bx my-3">
                                    <h2>Treatment Areas</h2>
                                    <ul className="specialty-list">
                                        <li className="specialty-item"> <span className="specialty-title"> Cosmetic Surgery</span></li>
                                        <li className="specialty-item"> <span className="specialty-title"> Neurology</span></li>
                                        <li className="specialty-item"> <span className="specialty-title"> General Surgery</span></li>
                                    </ul>
                                </div>

                                <div className="about-me specialty-bx my-3">
                                    <h2>Accreditation</h2>
                                    <ul className="specialty-list">
                                        <li className="specialty-item"> <span className="specialty-title">NABH</span></li>
                                        <li className="specialty-item"> <span className="specialty-title"> ISO Certified</span></li>
                                        <li className="specialty-item"> <span className="specialty-title"> General Surgery</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h4 className="title mb-2">Doctors</h4>

                                <div className="rating-arrows">
                                    <button onClick={prevSlide} className="rating-prev me-2">
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <button onClick={nextSlide} className="rating-next">
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>


                            <Splide
                                ref={splideRef}
                                options={{
                                    type: "loop",
                                    perPage: 4,
                                    perMove: 1,
                                    autoplay: true,
                                    pagination: false,
                                    interval: 2500,
                                    speed: 800,
                                    arrows: false,
                                    gap: "20px",
                                    breakpoints: {
                                        992: { perPage: 2, gap: "15px" },
                                        576: { perPage: 1, gap: "10px" },
                                    },
                                }}
                            >

                                <SplideSlide className="py-3">
                                    <div className="favorite-docotr-card position-relative">
                                        <div className="favorite-doctor-picture text-center">
                                            <img src="/date-time-img.png" alt="" />
                                            <div className="favorite-doctor-details">
                                                <h4 className="">Dr.James Harris</h4>
                                                <div className="my-2">
                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                </div>
                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap my-2">
                                                    <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">

                                                    <div className="text-start">
                                                        <span className="fees-title">Fees :</span>
                                                        <h5 className="ammount-title fw-700"> $ 22.00</h5>
                                                    </div>
                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                </div>

                                                <div className="doctor-heart-bx">
                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                                <SplideSlide className="py-3">
                                    <div className="favorite-docotr-card position-relative">
                                        <div className="favorite-doctor-picture text-center">
                                            <img src="/date-time-img.png" alt="" />
                                            <div className="favorite-doctor-details">
                                                <h4 className="">Dr.James Harris</h4>
                                                <div className="my-2">
                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                </div>
                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap my-2">
                                                    <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">

                                                    <div className="text-start">
                                                        <span className="fees-title">Fees :</span>
                                                        <h5 className="ammount-title fw-700"> $ 22.00</h5>
                                                    </div>
                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                </div>

                                                <div className="doctor-heart-bx">
                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>

                                <SplideSlide className="py-3">
                                    <div className="favorite-docotr-card position-relative">
                                        <div className="favorite-doctor-picture text-center">
                                            <img src="/date-time-img.png" alt="" />
                                            <div className="favorite-doctor-details">
                                                <h4 className="">Dr.James Harris</h4>
                                                <div className="my-2">
                                                    <span className="lab-rating"> <i className="fa-solid fa-star rating-icon"></i> 5.0 </span>
                                                </div>
                                                <h6 className="nw-hospital-title">Psychologists <span className="slash-title" >|</span> Mercy Hospital</h6>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap my-2">
                                                    <p className=""><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">

                                                    <div className="text-start">
                                                        <span className="fees-title">Fees :</span>
                                                        <h5 className="ammount-title fw-700"> $ 22.00</h5>
                                                    </div>
                                                    <a href="javascript:void(0)" className="nw-thm-btn">Book Appointment</a>
                                                </div>

                                                <div className="doctor-heart-bx">
                                                    <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>


                        </div>
                    </div>
                </div>
            </section>



            <RatingSlider />
        </>
    )
}

export default HospitalDetails