
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { toast } from "react-toastify";
import { getApiData, securePostData, updateApiData } from "../../Services/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import base_url from "../../baseUrl";

function DateTime() {
  const params = useParams()
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId')
  const [isShow, setIsShow] = useState(false)
  const [isFull, setIsFull] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isHide, setIsHide] = useState(true)
  const aptData = JSON.parse(sessionStorage.getItem('aptData'))
  const [doctorCertificate, setDoctorCertificate] = useState([])
  const [doctorData, setDoctorData] = useState([])
  const [doctorAddress, setDoctorAddress] = useState()
  const [doctorAbout, setDoctorAbout] = useState()
  const [avgRating, setAvgRating] = useState(0)
  const [ratings, setRatings] = useState([])
  const [favIds, setFavIds] = useState([])
  const [doctorTest, setDoctorTest] = useState([])
  const preTest = JSON.parse(sessionStorage.getItem('preTest')) || [];
  const [selectedTest, setSelectedTest] = useState(preTest);
  async function fetchDoctorData() {
    setLoading(true)
    try {
      const result = await getApiData(`doctor/data/${params.id}`)
      if (result.success) {
        setRatings(result.rating)
        setDoctorCertificate(result.doctorLicense?.medicalLicense)
        setAvgRating(result.avgRating)
        setDoctorData(result.user)
        setDoctorAbout(result.doctorAbout)
      }
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchDoctorData()
  }, [params])
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(0);
  const times = [
    "08.00 PM", "09.00 PM", "10.00 PM", "11.00 PM", "12.00 PM",
    "01.00 AM", "02.00 AM", "03.00 AM", "04.00 AM", "05.00 AM",
    "06.00 AM", "07.00 AM"
  ];



  const generateNextDates = (numDays) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dates = [];
    const today = new Date();

    for (let i = 0; i < numDays; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = daysOfWeek[date.getDay()];
      const monthName = months[date.getMonth()];
      const dayNum = date.getDate();

      dates.push({ day: dayName, date: `${monthName} ${dayNum}` });
    }

    return dates;
  };
  const [dates] = useState(generateNextDates(15));
  const convertTimeToDate = (timeStr, dateObj) => {
    const [time, meridiem] = timeStr.split(" ");
    let [hours, minutes] = time.split(".").map(Number);

    if (meridiem === "PM" && hours !== 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;

    const date = new Date(dateObj);
    date.setHours(hours, minutes, 0, 0);
    return date;
  };
  const today = new Date();

  const getSelectedDate = () => {
    const selected = dates[activeIndex];
    if (!selected) return null;

    const [month, day] = selected.date.split(" ");
    const year = new Date().getFullYear();
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth();

    return new Date(year, monthIndex, Number(day));
  };

  const selectedDateObj = getSelectedDate();

  const availableTimes = times.filter((time) => {
    // agar selected date aaj hai
    if (
      selectedDateObj &&
      selectedDateObj.toDateString() === today.toDateString()
    ) {
      return convertTimeToDate(time, selectedDateObj) > today;
    }

    // future date → saare times allowed
    return true;
  });

  const [occupiedSlots, setOccupiedSlots] = useState([]);

  const fetchOccupiedSlots = async (dateObj) => {
    try {
      const dateStr = dateObj.toISOString().split("T")[0]; // YYYY-MM-DD
      const res = await getApiData(`doctor/occupied-slots/${params.id}/${dateStr}`);
      if (res.success) {
        setOccupiedSlots(res.occupiedTimes);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch occupied slots whenever the date changes
  useEffect(() => {
    if (selectedDateObj) {
      fetchOccupiedSlots(selectedDateObj);
    }
  }, [activeIndex, params.id]);
  const filteredTimes = availableTimes.filter(time => !occupiedSlots.includes(time));

  const handleBook = async (e) => {
    e.preventDefault();



    if (!timeIndex) {
      toast.error("Please select a time");
      return;
    }

    if (!dates[activeIndex]) {
      toast.error("Please select a date");
      return;
    }
    if (!userId) {
      navigate('/login')
      return;
    }
    setLoading(true)
    try {
      // 1️⃣ Prepare test IDs

      // 2️⃣ Parse selected date
      const selectedDateObj = dates[activeIndex];
      const [month, day] = selectedDateObj.date.split(" "); // "Dec 29"
      const year = new Date().getFullYear(); // current year

      // Convert month name to month index
      const monthIndex = new Date(`${month} 1, 2000`).getMonth(); // 0-based month

      // 3️⃣ Parse selected time ("08.00 PM")
      const [time, meridiem] = timeIndex.split(" "); // ["08.00", "PM"]
      let [hours, minutes] = time.split(".").map(Number);

      if (meridiem === "PM" && hours !== 12) hours += 12;
      if (meridiem === "AM" && hours === 12) hours = 0;

      // 4️⃣ Create JS Date object
      const appointmentDate = new Date(year, monthIndex, Number(day), hours, minutes);

      // 5️⃣ Prepare payload
      const data = {
        fees: doctorAbout?.fees,
        doctorId: params.id,
        date: appointmentDate, // Date type
        patientId: userId
      };
      if (aptData) {
        data.appointmentId = aptData?._id
        const response = await updateApiData("appointment/doctor", data);
        if (response.success) {
          sessionStorage.removeItem('aptData')
          toast.success("Appointment updated successfully!");
          setIsHide(false)
        } else {
          toast.error(response.message || "Booking failed");
        }
      } else {
        const response = await securePostData("appointment/doctor", data);
        if (response.success) {
          toast.success("Appointment booked successfully!");
          setIsHide(false)
        } else {
          toast.error(response.message || "Booking failed");
        }
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      toast.error("Something went wrong while booking appointment");
    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    if (!aptData || !dates.length) return;
    const appointmentDate = new Date(aptData.date);

    /* ---------- DATE MATCH ---------- */
    const aptDay = appointmentDate.getDate();
    const aptMonth = appointmentDate.getMonth();
    const dateIndex = dates.findIndex(d => {
      const [monthName, day] = d.date.split(" ");
      const monthIndex = new Date(`${monthName} 1, 2000`).getMonth();
      return (
        Number(day) === aptDay &&
        monthIndex === aptMonth
      );
    });
    if (dateIndex !== -1  && activeIndex===0) {
      setActiveIndex(dateIndex);
    }

    /* ---------- TIME MATCH ---------- */
    let hours = appointmentDate.getHours();
    const minutes = appointmentDate.getMinutes();

    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const formattedTime = `${String(hours).padStart(2, "0")}.${String(minutes).padStart(2, "0")} ${meridiem}`;

    if (times.includes(formattedTime)) {
      setTimeIndex(formattedTime);
    }

  }, [aptData]);


  return (
    <>
      {isHide ? <section className="date-time-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="date-time-main-bx">
                <div className="doctor-parent-crd">
                  <div className="doctor-timing-profile">
                    <div className="doctor-mega-card">
                      <div className="doctor-pic-bx">
                        <img src={doctorData?.profileImage ?
                          `${base_url}/${doctorData?.profileImage}` : "/doctor-timing.png"} alt="" />
                        <span className="rating-crd"> <i class="fa-solid fa-star rating-icon"></i> {avgRating?.toFixed(0)} </span>
                      </div>
                      <div className="doctor-details">
                        <h4 className="innr-title fz-700">Dr.{doctorData?.name}</h4>
                        <h5>{doctorAbout?.specialty} | {doctorAbout?.hospitalName?.hospitalName}</h5>
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
                        {filteredTimes.length > 0 ? (
                          filteredTimes.map((time, index) => (
                            <div className="col time-col" key={index}>
                              <div
                                className={`time-card ${timeIndex === time ? 'active-time' : ''}`}
                                onClick={() => setTimeIndex(time)}
                              >
                                {time}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="col-12 text-center mt-3">
                            <p className="text-danger fw-semibold">
                              No slot available today
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>

                <div className="date-time-footer">
                  <div className=' '>
                    <Link to={-1} className="nw-thm-btn outline">Back</Link>
                  </div>
                  <div className='d-flex gap-4 '>
                    <div className="doctor-fees-content">
                      <h5>${doctorAbout?.fees}</h5>
                      <p>Fees</p>
                    </div>
                    <div className=''>
                      <button onClick={handleBook} className='nw-thm-btn'>Continue</button>
                    </div>

                  </div>
                </div>

              </div>



            </div>
          </div>
        </div>

      </section> :
        <section className="pending-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12">

                <div className="pending-icon-box mx-auto">
                  <img src="/approve-img.gif" alt="pending" className="pending-icon" />
                </div>

                <div className="text-center my-3">
                  <h3 className="title">Pending approval</h3>
                  <p className="new_para">
                    Your consultation request has been sent to the expert.<br />
                    You’ll be notified once it’s approved.
                  </p>
                </div>

                <div className="pending-card ">
                  <ul className="pending-list">
                    <li className="pending-item">Appointment Date <span className="pending-title">{dates[activeIndex].day}, {dates[activeIndex].date}</span></li>
                    <li className="pending-item"> Appointment Time  <span className="pending-title">{timeIndex}</span></li>
                    <li className="pending-item">Doctor <span className="pending-title">Dr. {doctorData?.name} </span></li>
                  </ul>
                </div>

                <div className=" mt-4 text-center">
                  <Link to="/my-appointment" className="nw-thm-btn">My Appointment</Link>
                </div>

              </div>
            </div>
          </div>

        </section>}

    </>
  )
}

export default DateTime