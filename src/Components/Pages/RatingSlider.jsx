
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useRef } from "react";
import base_url from "../../baseUrl";

function RatingSlider({ratings}) {
console.log(ratings)
    //    const splideRef = useRef(null);

    // const nextSlide = () => {
    //     splideRef.current.splide.go(">");
    // };

    // const prevSlide = () => {
    //     splideRef.current.splide.go("<");
    // };

    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const slider3 = useRef(null);

    const nextSlide = () => {
        slider1.current.splide.go(">");
        slider2.current.splide.go(">");
        slider3.current.splide.go(">");
    };

    const prevSlide = () => {
        slider1.current.splide.go("<");
        slider2.current.splide.go("<");
        slider3.current.splide.go("<");
    };

    return (
        <>
           
            <section className="rating-section pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h4 className="title mb-2">Rating</h4>

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
                                ref={slider1}
                                options={{
                                    type: "loop",
                                    perPage: 2,
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
                               
                                {ratings?.map((item,key)=>
                                <SplideSlide key={key}> <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src={
                                            item?.patientId?.patientId?.profileImage?
                                            `${base_url}/${item?.patientId?.patientId?.profileImage}`:"/DoctorDetails-img.png"} alt="" />
                                        <div>
                                            <h5>{item?.patientId?.name}</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        {item?.message}
                                    </p>
                                </div>
                                </SplideSlide>)}
                                <SplideSlide>
                                     <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div>
                                </SplideSlide>
                                <SplideSlide>
                                     <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div>
                                </SplideSlide>
                            </Splide>

                           
                            <Splide
                                ref={slider2}
                                options={{
                                    type: "loop",
                                    perPage: 2,
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
                                     <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div>
                                </SplideSlide>
                                <SplideSlide>
                                      <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div>
                                </SplideSlide>
                                <SplideSlide> 
                                    <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div> 
                                </SplideSlide>
                            </Splide>

                            
                            <Splide
                                ref={slider3}
                                options={{
                                    type: "loop",
                                    perPage: 2,
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
                                     <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div>
                                 </SplideSlide>
                                <SplideSlide>
                                     <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
                                </div>
                                </SplideSlide>
                                <SplideSlide>
                                     <div className="EmilyAnderson-contar mb-3">
                                    <div className="EmilyAnderson">
                                        <img src="/DoctorDetails-img.png" alt="" />
                                        <div>
                                            <h5>Emily Anderson</h5>
                                            <p>
                                                5.0 <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        Dr. Patel is a true professional who genuinely cares about his patients.
                                        I highly recommend Dr. Patel to anyone seeking exceptional cardiac care.
                                    </p>
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

export default RatingSlider