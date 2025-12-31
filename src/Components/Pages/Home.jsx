
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faChevronLeft, faChevronRight, faEarDeaf, faHeartPulse, faLocationDot, faRoute, faStethoscope, faTooth, faUser } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useRef } from "react";
import { NavLink } from "react-router-dom";


function Home() {
  const splideRef = useRef(null);
  const splideRef1 = useRef(null);
  const splideRef2 = useRef(null);
  const splideRef3 = useRef(null);

  const nextSlide = () => {
    splideRef.current.splide.go(">");
    splideRef1.current.splide.go(">");
    splideRef2.current.splide.go(">");
    splideRef3.current.splide.go(">");
  };

  const prevSlide = () => {
    splideRef.current.splide.go("<");
    splideRef1.current.splide.go("<");
    splideRef2.current.splide.go("<");
    splideRef3.current.splide.go("<");
  };
  


  const settings = {
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const Doctorscard = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };


  return (
    <>
      {/* <section className='baner baner-box' style={{ backgroundImage: `url(/baner.png)`, }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 position-relative z-1">
              <div className="baner-content">
                <h2>Your Health, Our Priority</h2>
                <p>Experience world-class healthcare with NeoHealthCard. Book appointments with top doctors, access telemedicine, and manage your health journey all in one place.</p>
              </div>
              <div className="search-wrapper custom-frm-bx">
                 <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search doctors, clinics, hospitals, etc"
                  />
                 
              <div className="tp-nw-filter-bx">
                    <button className="nw-thm-btn">Search</button>
              </div>
          
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="baner-content-img">
                <img src="/baner-img.png" alt="" />
                <div className="hero-content  ">


                  <div className="checkup-badge">
                    <motion.img
                      src="/baner-img2.png"
                      alt="checkup badge"
                      initial={{ y: -100, opacity: 0 }}         
                      whileInView={{ y: 0, opacity: 1 }}         
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}                  
                    />
                  </div>

 
                  <div className="doctor-box">
                    <motion.img
                      src="/baner-img1.png"
                      alt="doctor banner"
                      initial={{ x: -100, opacity: 0 }}      
                      whileInView={{ x: 0, opacity: 1 }}   
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </section> */}

      {/* <section className='Categories'>
        <div className="container">
          <div className="LabTestCategories-content">
            <h1>Categories</h1>
          </div>
          <div className="">
            <div className="">
              <Slider {...settings}>

                <div className="Categories-box-card">
                  <img src="/Categories-img.png" alt="" />
                  <p>Cardiologist</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img2.png" alt="" />
                  <p>Pulmonologist</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img3.png" alt="" />
                  <p>Dentistry</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img4.png" alt="" />
                  <p>General</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img5.png" alt="" />
                  <p>Cardiologist</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img.png" alt="" />
                  <p>Pulmonologist</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img2.png" alt="" />
                  <p>General</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img2.png" alt="" />
                  <p>Dentistry</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img2.png" alt="" />
                  <p>Cardiologist</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img2.png" alt="" />
                  <p>Dentistry</p>
                </div>
                <div className="Categories-box-card">
                  <img src="/Categories-img2.png" alt="" />
                  <p>Cardiologist</p>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </section> */}

        <section className="categories-section">
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <h5 className="heading-grad fz-40 fw-700">Categories</h5>
            </div>
            <div className="col-lg-12">

              <Splide
                options={{
                  type: "loop",
                  perPage: 10,
                  perMove: 1,
                  autoplay: true,
                  pagination: false,
                  interval: 2500,
                  speed: 800,
                  arrows: false,
                  gap: "20px",
                  breakpoints: {
                    992: { perPage: 6, gap: "15px" },
                    767: { perPage: 4, gap: "10px" },
                    567: { perPage: 2, gap: "10px" },
                  },
                }}
              >

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faHeartPulse} />
                    </span>
                    <h5>Cardiologist</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faHeartPulse} />
                    </span>
                    <h5>Pulmonologist</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faTooth} />
                    </span>
                    <h5>Dentistry</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faStethoscope} />
                    </span>
                    <h5>General</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faEarDeaf} />
                    </span>
                    <h5>Pulmonologist</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faHeartPulse} />
                    </span>
                    <h5>Pulmonologist</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faTooth} />
                    </span>
                    <h5>Pulmonologist</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faEarDeaf} />
                    </span>
                    <h5>Dentistry</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faStethoscope} />
                    </span>
                    <h5>Urologist</h5>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="all-categories-bx">
                    <span className="categories-icon-bx">
                      <FontAwesomeIcon icon={faHeartPulse} />
                    </span>
                    <h5>Ophthalmologist</h5>
                  </div>
                </SplideSlide>

              </Splide>

            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
         <div className="container">
          <div className="row">
            <div className="mb-3">
              <h5 className="heading-grad fz-40 fw-700">Services</h5>
              <p>Explore a full range of health services</p>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
              <div className="doctor-services-card">
                <div className="services-pic-bx">
                  <img src="/services-pic.png" alt="" />
                </div>
                <div className="services-content">
                  <h3>Doctor</h3>
                  <p>Search for a healthcare professional or specialist for consultation and treatment.</p>
                </div>
                <div className="text-center">
                  <button className="nw-thm-btn">Search Doctors</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='find-lab-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="nw-arrow-bx  mb-2">
                <div>
                  <h4 className="heading-grad fz-40 mb-2">Doctors</h4>
                  <p>Specialists are dedicated to providing you with the highest quality medical care and personalized treatment plans.</p>
                </div>

                <div className="rating-arrows">
                  <button onClick={prevSlide} className="rating-prev me-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className="view-all-btn">View All</button>
                  <button onClick={nextSlide} className="rating-next">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>


              <Splide
                ref={splideRef2}
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
                    767: { perPage: 1, gap: "10px" },
                  },
                }}
              >

                <SplideSlide className="py-2">
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
                <SplideSlide className="py-2">
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
                <SplideSlide className="py-2">
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

       <section className="lab-categoreis-section">
        <div className="container">
          <div className="row">
            <div className="mb-3">
              <h5 className="heading-grad fz-40 fw-700"> Lab Test Categories</h5>
              <p>Specialists are dedicated to providing you with the highest quality medical care and personalized treatment plans.</p>
            </div>
            <div className="col-lg-12">
              <div className="my-3">
                <Splide
                  options={{
                    type: "loop",
                    perPage: 10,
                    perMove: 1,
                    autoplay: true,
                    pagination: false,
                    interval: 2500,
                    speed: 800,
                    arrows: false,
                    gap: "20px",
                    breakpoints: {
                      992: { perPage: 6, gap: "15px" },
                      767: { perPage: 4, gap: "10px" },
                      567: { perPage: 2, gap: "10px" },
                    },
                  }}
                >

                  <SplideSlide>
                    <a href="">
                      <div className="lab-categories-bx">
                        <span className="lab-icon-bx">
                          <img src="/cbc.png" alt="" />
                        </span>
                        <h5>CBC</h5>
                      </div>
                    </a>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/x-ray.png" alt="" />
                      </span>
                      <h5>X-Ray</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/ct-scan.png" alt="" />
                      </span>
                      <h5>CT Scan</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/pcr.png" alt="" />
                      </span>
                      <h5>PCR</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/covid.png" alt="" />
                      </span>
                      <h5>Covid-19</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/cancer.png" alt="" />
                      </span>
                      <h5>Cancer</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/obesity.png" alt="" />
                      </span>
                      <h5>Obesity</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/fever.png" alt="" />
                      </span>
                      <h5>Fever</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/hair.png" alt="" />
                      </span>
                      <h5>Hair Fall</h5>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="lab-categories-bx">
                      <span className="lab-icon-bx">
                        <img src="/diabetes.png" alt="" />
                      </span>
                      <h5>Diabetes</h5>
                    </div>
                  </SplideSlide>


                </Splide>
              </div>
            </div>
          </div>
        </div>

      </section>

    

      <section className='hospital-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="nw-arrow-bx mb-2 mb-2">
                <div>
                  <h4 className="heading-grad mb-2 fz-40">Hospitals</h4>
                  <p>Specialists are dedicated to providing you with the highest quality medical care and personalized treatment plans.</p>
                </div>

                <div className="rating-arrows">
                  <button onClick={prevSlide} className="rating-prev me-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className="view-all-btn">View All</button>
                  <button onClick={nextSlide} className="rating-next">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>


              <Splide
                ref={splideRef1}
                options={{
                  type: "loop",
                  perPage: 3,
                  perMove: 1,
                  autoplay: true,
                  pagination: false,
                  interval: 2500,
                  speed: 800,
                  arrows: false,
                  gap: "20px",
                  breakpoints: {
                    992: { perPage: 2, gap: "15px" },
                    767: { perPage: 1, gap: "10px" },
                  },
                }}
              >

                <SplideSlide className="py-2">
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
                            <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide className="py-2">
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
                            <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide className="py-2">
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
                            <a href="javascript:void(0)" className="heart-btn"><i class="fa-regular fa-heart"></i></a>
                          </div>
                          <div>
                            <a href="javascript:void(0)" className="nw-thm-btn">View Details</a>
                          </div>
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

      <section className='HowitWorks'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="HowitWorks-img">        <img src="/HowitWorks-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="howitworks-contents">
                <div>
                  <p>How it Works</p>
                  <div className="LabTestCategories-content"> <h1>4 easy steps to get your solution</h1></div>
                </div>
                <div className="howitworks-contents-box">
                  <div className='howitworks-contents-box-icon'>
                    <img src="/icon.png" alt="" />
                  </div>
                  <div>
                    <h5>Search Doctor</h5>
                    <p>Search for a doctor based on specialization, location, or availability. </p>
                  </div>
                </div>
                <div className="howitworks-contents-box">
                  <div className='howitworks-contents-box-icon'>
                    <img src="/icon1.png" alt="" />
                  </div>
                  <div>
                    <h5>Check Doctor Profile</h5>
                    <p>Explore detailed doctor profiles on our platform to make informed healthcare decisions. </p>
                  </div>
                </div>
                <div className="howitworks-contents-box">
                  <div className='howitworks-contents-box-icon'>
                    <img src="/icon2.png" alt="" />
                  </div>
                  <div>
                    <h5>Schedule Appointment</h5>
                    <p>After choose your preferred doctor, select a convenient time slot, & confirm your appointment. </p>
                  </div>
                </div>
                <div className="howitworks-contents-box">
                  <div className='howitworks-contents-box-icon'>
                    <img src="/icon3.png" alt="" />
                  </div>
                  <div>
                    <h5>Get Your Solution</h5>
                    <p>Discuss your health concerns with the doctor and receive personalized advice & solution. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='blog-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="nw-arrow-bx  mb-2">
                <div>
                  <h4 className="heading-grad fz-40 mb-2">Latest Blogs</h4>
                  <p>Specialists are dedicated to providing you with the highest quality medical care and personalized treatment plans.</p>
                </div>

                <div className="rating-arrows">
                  <button onClick={prevSlide} className="rating-prev me-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className="view-all-btn">View All</button>
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
                    767: { perPage: 1, gap: "10px" },
                  },
                }}
              >

                <SplideSlide>
                  <div className="bloging-card">
                    <div class="blog-picture">
                      <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                    </div>
                    <div className="blog-content mt-2">
                      <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                      <div className="d-flex gap-3 my-3">
                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser} /> Admin</span>
                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar} /> 13 Aug, 2023</span>
                      </div>

                      <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                      <div className="text-center mt-4">
                        <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                      </div>
                    </div>

                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bloging-card">
                    <div class="blog-picture">
                      <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                    </div>
                    <div className="blog-content mt-2">
                      <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                      <div className="d-flex gap-3 my-3">
                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser} /> Admin</span>
                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar} /> 13 Aug, 2023</span>
                      </div>

                      <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                      <div className="text-center mt-4">
                        <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                      </div>
                    </div>

                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bloging-card">
                    <div class="blog-picture">
                      <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                    </div>
                    <div className="blog-content mt-2">
                      <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                      <div className="d-flex gap-3 my-3">
                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser} /> Admin</span>
                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar} /> 13 Aug, 2023</span>
                      </div>

                      <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                      <div className="text-center mt-4">
                        <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                      </div>
                    </div>

                  </div>
                </SplideSlide>
              </Splide>


            </div>
          </div>
        </div>
      </section>

      <section className='download-section'>
        <div className="container">
          <div className="download-content">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="download-content-text">
                  <h5>Working for Your Better Health.</h5>
                  <h3>Download the Doccure App today!</h3>
                  <div className='d-flex gap-3 download-content-btn'>
                    <div>                <a href="#">  <img src="/google-play-icon1.png" className='' alt="" /></a>
                    </div>
                    <div>                 <a href="#"> <img src="google-play-icon.png" className='' alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="download-content-img">
                  <img src="/Download-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='Testimonials'>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="nw-arrow-bx  mb-2">
                <div>
                  <h4 className="heading-grad fz-40 mb-2">Latest Blogs</h4>
                  <p>Specialists are dedicated to providing you with the highest quality medical care and personalized treatment plans.</p>
                </div>

                <div className="rating-arrows">
                  <button onClick={prevSlide} className="rating-prev me-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button className="view-all-btn">View All</button>
                  <button onClick={nextSlide} className="rating-next">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              </div>


              <Splide
                ref={splideRef3}
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
                    767: { perPage: 1, gap: "10px" },
                  },
                }}
              >

                <SplideSlide>
                  <div class="testimonials-content">
                    <p>
                      Doccure exceeded my expectations in healthcare. The seamless booking process, coupled with the expertise of the doctors, made my experience exceptional. Their commitment to quality care and convenience truly sets them apart. I highly recommend Doccure for anyone seeking reliable and accessible healthcare services.",
                      name: "John Doe
                    </p>

                    <div class="mb-2 mt-1">
                      <img src="/Testimonials-img.png" alt="" />
                    </div>

                    <h5>David Smith</h5>

                    <span>
                      5.0
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="testimonials-content">
                    <p>
                      Doccure exceeded my expectations in healthcare. The seamless booking process, coupled with the expertise of the doctors, made my experience exceptional. Their commitment to quality care and convenience truly sets them apart. I highly recommend Doccure for anyone seeking reliable and accessible healthcare services.",
                      name: "John Doe
                    </p>

                    <div class="mb-2 mt-1">
                      <img src="/Testimonials-img.png" alt="" />
                    </div>

                    <h5>David Smith</h5>

                    <span>
                      5.0
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div class="testimonials-content">
                    <p>
                      Doccure exceeded my expectations in healthcare. The seamless booking process, coupled with the expertise of the doctors, made my experience exceptional. Their commitment to quality care and convenience truly sets them apart. I highly recommend Doccure for anyone seeking reliable and accessible healthcare services.",
                      name: "John Doe
                    </p>

                    <div class="mb-2 mt-1">
                      <img src="/Testimonials-img.png" alt="" />
                    </div>

                    <h5>David Smith</h5>

                    <span>
                      5.0
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                </SplideSlide>
              </Splide>


            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home