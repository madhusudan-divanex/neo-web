import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faArrowLeft, faCalendar, faCircleXmark, faEye, faLocationDot, faMessage, faPhone, faVideo, } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSecureApiData, securePostData } from "../../Services/api"
import { useSelector } from "react-redux"
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify"
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min"
import base_url from "../../baseUrl"
import { formatDateTime } from "../../Services/globalFunction"

function AppointmentDetailsCompleted() {
    const navigate = useNavigate()
    const params = useParams()
    const userId = localStorage.getItem('userId')
    const [isFull, setIsFull] = useState(false)
    const [loading, setLoading] = useState(false)
    const [appointmentData, setAppointmentData] = useState()
    const [cancelMessage, setCancelMessage] = useState('')
    const [doctorAddress, setDoctorAddress] = useState()
    const [star, setStar] = useState(4)
    const [message, setMessage] = useState('')
    const [myRating, setMyRating] = useState([])
    const [doctorReports, setDoctorReports] = useState([])
    const { profiles } = useSelector(state => state.patient)
    async function fetchAppointmentData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`doctor/appointment-data/${params.id}`)
            if (result.success) {
                setAppointmentData(result.data)
                setDoctorAddress(result.doctorAddress)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function fetchRatingData() {
        try {
            const result = await getSecureApiData(`patient/my-rating/${userId}?type=doctor`)
            if (result.success) {
                setMyRating(result.data)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function cancelAppointment() {
        if (cancelMessage?.length < 30) {
            toast.error("Please write a valid reason with 30 length")
            return
        }
        setLoading(true)
        const data = { cancelMessage, patientId: userId, appointmentId: params.id }
        try {
            const result = await securePostData(`appointment/doctor-cancel`, data)
            if (result.success) {
                fetchAppointmentData()
                toast.success("Appointment cancel")
                const modalEl = document.getElementById("prescription-Modal");
                const modalInstance = Modal.getInstance(modalEl);

                if (modalInstance) {
                    modalInstance.hide();
                }

            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function rateDoctor() {
        if (message?.length < 20) {
            toast.error("Please write a message with 20 length")
            return
        }
        console.log("hehe")
        setLoading(true)
        const data = { doctorId: appointmentData?.doctorId?._id, patientId: userId, star, message }
        try {
            const result = await securePostData(`appointment/rating`, data)
            if (result.success) {
                fetchRatingData()
                // const modalEl = document.getElementById("rating-Modal")
                // if(modalEl){
                //     const modalInstance = window.bootstrap.Modal.getInstance(modalEl)
                //     modalInstance?.hide()
                // }
                toast.success("Rating give successfully")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAppointmentData()
    }, [params])
    useEffect(() => {
        if (userId) {
            fetchRatingData()
        }
    }, [userId])
    const startChatWithUser = async (user) => {
        // create or get conversation
        sessionStorage.setItem('chatUser', JSON.stringify(user))
        navigate('/chat')
    };
    async function rateDoctor() {
        if (message?.length < 20) {
            toast.error("Please write a message with 20 length")
            return
        }
        setLoading(true)
        const data = { doctorId: appointmentData?.doctorId?._id, patientId: userId, star, message }
        try {
            const result = await securePostData(`appointment/rating`, data)
            if (result.success) {
                fetchRatingData()
                const modalEl = document.getElementById("rating-Modal")
                if (modalEl) {
                    const modalInstance = window.bootstrap.Modal.getInstance(modalEl)
                    modalInstance?.hide()
                }
                toast.success("Rating give successfully")
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <section className="new-profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 mb-3">
                            <ProfileSidebar />
                        </div>

                        <div className="col-lg-9 col-sm-12">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0"> <Link to='/my-appointment' className="text-black fz-18"><FontAwesomeIcon icon={faArrowLeft} /></Link> Appointment Details </h5>
                                </div>
                                <div className="all-profile-data-bx">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="my-appointment-info-card">
                                                <div className="my-appointment-tp-bx">
                                                    <div className="appoint-left-title-bx">
                                                        <h5 className="fz-16 fw-700 mb-0 text-black"> <span className="cal-icon"><FontAwesomeIcon icon={faCalendar} /></span> {formatDateTime(appointmentData?.date)} </h5>
                                                    </div>
                                                    <div className="appoint-right-title-bx">
                                                        {new Date() < appointmentData?.date &&
                                                            <div className="appoint-right-title-bx">
                                                                <span className="nw-result-bx">Upcoming</span>
                                                            </div>}
                                                        {appointmentData?.status == 'cancel' && <div className="appoint-right-title-bx">
                                                            <span className="nw-result-bx canceled-title">Canceled</span>
                                                        </div>}
                                                        {appointmentData?.status == 'pending' &&
                                                            <div className="appoint-right-title-bx">
                                                                <span className="nw-result-bx pending-bx">Pending</span>
                                                            </div>}
                                                        {appointmentData?.status == 'completed' &&
                                                            <div className="appoint-right-title-bx">
                                                                <span className="nw-result-bx completed-title">Completed</span>
                                                            </div>}
                                                        {appointmentData?.status == 'rejected' && <div className="not-accpent-bx">
                                                            <h6 className="not-accept-title">Not Accept</h6>
                                                        </div>}
                                                        {appointmentData?.status == 'approved' && <div className="not-accpent-bx">
                                                            <h6 className="not-accept-title accept-title">Accept Request</h6>
                                                        </div>}

                                                    </div>
                                                </div>

                                                <div className="appointment-info-parent-bx">
                                                    <div className="appointment-info-sub-bx">
                                                        <img src={appointmentData?.doctorId?.doctorId?.profileImage ? `${base_url}/${appointmentData?.doctorId?.doctorId?.profileImage}`
                                                            : "/doctor-timing.png"} alt="" />
                                                        <div className="appointment-info-details">
                                                            <h4 className="">Dr.{appointmentData?.doctorId?.name}</h4>
                                                            <h6 className="nw-appointment-title">{doctorAddress?.specialty} <span className="slash-title" >|</span> {doctorAddress?.hospitalName}</h6>
                                                            <p className=""><FontAwesomeIcon icon={faLocationDot} />{doctorAddress?.cityId?.name + ', ' + doctorAddress?.stateId?.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="appointment-info-mega-bx">
                                                        <div className="not-accpent-bx">
                                                            <h6 className="not-accept-title"></h6>
                                                        </div>
                                                        <div>
                                                            <ul className="doctor-social-list">
                                                                <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faMessage} /> </a></li>
                                                                <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faPhone} /> </a></li>
                                                                <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faVideo} /> </a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Booking Details</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <ul className="appoint-booking-list">
                                                        <li className="booking-item">Appointment ID<span className="booking-title">#{appointmentData?.customId}</span></li>
                                                        <li className="booking-item">Booking Date<span className="booking-title">28 June 2025  10:00pm</span></li>
                                                        <li className="booking-item">Fees<span className="booking-title">$ {appointmentData?.fees} </span></li>
                                                        <li className="booking-item">Payment<span className="booking-title paid-title text-capitalize">{appointmentData?.paymentStatus}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Patient info</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <ul className="appoint-booking-list">
                                                        <li className="booking-item">Name<span className="booking-title">{profiles?.name}</span></li>
                                                        <li className="booking-item">Email<span className="booking-title">{profiles?.email}</span></li>
                                                        <li className="booking-item">Mobile Number<span className="booking-title">{profiles?.contactNumber}</span></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        {appointmentData?.prescriptionId && <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Prescriptions</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <div className="prescriptin-bx">
                                                        <div className="prescriptin-content">

                                                            <div className="prescriptin-picture">
                                                                <img src="/prescriptin-pic.png" alt="" />
                                                                <div>
                                                                    <p>Prescription Date</p>
                                                                    <h6>8/21/2025</h6>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <button className="thm-outline-btn thm-btn"> <FontAwesomeIcon icon={faEye} /> View </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>}

                                        {appointmentData?.labTest && <div className="col-lg-6 mb-3">
                                            <div className="appointment-booking-detail-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5>Doctor tests prescribed by the doctor</h5>
                                                </div>
                                                <div className="appointment-listing-bx">
                                                    <div className="nw-presc-doctor-bx">
                                                        <img src="/lab-pic.png" alt="" />
                                                        <div className="appointment-info-details">
                                                            <h4 className="">Advance Doctor Tech</h4>
                                                            <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                        </div>
                                                    </div>

                                                    <div className="my-3">
                                                        <ul className="permision-check-list">
                                                            <li className="permission-item">
                                                                <div className="accordion-body-concet nw-select-test-bx">
                                                                    <input className="form-check-input mt-0" type="checkbox" id="avaidoctorle" checked />
                                                                    <doctorel htmlFor="avaidoctorle">CBC</doctorel>
                                                                    <span class="price">$25.00</span>
                                                                </div>
                                                            </li>
                                                        </ul>


                                                    </div>

                                                    <div className="text-center">
                                                        <button className="thm-btn">Book Appointment</button>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>}
                                        {appointmentData?.status == 'cancel' && <div className="col-lg-12">
                                            <div className="lab-report-tp-bx">
                                                <div className="booking-details-tp-title">
                                                    <h5 >Reason of cancellation</h5>
                                                </div>
                                                <div className="appointment-listing-bx pb-5">
                                                    <h6 className="appoint-cancel fw-700">Cancel Date :{formatDateTime(appointmentData?.updatedAt)}</h6>
                                                    <p>{appointmentData?.cancelMessage}</p>
                                                </div>

                                            </div>
                                        </div>}
                                        {appointmentData?.status == 'rejected' && <div className="col-lg-12">
                                            <div className="lab-report-tp-bx">
                                                <div className="appointment-listing-bx pb-5">
                                                    <h6 className="appoint-cancel fw-700">Reject Date :{formatDateTime(appointmentData?.updatedAt)}</h6>

                                                </div>

                                            </div>
                                        </div>}
                                        {appointmentData?.status == 'pending' && <div className="text-end">
                                            <button className="nw-danger-outline-btn me-3" data-bs-toggle="modal" data-bs-target="#prescription-Modal">Cancel</button>
                                            <button className="nw-thm-btn">Reschedule</button>
                                        </div>}

                                        {appointmentData?.status == 'completed' &&
                                            <div className=" mt-3 text-end d-flex align-items-center justify-content-end gap-2">
                                                {!myRating.find(r => r?.doctorId == appointmentData?.doctorId?._id) && <button className="nw-warning-outline-btn" data-bs-toggle="modal" data-bs-target="#rating-Modal">Add Rating</button>}
                                                <Link to={`/book-doctor-appointment/${appointmentData?.doctorId?.name}/${appointmentData?.doctorId?._id}`} className="nw-thm-btn">Re -Appointment </Link>
                                            </div>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <div className="modal step-modal" id="prescription-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-0 ">
                        <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
                            <div>
                                <h6 className="heading-grad mb-0 fz-24">Cancel Appointment</h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "rgba(239, 0, 0, 1)" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body pb-5 px-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="rating-modal-bx">
                                        <div>
                                            <h5>Are you sure you want to cancel this Appointment  </h5>
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Reason of cancellation</label>
                                                <textarea name=""
                                                    value={cancelMessage} onChange={(e) => setCancelMessage(e.target.value)} id="" className="form-control nw-text-filed"></textarea>
                                            </div>
                                            <div>
                                                <button className="nw-thm-btn w-100" onClick={cancelAppointment}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal step-modal" id="rating-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex={-1}
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-0 ">
                        <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
                            <div>
                                <h6 className="heading-grad mb-0 fz-24">Rating </h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "rgba(239, 0, 0, 1)" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body pb-5 px-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="rating-modal-bx lab-view-bx">
                                        <img src={appointmentData?.doctorId?.doctorId?.profileImage ? `${base_url}/${appointmentData?.doctorId?.doctorId?.profileImage}`
                                            : "/lab-avtar.png"} alt="" />
                                    </div>

                                    <div className="rating-modal-content text-center">
                                        <h5>How was your experience <br /> with <span className="dcotr-name">{appointmentData?.doctorId?.doctorId?.name}</span> </h5>
                                        <ul className="doctr-rating-list my-2">
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <li key={value} className="doctr-rating-item">
                                                    <button
                                                        type="button"
                                                        className="nw-rating-nav"
                                                        onClick={() => setStar(value)}
                                                        style={{ background: "none", border: "none" }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={value <= star ? solidStar : regularStar}
                                                        />
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Write your Review</label>
                                            <textarea name="" value={message} onChange={(e) => setMessage(e.target.value)} id="" className="form-control nw-text-filed"></textarea>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="nw-thm-btn w-100" onClick={rateDoctor} >Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentDetailsCompleted