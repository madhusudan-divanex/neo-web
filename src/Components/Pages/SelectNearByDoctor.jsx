import { faCheck, faChevronLeft, faLocationDot, faRoute } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";
import { getApiData } from "../../Services/api";
import base_url from "../../baseUrl";

function SelectNearByDoctor() {

  const [selectedLocation, setSelectedLocation] = useState("Jaipur, India");

  const locations = [
    "Jaipur, India",
    "Delhi, India",
    "Mumbai, India",
    "Pune, India",
    "Kolkata, India"
  ];
  const [doctors,setDoctors]=useState([])
  async function fetchDoctor() {
    try {
      const response=await getApiData('patient/near-by-doctor')
      if(response.success){
        setDoctors(response.data)
      }
    } catch (error) { 
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchDoctor()
  },[])
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
                <h5 className="heading-grad text-center">Select Near By Doctor</h5>
                <div className="doctor-submit-bx">
                  <p>Your profile has been submitted and is under review by the doctor.
                    Approval is required before your account becomes active.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5">

            {doctors?.length>0?
            doctors?.map((item,key)=>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={key}>
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src={item?.profileImage? `${base_url}/${item?.profileImage}`:"/date-time-img.png"} className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">{item?.name}</h5>
                  <p className="">{item?.spe} <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>):'No doctor find near you'}

            {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div className="near-doctor-card ">
                <label className="nw-radio-wrapper">
                  <input type="radio" name="doctorSelect" />
                  <span className="nw-custom-radio"></span>
                </label>
                <img src="/date-time-img.png" className="doctor-img"/>

                <div className="near-doctor-content">
                  <h5 className="">Dr. James Harris</h5>
                  <p className="">Psychologist <span className="slash-title"> |  </span> Mercy Hospital</p>

                  <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-sm-2">
                    <span className="near-by-location"><FontAwesomeIcon icon={faRoute} /> 2.5 km</span>
                    <span className="near-by-location"><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</span>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 px-0">
              <div className="fix-bottom-bx">
                  <div className="text-end nw-item-bx">
                    <button className="nw-thm-btn">Submit & Next</button>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default SelectNearByDoctor