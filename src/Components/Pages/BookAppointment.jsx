import { faCheck, faChevronLeft, faLocationDot, faRoute, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function BookAppointment() {
    const [selectedLocation, setSelectedLocation] = useState("Jaipur, India");
    const locations = [
        "Jaipur, India",
        "Delhi, India",
        "Mumbai, India",
        "Pune, India",
        "Kolkata, India"
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const dates = [
        { day: "Mon", date: "Jan 16" },
        { day: "Tue", date: "Jan 17" },
        { day: "Wed", date: "Jan 18" },
        { day: "Thu", date: "Jan 19" },
        { day: "Fri", date: "Jan 20" },
        { day: "Sat", date: "Jan 21" },
        { day: "Sun", date: "Jan 22" },
    ];


    return (
        <>
            <section className="near-section">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="d-flex aling-items-center gap-3">
                                <div className="">
                                    <a href="javascript:void(0)" className="back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </a>
                                </div>
                                <div className="dropdown">
                                    <h6>Select Location</h6>

                                    <a
                                        href="#"
                                        className="dropdown-toggle text-black"
                                        id="acticonMenu1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <FontAwesomeIcon icon={faLocationDot} /> {selectedLocation}
                                    </a>

                                    <ul
                                        className="dropdown-menu dropdown-menu-end mt-2 nw-location-bx"
                                        aria-labelledby="acticonMenu1"
                                    >

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
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="doctor-review-bx mt-3">
                                <h5 className="heading-grad text-center">Book Appointment </h5>
                                <div className="doctor-submit-bx">
                                    <p>Your profile has been submitted and is under review by the doctor.
                                        Approval is required before your account becomes active.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="book-appointment-bx">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="booking-doctor-card">
                                            <div className="nw-appointment-mega-card text-center">
                                                <div className="nw-appointment-doctor-bx">
                                                    <img src="/doctor-timing.png" alt="" />
                                                    <span className="select-doctor"> <i class="fa-solid fa-check nw-verify-icon"></i>  </span>
                                                </div>
                                                <div className="doctor-details mt-2">
                                                    <h4 className="innr-title fz-700">Dr.James Harris</h4>
                                                    <h5>Psychologists <span className="slash-title">|</span> Mercy Hospital</h5>
                                                    <p><FontAwesomeIcon icon={faRoute} /> 2.5 km</p>
                                                    <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="mt-4">
                                            <h5 className="innr-title mb-3">Select date</h5>
                                            <div className="date-slider">
                                                <Splide
                                                    options={{
                                                        perPage: 7,
                                                        perMove: 1,
                                                        gap: "12px",
                                                        pagination: false,
                                                        arrows: true,
                                                        type: "loop",
                                                        autoplay: true,
                                                        interval: 2000,
                                                        speed: 800,
                                                        pauseOnHover: true,
                                                        pauseOnFocus: false,
                                                        resetProgress: false,

                                                        breakpoints: {
                                                            1200: { perPage: 5 },
                                                            992: { perPage: 4 },
                                                            768: { perPage: 3 },
                                                            576: { perPage: 2 },
                                                        },
                                                    }}
                                                >
                                                    {dates.map((item, idx) => (
                                                        <SplideSlide key={idx}>
                                                            <div
                                                                className={`date-card ${activeIndex === idx ? "active-date" : ""}`}
                                                                onClick={() => setActiveIndex(idx)}
                                                            >
                                                                <h6>{item.day}</h6>
                                                                <p>{item.date}</p>
                                                            </div>
                                                        </SplideSlide>
                                                    ))}
                                                </Splide>

                                            </div>
                                        </div>

                                        <div className="my-3">
                                            <h5 className="innr-title mb-3">Select Time</h5>
                                            <div class="slot-grid">
                                                <div class="slot-item"><div class="slot-box slot-active">08.00 PM</div></div>
                                                <div class="slot-item"><div class="slot-box">09.00 PM</div></div>
                                                <div class="slot-item"><div class="slot-box">10.00 PM</div></div>
                                                <div class="slot-item"><div class="slot-box">11.00 PM</div></div>
                                                <div class="slot-item"><div class="slot-box">12.00 PM</div></div>
                                                <div class="slot-item"><div class="slot-box">01.00 AM</div></div>
                                                <div class="slot-item"><div class="slot-box">02.00 AM</div></div>
                                                <div class="slot-item"><div class="slot-box">03.00 AM</div></div>
                                                <div class="slot-item"><div class="slot-box">04.00 AM</div></div>
                                                <div class="slot-item"><div class="slot-box">05.00 AM</div></div>
                                                <div class="slot-item"><div class="slot-box">06.00 AM</div></div>
                                                <div class="slot-item"><div class="slot-box">07.00 AM</div></div>
                                            </div>


                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 px-0">
                            <div className="fix-bottom-bx">
                                <div className="text-end nw-item-bx">
                                    <button className="nw-thm-btn">Booked Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BookAppointment