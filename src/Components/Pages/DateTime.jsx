
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function DateTime() {
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
      <section className="date-time-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="date-time-main-bx">
                <div className="doctor-parent-crd">
                  <div className="doctor-timing-profile">
                  <div className="doctor-mega-card">
                    <div className="doctor-pic-bx">
                      <img src="/doctor-timing.png" alt="" />
                      <span className="rating-crd"> <i class="fa-solid fa-star rating-icon"></i> 5.0 </span>
                    </div>
                    <div className="doctor-details">
                      <h4 className="innr-title fz-700">Dr.James Harris</h4>
                      <h5>Psychologists | Mercy Hospital</h5>
                      <p><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mb-3">
                  <div className="col-lg-10">
                    <div className="mt-4">
                      <h5 className="innr-title mb-2">Select date</h5>
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
                  </div>
                </div>

                <div className="row justify-content-center mb-5">
                  <div className="col-lg-10">
                    <h5 className="innr-title mb-2">Select Time</h5>
                    <div class="row g-2 time-row">
                      <div class="col time-col"><div class="time-card active-time">08.00 PM</div></div>
                      <div class="col time-col"><div class="time-card">09.00 PM</div></div>
                      <div class="col time-col"><div class="time-card">10.00 PM</div></div>
                      <div class="col time-col"><div class="time-card">11.00 PM</div></div>
                      <div class="col time-col"><div class="time-card">12.00 PM</div></div>
                      <div class="col time-col"><div class="time-card">01.00 AM</div></div>
                      <div class="col time-col"><div class="time-card">02.00 AM</div></div>

                      <div class="col time-col"><div class="time-card">03.00 AM</div></div>
                      <div class="col time-col"><div class="time-card">04.00 AM</div></div>
                      <div class="col time-col"><div class="time-card">05.00 AM</div></div>
                      <div class="col time-col"><div class="time-card">06.00 AM</div></div>
                      <div class="col time-col"><div class="time-card">07.00 AM</div></div>

                    </div>
                  </div>
                </div>
                </div>

                 <div className="date-time-footer">
              <div className=' '>
                <a href="# " className="nw-thm-btn outline">Back</a>
              </div>
              <div className='d-flex gap-4 '>
                <div className="doctor-fees-content">
                  <h5>$25.00</h5>
                  <p>Fees</p>
                </div>
                <div className=''>
                   <a href="javascript:void(0)" className='nw-thm-btn'>Continue</a>
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

export default DateTime