import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faCheck, faChevronDown, faCircleXmark, faDownload, faDroplet, faEye, faFilePdf, faLocationDot, faMarsAndVenus, faMessage, faPerson, faPhone, faPrint, faRulerVertical, faStar, faVideo, faWeightScale } from "@fortawesome/free-solid-svg-icons"
import { BsPlusCircleFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { BsCapsule } from "react-icons/bs";
import "../Css/style.css"
import "../Css/responsive.css"
import { deleteApiData, getApiData, getSecureApiData, securePostData, updateApiData } from "../../Services/api";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { calculateAge, formatDateTime } from "../../Services/globalFunction";
import base_url from "../../baseUrl";
import Loader from "../../Loader/Loader";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import Barcode from "react-barcode";
import Select from "react-select";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";
function DoctorDetailsView() {
    const navigate = useNavigate()
    const params = useParams()
    const userId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [appointmentData, setAppointmentData] = useState()
    const [doctorAddress, setDoctorAddress] = useState()
    const [pastPresData, setPastPresData] = useState()
    const [pastAppointments, setPastAppointments] = useState([])
    const [medicalHistory, setMedicalHisotry] = useState()
    const [prescription, setPrescription] = useState([])
    const [patientData, setPatientData] = useState()
    const [demographic, setDemographic] = useState()
    const [labOptions, setLabOptions] = useState()
    const [testOptions, setTestOptions] = useState([])
    const [selectedLab, setSelectedLab] = useState()
    const [selectedTest, setSelectedTest] = useState([])
    const { profiles, customId } = useSelector(state => state.doctor)
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
    async function fetchLabs() {
        const result = await getApiData(`lab`)
        if (result.success) {
            const options = result.data.map((lab) => ({
                value: lab._id,
                label: lab.name
            }));
            setLabOptions(options)
        }
    }
    async function fetchLabData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`lab/test/${selectedLab}?limit=1000`)
            if (result.success) {
                const options = result.data.map((lab) => ({
                    value: lab._id,
                    label: lab.shortName
                }));
                setTestOptions(options)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchLabs()
    }, [])
    useEffect(() => {
        if (selectedLab) {

            fetchLabData()
        }
    }, [selectedLab])
    useEffect(() => {
        fetchAppointmentData()
    }, [params])
    async function fetchPatientProfile() {
        if (!appointmentData) {
            return
        }
        setLoading(true)
        try {
            const result = await getSecureApiData(`patient/profile-detail/${appointmentData?.patientId?._id}`)
            if (result.success) {
                setDemographic(result?.demographic)
                setMedicalHisotry(result.medicalHistory)
                setPrescription(result?.prescription?.prescriptions)
                setPatientData(result?.user)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function fetchPastAppointments() {
        if (!appointmentData) {
            return
        }
        setLoading(true)
        try {
            const result = await getSecureApiData(`appointment/doctor/past-appointments/${appointmentData?.doctorId?._id}/${appointmentData?.patientId?._id}`)
            if (result.success) {
                setPastAppointments(result?.data)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPatientProfile()
        fetchPastAppointments()
    }, [appointmentData])

    const startChatWithUser = async (user) => {
        // create or get conversation
        sessionStorage.setItem('chatUser', JSON.stringify(user))
        navigate('/chat')
    };
    const appointmentAction = async (status) => {
        const data = { doctorId: userId, appointmentId: params?.id, status }
        setLoading(true)
        try {
            const response = await updateApiData(`appointment/doctor-action`, data);
            if (response.success) {
                // setCurrentPage(response.pagination.page)
                // setTotalPage(response.pagination.totalPages)
                fetchAppointmentData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    const prescriptionAction = async (item, status) => {
        const data = { prescriptionId: item?.prescriptionId?._id, status: status ? 'Active' : 'Inactive' }
        setLoading(true)
        try {
            const response = await securePostData(`appointment/prescription-action`, data);
            if (response.success) {
                // setCurrentPage(response.pagination.page)
                // setTotalPage(response.pagination.totalPages)
                fetchAppointmentData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    const deletePrescription = async (id) => {
        setLoading(true)
        try {
            const response = await deleteApiData(`appointment/prescription/${id}`);
            if (response.success) {
                toast.success("Prescription Deleted")
                fetchAppointmentData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    const handleTestSubmit = async (e) => {
        e.preventDefault()
        const data = {
            doctorId: appointmentData?.doctorId?._id, patientId: appointmentData?.patientId?._id, appointmentId: params.id,
            labTest: { lab: selectedLab, labTests: selectedTest }
        }
        try {
            const result = await updateApiData('appointment/doctor', data)
            if (result.success) {
                toast.success("Test added to the prescriptions")
                const modalEl = document.getElementById("add-Lab");
                const modalInstance = Modal.getInstance(modalEl);

                if (modalInstance) {
                    modalInstance.hide();
                }
            }
        } catch (error) {

        }
    }
    const prescriptionRef = useRef()
    const handleDownload = async () => {
        const element = prescriptionRef.current;
        document.body.classList.add("hide-buttons");
        const opt = {
            margin: [0.2, 0.2, 0.2, 0.2],
            filename: "prescriptions.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 3, useCORS: true },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };
        try {

            await html2pdf().from(element).set(opt).save().then(() => { document.body.classList.remove("hide-buttons"); });
        } catch (error) {

        }

    };
    return (
        <>
            {loading ? <Loader />
                : <section className="new-profile-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12 mb-3">
                                <ProfileSidebar />
                            </div>

                            <div className="col-lg-9 col-sm-12">
                                <div className="profile-right-card">
                                    <div className="profile-tp-header">
                                        <h5 className="heading-grad fz-24 mb-0">Details</h5>
                                    </div>

                                    <div className="">
                                        <div className="employee-tabs">
                                            <ul className="nav nav-tabs gap-3 mt-3 px-3" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-bs-toggle="tab"
                                                        href="#home"
                                                        role="tab"
                                                    >
                                                        Resent Appointments Overview
                                                    </a>
                                                </li>

                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="profile-tab"
                                                        data-bs-toggle="tab"
                                                        href="#profile"
                                                        role="tab"
                                                    >
                                                        Past Appointments
                                                    </a>
                                                </li>

                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="contact-tab"
                                                        data-bs-toggle="tab"
                                                        href="#contact"
                                                        role="tab"
                                                    >
                                                        Personal Details
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="upload-tab"
                                                        data-bs-toggle="tab"
                                                        href="#upload"
                                                        role="tab"
                                                    >
                                                        Prescriptions
                                                    </a>
                                                </li>

                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="report-tab"
                                                        data-bs-toggle="tab"
                                                        href="#report"
                                                        role="tab"
                                                    >
                                                        Lab Reports
                                                    </a>
                                                </li>

                                            </ul>

                                            <div className="">
                                                <div className="employee-tabs">
                                                    <div className="tab-content" id="myTabContent">
                                                        <div className="tab-pane fade show active" id="home" role="tabpanel">
                                                            <div className="all-profile-data-bx">
                                                                <div className="new-panel-card mb-3">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="mb-3">
                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Patient Information</h4>
                                                                            </div>

                                                                            <div className="main-patient-info-bx ">
                                                                                <div className="patient-info-bx flex-grow-1">
                                                                                    <div className="patient-picture-bx">
                                                                                        <img src={patientData?.profileImage ? `${base_url}/${patientData?.profileImage}`
                                                                                            : "/patient-pic.png"} alt="" />
                                                                                        <div className="patient-nw-content">
                                                                                            <h6>{appointmentData?.patientId?.name}</h6>
                                                                                            <p>{appointmentData?.patientId?.unique_id}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="patient-general-details-bx flex-grow-1">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Gender</h5>
                                                                                        <p>{appointmentData?.patientId?.patientId?.gender}</p>
                                                                                    </div>
                                                                                    <div className="general-info-content">
                                                                                        <h5>Age</h5>
                                                                                        <p>{calculateAge(demographic?.dob)} Years</p>
                                                                                    </div>
                                                                                    <div className="general-info-content">
                                                                                        <h5>Blood Group</h5>
                                                                                        <p>{demographic?.bloodGroup}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-grow-1">
                                                                                    <ul className="doctor-social-list">
                                                                                        {appointmentData?.status !== 'completed' && <li className="doctor-social-item">
                                                                                            <button className="doctor-social-btn" onClick={() => appointmentAction('completed')}> <FontAwesomeIcon icon={faMessage} /> </button></li>}
                                                                                        <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faPhone} /> </a></li>
                                                                                        <li className="doctor-social-item"><a href="javascript:void(0)" className="doctor-social-btn" > <FontAwesomeIcon icon={faVideo} /> </a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="new-panel-card">
                                                                    <div className="row">
                                                                        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                                                            <div>
                                                                                <h5 className="new_title mb-0">Appointments Details</h5>
                                                                                <p className="fz-14 fw-500">ID #{appointmentData?.customId}</p>
                                                                            </div>
                                                                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                                {appointmentData?.status !== 'completed' &&
                                                                                    <button className="progress-btn" onClick={() => appointmentAction('completed')}> <FontAwesomeIcon icon={faCheck} /> Mark as in Complete</button>}
                                                                                {!appointmentData?.labTest && 
                                                                                <button className="thm-btn" data-bs-toggle="modal" data-bs-target="#add-Lab"> <BsPlusCircleFill /> Add Lab Test </button>}
                                                                                <Link to={`/doctor/add-prescriptions/${params.id}`} className="thm-btn"> <BsPlusCircleFill /> {appointmentData?.prescriptionId ? 'Edit' : 'Add'} Prescriptions</Link>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                                            <div className="bordr-bx">
                                                                                <div className="mb-3">
                                                                                    <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-lg-6 mb-3">
                                                                                        <div className="general-info-content">
                                                                                            <h5>Created Date</h5>
                                                                                            <p>{new Date(appointmentData?.createdAt)?.toLocaleDateString("en-GB", {
                                                                                                day: "2-digit",
                                                                                                month: "long",
                                                                                                year: "numeric",
                                                                                            })
                                                                                            } </p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-lg-6 mb-3">
                                                                                        <div className="general-info-content">
                                                                                            <h5>Appointment Date</h5>
                                                                                            <p>{formatDateTime(appointmentData?.date)}</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-lg-6 mb-3">
                                                                                        <div className="general-info-content text-capitalize">
                                                                                            <h5>Status</h5>
                                                                                            <p ><span className="pending-data">{appointmentData?.status}</span> </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                                            <div className="mb-3">
                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-lg-12 mb-3">
                                                                                    <div className="general-info-content">
                                                                                        <h5>Fees</h5>
                                                                                        <p>${appointmentData?.fees} </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-6 mb-3">
                                                                                    <div className="general-info-content text-capitalize">
                                                                                        <h5>Payment Status</h5>
                                                                                        <p ><span className="pending-data">{appointmentData?.paymentStatus}</span> </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tab-pane fade" id="profile" role="tabpanel">
                                                            <div className="all-profile-data-bx">

                                                                <div class="accordion custom-accordion" id="myAccordion">
                                                                    {pastAppointments?.length > 0 &&
                                                                        pastAppointments?.map((item, key) => {
                                                                            const collapseId = `collapse-${key}`; // unique id for each accordion
                                                                            const headingId = `heading-${key}`;
                                                                            const toggleId = `toggle-${key}`;

                                                                            return (
                                                                                <div class="accordion-item" key={key}>
                                                                                    <h2 class="accordion-header" id="headingOne">
                                                                                        <button class="accordion-button custom-acc-btn " type="button" data-bs-toggle="collapse"
                                                                                            data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                                                                                            <div>
                                                                                                <h5 className="new_title mb-0">Appointments Details</h5>
                                                                                                <p className="fz-14 fw-500">ID #{item?.customId}</p>
                                                                                            </div>
                                                                                            <span className="toggle-icon"> <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" /></span>

                                                                                        </button>
                                                                                    </h2>
                                                                                    <div id={collapseId} class="accordion-collapse collapse show" aria-labelledby={headingId}
                                                                                        data-bs-parent="#myAccordion">
                                                                                        <div class="accordion-body">
                                                                                            <div className="row">
                                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                                    <div className="bordr-bx">
                                                                                                        <div className="mb-3">
                                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Appointment Information</h4>
                                                                                                        </div>
                                                                                                        <div className="row">
                                                                                                            <div className="col-lg-6 mb-3">
                                                                                                                <div className="general-info-content">
                                                                                                                    <h5>Created Date</h5>
                                                                                                                    <p>{new Date(item?.createdAt).toLocaleDateString("en-GB", {
                                                                                                                        day: "2-digit",
                                                                                                                        month: "long",
                                                                                                                        year: "numeric",
                                                                                                                    })
                                                                                                                    }  </p>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div className="col-lg-6 mb-3">
                                                                                                                <div className="general-info-content">
                                                                                                                    <h5>Appointment Date</h5>
                                                                                                                    <p>{formatDateTime(item?.date)}</p>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <div className="col-lg-6 mb-3">
                                                                                                                <div className="general-info-content">
                                                                                                                    <h5>Status</h5>
                                                                                                                    <p >{item?.status == 'cancel' || item?.status == 'rejected' ? <span className="cancel-data">Canceled</span>
                                                                                                                        : <span className="complete-data text-capitalize">{item?.status}</span>}
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {/* <div className="col-lg-6 mb-3">
                                                                                                                <div className="general-info-content">
                                                                                                                    <h5>Ratting</h5>
                                                                                                                    <p ><span className="" style={{ color: "#FFAA78" }}> <FontAwesomeIcon icon={faStar} /> </span> 5</p>
                                                                                                                </div>
                                                                                                            </div> */}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {item?.prescriptionId &&
                                                                                                        <div className="pe-lg-3 pe-sm-0 bordr-bx">
                                                                                                            <div className="mb-3">
                                                                                                                <h4 className="first_para fz-20 fw-700 mb-0">Prescriptions</h4>
                                                                                                            </div>
                                                                                                            <div className="prescriptin-bx">
                                                                                                                <div className="prescriptin-content">
                                                                                                                    <div className="prescriptin-picture">
                                                                                                                        <img src="/prescriptin-pic.png" alt="" />
                                                                                                                        <div>
                                                                                                                            <p>Prescription Date</p>
                                                                                                                            <h6>{new Date(item?.prescriptionId?.createdAt).toLocaleDateString("en-GB", {
                                                                                                                                day: "2-digit",
                                                                                                                                month: "long",
                                                                                                                                year: "numeric",
                                                                                                                            })
                                                                                                                            } </h6>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                                                        <div className="switch">
                                                                                                                            <input type="checkbox" checked={item?.prescriptionId?.status == 'Active'}
                                                                                                                                onChange={(e) => prescriptionAction(item, e.target.checked)} id="toggle7" />
                                                                                                                            <label for="toggle7"></label>
                                                                                                                        </div>
                                                                                                                        <div>
                                                                                                                            {/* <a href="javascript:void(0)" className="grid-dots-btn"><TbGridDots /></a> */}
                                                                                                                            <div className="dropdown">
                                                                                                                                <a
                                                                                                                                    href="javascript:void(0)"
                                                                                                                                    className="grid-dots-btn"
                                                                                                                                    id="acticonMenu1"
                                                                                                                                    data-bs-toggle="dropdown"
                                                                                                                                    aria-expanded="false"
                                                                                                                                >
                                                                                                                                    <TbGridDots />
                                                                                                                                </a>
                                                                                                                                <ul
                                                                                                                                    className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                                                                                    aria-labelledby="acticonMenu1"
                                                                                                                                >
                                                                                                                                    <li className="prescription-item">
                                                                                                                                        <NavLink to={`/doctor/add-prescriptions/${item?._id}`} className="prescription-nav" href="#" >
                                                                                                                                            Edit
                                                                                                                                        </NavLink>
                                                                                                                                    </li>
                                                                                                                                    <li className="prescription-item">
                                                                                                                                        <NavLink to="#" className="prescription-nav" onClick={() => setPastPresData(item?.prescriptionId)} data-bs-toggle="modal" data-bs-target="#prescription-Modal" >
                                                                                                                                            View
                                                                                                                                        </NavLink>
                                                                                                                                    </li>
                                                                                                                                    <li className="prescription-item">
                                                                                                                                        <NavLink className="prescription-nav" onClick={() => deletePrescription(item?.prescriptionId?._id)} >
                                                                                                                                            Delete
                                                                                                                                        </NavLink>
                                                                                                                                    </li>
                                                                                                                                </ul>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>}
                                                                                                </div>

                                                                                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                                    <div className="mb-3">
                                                                                                        <h4 className="first_para fz-20 fw-700 mb-0">Payment Information</h4>
                                                                                                    </div>
                                                                                                    <div className="row">
                                                                                                        <div className="col-lg-12 mb-3">
                                                                                                            <div className="general-info-content">
                                                                                                                <h5>Fees</h5>
                                                                                                                <p>${item?.fees} </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-lg-6 mb-3">
                                                                                                            <div className="general-info-content">
                                                                                                                <h5>Payment Status</h5>
                                                                                                                <p ><span className="complete-data text-capitalize">{item?.paymentStatus}</span> </p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {item?.labTest && <div className="">
                                                                                                        <div className="mb-3">
                                                                                                            <h4 className="first_para fz-20 fw-700 mb-0">Lab tests prescribed by the doctor</h4>
                                                                                                        </div>
                                                                                                        <div className="lab-parent-bx">
                                                                                                            <div className="nw-presc-lab-bx">
                                                                                                                <img src="/lab-pic.png" alt="" />
                                                                                                                <div className="appointment-info-details">
                                                                                                                    <h4 className="">Advance Lab Tech</h4>
                                                                                                                    <p className=""><FontAwesomeIcon icon={faLocationDot} /> Malviya Nagar, Jaipur</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="prescriptin-bx my-3">
                                                                                                            <div className="prescriptin-content">
                                                                                                                <div className="prescriptin-picture lab-test-bx">
                                                                                                                    <img src="/lab-tube.svg" alt="" style={{ width: "50px", height: "50px" }} />
                                                                                                                    <div>
                                                                                                                        <h6 className="fz-18 fw-700 mb-0">CBC Report</h6>
                                                                                                                        <p>30 June 2025</p>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                                <div>
                                                                                                                    <a href="javascript:void(0)" className="thm-btn thm-outline-btn rounded-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download</a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>}

                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>)
                                                                        })}

                                                                </div>


                                                            </div>


                                                        </div>

                                                        <div className="tab-pane fade" id="contact" role="tabpanel">
                                                            <div className="all-profile-data-bx">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div>
                                                                            <div className=" patient-details-bx mb-3">
                                                                                <div className="admin-table-sub-bx patient-avartr-bx gap-3">
                                                                                    <img src={patientData?.profileImage ? `${base_url}/${patientData?.profileImage}`
                                                                                        : "/table-avatar.jpg"} alt="" />
                                                                                    <div className=" patient-bio-content">
                                                                                        <h6>{patientData?.name}</h6>
                                                                                        <p>ID: {appointmentData?.patientId?.unique_id}</p>
                                                                                    </div>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                        <div className="new-item-list p-0 mt-0">
                                                                            <fieldset class="address-fieldset mb-4">
                                                                                <legend class="float-none w-auto px-3 field-title">
                                                                                    Personal  Info
                                                                                </legend>
                                                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                                                    <ul className="patient-bio-list">
                                                                                        <li className="patient-bio-item"><FontAwesomeIcon icon={faPerson} /> Age :<span className="patient-bio-title"> {calculateAge(demographic?.dob)}</span> </li>
                                                                                        <li className="patient-bio-item"><FontAwesomeIcon icon={faMarsAndVenus} /> Gender :<span className="patient-bio-title text-capitalize"> {patientData?.gender}</span> </li>
                                                                                        <li className="patient-bio-item"><FontAwesomeIcon icon={faRulerVertical} /> Height :<span className="patient-bio-title"> {demographic?.height}  </span> </li>
                                                                                        <li className="patient-bio-item"><FontAwesomeIcon icon={faWeightScale} /> Weight :<span className="patient-bio-title"> {demographic?.weight} </span> </li>
                                                                                        <li className="patient-bio-item"><FontAwesomeIcon icon={faDroplet} /> Blood Group :<span className="patient-bio-title"> {demographic?.bloodGroup}</span> </li>
                                                                                    </ul>
                                                                                    <div>

                                                                                    </div>
                                                                                </div>
                                                                            </fieldset>

                                                                            <fieldset class="address-fieldset mb-4">
                                                                                <legend class="float-none w-auto px-3 field-title">
                                                                                    Medical History
                                                                                </legend>

                                                                                <div className="medical-history-content">
                                                                                    <div>
                                                                                        <h4 className="fz-16 fw-700">Do you have any chronic conditions?</h4>
                                                                                        <h5 className="hearth-disese">{medicalHistory?.chronicCondition}</h5>
                                                                                    </div>

                                                                                    <div className="mt-3">
                                                                                        <h4 className="fz-16 fw-700">Are you currently on any medications?</h4>
                                                                                        <h5 className="hearth-disese">{medicalHistory?.onMedication ? 'Yes' : 'No'}</h5>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="medical-history-content my-3">
                                                                                    <div>
                                                                                        <h4 className="fz-16 fw-700">Medication Details</h4>
                                                                                        <p>{medicalHistory?.medicationDetail}</p>
                                                                                    </div>

                                                                                    <div className="mt-3">
                                                                                        <h4 className="fz-16 fw-700">Allergies</h4>
                                                                                        <p>{medicalHistory?.allergies}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </fieldset>
                                                                            <fieldset class="address-fieldset mb-4">
                                                                                <legend class="float-none w-auto px-3 field-title">
                                                                                    Family Medical History
                                                                                </legend>

                                                                                <div className="medical-history-content ">
                                                                                    <div>
                                                                                        <h4 className="fz-16 fw-700">Any family history of chronic disease?</h4>
                                                                                        <h5 className="hearth-disese">{medicalHistory?.familyHistory?.chronicHistory}</h5>

                                                                                    </div>
                                                                                    <div className="mt-3">
                                                                                        <h4 className="fz-16 fw-700">Chronic Diseases in Family</h4>
                                                                                        <p> {medicalHistory?.familyHistory?.diseasesInFamily}</p>
                                                                                    </div>
                                                                                </div>

                                                                            </fieldset>

                                                                            <fieldset class="address-fieldset mb-4">
                                                                                <legend class="float-none w-auto px-3 field-title">
                                                                                    Prescriptions and Reports
                                                                                </legend>

                                                                                <div className="row">
                                                                                    {prescription?.length > 0 &&
                                                                                        prescription?.map((item, key) =>
                                                                                            <div className="col-lg-6 col-sm-12 mb-3" key={key}>
                                                                                                <div className="prescription-patients-card">
                                                                                                    <div className="prescription-patients-picture">
                                                                                                        <img src={item?.fileUrl ?
                                                                                                            `${base_url}/${item?.fileUrl}` : "/patient-card-one.png"} alt="" />
                                                                                                    </div>
                                                                                                    <div className="card-details-bx">
                                                                                                        <div className="card-info-title">
                                                                                                            <h3>{item?.name}</h3>
                                                                                                            {/* <p>8/21/2025</p> */}
                                                                                                        </div>
                                                                                                        <div className="">
                                                                                                            <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>)}
                                                                                </div>
                                                                            </fieldset>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tab-pane fade" id="upload" role="tabpanel">
                                                            <div className="all-profile-data-bx">
                                                                <div className="">
                                                                    <div className="row">
                                                                        {pastAppointments?.filter(item => item?.prescriptionId !== null)?.length > 0 ?
                                                                            pastAppointments?.filter(item => item?.prescriptionId !== null)?.map((item, key) =>
                                                                                <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={key}>
                                                                                    <div className="qrcode-prescriptions-bx">
                                                                                        <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                            <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                                <img src="/prescriptions.png" alt="" className="rounded-0" />
                                                                                                <div>
                                                                                                    <h6 className="fs-16 fw-600 text-black">Prescriptions</h6>
                                                                                                    <p className="fs-14 fw-500">RE-{item?.prescriptionId?.customId}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div>
                                                                                                <span className="active-barcode">{item?.prescriptionId?.status}</span>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="barcode-active-bx">
                                                                                            <div className="mb-2">
                                                                                                <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                                    <div className="admin-table-bx gap-2">
                                                                                                        <img src={profiles?.profileImage ? `${base_url}/${profiles?.profileImage}`
                                                                                                            : "/doctor-timing.png"} alt="" />
                                                                                                        <div>
                                                                                                            <h6>{profiles?.name}</h6>
                                                                                                            <p className="fs-14 fw-500">{customId}</p>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="d-flex align-items-center gap-2">
                                                                                                        <button className="card-sw-btn" ><FontAwesomeIcon icon={faPrint} /></button>
                                                                                                        <button onClick={() => setPastPresData(item?.prescriptionId)} className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="barcd-scannr barcde-scnnr-card">
                                                                                                <div className="barcd-content">
                                                                                                    <h4 className="mb-1">SP-{item?.prescriptionId?.customId}</h4>
                                                                                                    <ul class="qrcode-list">
                                                                                                        <li class="qrcode-item">Test  <span class="qrcode-title">: {item?.prescriptionId?.diagnosis}</span></li>
                                                                                                        <li class="qrcode-item">Draw  <span class="qrcode-title"> : {new Date(item?.prescriptionId?.createdAt)?.toLocaleString()}</span> </li>
                                                                                                    </ul>
                                                                                                    {/* <img src="/barcode.png" alt="" /> */}
                                                                                                    <Barcode value={item.customId} width={1.8} displayValue={false}
                                                                                                        height={60} />
                                                                                                </div>
                                                                                                <div className="barcode-id-details">
                                                                                                    <div>
                                                                                                        <h6>Patient Id </h6>
                                                                                                        <p>{appointmentData?.patientId?.unique_id}</p>
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <h6>Appointment ID </h6>
                                                                                                        <p>{item?.customId}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>) : 'No prescription'}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="tab-pane fade" id="report" role="tabpanel">
                                                            <div className="all-profile-data-bx">
                                                                <div className="">
                                                                    <div className="row">
                                                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                            <div className="qrcode-prescriptions-bx">
                                                                                <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                    <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                        <img src="/reprt-plus.png" alt="" className="rounded-0" />
                                                                                        <div>
                                                                                            <h6 className="fs-16 fw-600 text-black">Final Diagnostic Report</h6>
                                                                                            <p className="fs-14 fw-500">RE-89767</p>

                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="barcode-active-bx">
                                                                                    <div className="mb-2">
                                                                                        <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                            <div>
                                                                                                <h6>Advance Lab Tech</h6>
                                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                                <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                            </div>

                                                                                        </div>

                                                                                    </div>


                                                                                    <div className="barcd-scannr barcde-scnnr-card">
                                                                                        <div className="barcd-content">
                                                                                            <h4 className="mb-1">SP-9879</h4>

                                                                                            <ul class="qrcode-list">
                                                                                                <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                                <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                            </ul>

                                                                                            <img src="/barcode.png" alt="" />
                                                                                        </div>

                                                                                        <div className="barcode-id-details">
                                                                                            <div>
                                                                                                <h6>Patient Id </h6>
                                                                                                <p>PS-9001</p>
                                                                                            </div>


                                                                                            <div>
                                                                                                <h6>Appointment ID </h6>
                                                                                                <p>OID-8876</p>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div className="text-center mt-3">
                                                                                        <button className="pdf-download-tbn py-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download Report</button>

                                                                                    </div>

                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                            <div className="qrcode-prescriptions-bx">
                                                                                <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                    <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                        <img src="/reprt-plus.png" alt="" className="rounded-0" />
                                                                                        <div>
                                                                                            <h6 className="fs-16 fw-600 text-black">Final Diagnostic Report</h6>
                                                                                            <p className="fs-14 fw-500">RE-89767</p>

                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="barcode-active-bx">
                                                                                    <div className="mb-2">
                                                                                        <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                            <div>
                                                                                                <h6>Advance Lab Tech</h6>
                                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                                <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                            </div>

                                                                                        </div>

                                                                                    </div>


                                                                                    <div className="barcd-scannr barcde-scnnr-card">
                                                                                        <div className="barcd-content">
                                                                                            <h4 className="mb-1">SP-9879</h4>

                                                                                            <ul class="qrcode-list">
                                                                                                <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                                <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                            </ul>

                                                                                            <img src="/barcode.png" alt="" />
                                                                                        </div>

                                                                                        <div className="barcode-id-details">
                                                                                            <div>
                                                                                                <h6>Patient Id </h6>
                                                                                                <p>PS-9001</p>
                                                                                            </div>


                                                                                            <div>
                                                                                                <h6>Appointment ID </h6>
                                                                                                <p>OID-8876</p>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div className="text-center mt-3">
                                                                                        <button className="pdf-download-tbn py-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download Report</button>

                                                                                    </div>

                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                                                            <div className="qrcode-prescriptions-bx">
                                                                                <div className="admin-table-bx d-flex align-items-center justify-content-between qr-cd-headr">
                                                                                    <div className="admin-table-sub-details final-reprt d-flex align-items-center gap-2">
                                                                                        <img src="/reprt-plus.png" alt="" className="rounded-0" />
                                                                                        <div>
                                                                                            <h6 className="fs-16 fw-600 text-black">Final Diagnostic Report</h6>
                                                                                            <p className="fs-14 fw-500">RE-89767</p>

                                                                                        </div>
                                                                                    </div>

                                                                                </div>

                                                                                <div className="barcode-active-bx">
                                                                                    <div className="mb-2">
                                                                                        <div className="admin-table-sub-details d-flex align-items-center justify-content-between doctor-title ">
                                                                                            <div>
                                                                                                <h6>Advance Lab Tech</h6>
                                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                                            </div>
                                                                                            <div className="d-flex align-items-center gap-2">
                                                                                                <button className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                                                <button className="card-sw-btn" data-bs-toggle="modal" data-bs-target="#prescription-Modal"><FontAwesomeIcon icon={faEye} /></button>
                                                                                            </div>

                                                                                        </div>

                                                                                    </div>


                                                                                    <div className="barcd-scannr barcde-scnnr-card">
                                                                                        <div className="barcd-content">
                                                                                            <h4 className="mb-1">SP-9879</h4>

                                                                                            <ul class="qrcode-list">
                                                                                                <li class="qrcode-item">Test  <span class="qrcode-title">: CBC</span></li>
                                                                                                <li class="qrcode-item">Draw  <span class="qrcode-title"> : 25-11-03  08:07</span> </li>
                                                                                            </ul>

                                                                                            <img src="/barcode.png" alt="" />
                                                                                        </div>

                                                                                        <div className="barcode-id-details">
                                                                                            <div>
                                                                                                <h6>Patient Id </h6>
                                                                                                <p>PS-9001</p>
                                                                                            </div>


                                                                                            <div>
                                                                                                <h6>Appointment ID </h6>
                                                                                                <p>OID-8876</p>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>

                                                                                    <div className="text-center mt-3">
                                                                                        <button className="pdf-download-tbn py-2"><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download Report</button>

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
                                            </div>
                                        </div>

                                    </div>




                                </div>
                            </div>

                        </div>
                    </div>

                </section>}

            {/*prescription-Modal Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#prescription-Modal" */}
            {pastPresData &&
                <div className="modal fade step-modal" id="prescription-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content rounded-5" >
                            <div className="d-flex align-items-center justify-content-between border-bottom p-4">
                                <div>
                                    <h6 className="heading-grad mb-0 fz-24"> Prescription</h6>
                                </div>
                                <div>
                                    <button type="button" onClick={() => setPastPresData(null)} className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                </div>
                            </div>
                            <div className="modal-body p-4" ref={prescriptionRef}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="view-report-card">
                                            <div className="view-report-header">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="active-barcode">{pastPresData?.status}</span>
                                                        <h5>{pastPresData?.customId}</h5>
                                                        <h6>Date: {new Date(pastPresData?.createdAt).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "long",
                                                            year: "numeric",
                                                        })
                                                        } </h6>
                                                    </div>

                                                    <div className="d-flex gap-2">
                                                        <button className="fz-18 no-print" onClick={handleDownload}><FontAwesomeIcon icon={faDownload} /> </button>
                                                        <button className="fz-18 no-print"><FontAwesomeIcon icon={faPrint} /> </button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="view-report-content">
                                                <div className="sub-content-title">
                                                    <h4>RX.</h4>
                                                    <h3><BsCapsule style={{ color: "#00B4B5" }} /> Medications</h3>
                                                </div>

                                                {pastPresData?.medications?.map((item, key) =>
                                                    <div className="view-medications-bx mb-3" key={key}>
                                                        <h5>{key + 1}. {item?.name}</h5>
                                                        <ul className="viwe-medication-list">
                                                            <li className="viwe-medication-item">Frequency: {item?.frequency} </li>
                                                            <li className="viwe-medication-item">Duration: {item?.duration}</li>
                                                            <li className="viwe-medication-item">Instructions: {item?.instructions}</li>
                                                            <li className="viwe-medication-item">Refills: {item?.refills} </li>

                                                        </ul>
                                                    </div>)}



                                                <div className="diagnosis-bx mb-3">
                                                    <h5>Diagnosis</h5>
                                                    <p>{pastPresData?.diagnosis}</p>
                                                </div>

                                                {/* <div className="diagnosis-bx mb-3">
                                                    <h5>Diagnosis</h5>
                                                    <p>-</p>
                                                </div> */}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            {/*  prescription-Modal Popup End */}
            {/* <!-- Add Lab Test Popup Start --> */}
            {/* <!--  data-bs-toggle="modal" data-bs-target="#add-Lab" --> */}
            <div className="modal step-modal" id="add-Lab" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-0">
                        <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
                            <div>
                                <h6 className="heading-grad fz-24 mb-0">Add Lab Test </h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "rgba(239, 0, 0, 1)" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body pb-5 px-4 pb-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="add-deprtment-pic">
                                        <img src="/add-lab.png" alt="" />
                                        <p className="pt-2">Please add new lab test assign to patient</p>
                                    </div>

                                    <form onSubmit={handleTestSubmit}>
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Select Lab</label>
                                            <div class="select-wrapper">
                                                <Select
                                                    options={labOptions}
                                                    required
                                                    name="labId"
                                                    // value={treatmentValue}
                                                    classNamePrefix="custom-select"
                                                    placeholder="Select areas(s)"
                                                    onChange={(selectedOptions) => {
                                                        setSelectedLab(selectedOptions.value)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Test Select</label>
                                            <div class="select-wrapper">
                                                <Select
                                                    options={testOptions}
                                                    isMulti
                                                    required
                                                    name="testId"
                                                    // value={se}
                                                    classNamePrefix="custom-select"
                                                    placeholder="Select areas(s)"
                                                    onChange={(options) => {
                                                        setSelectedTest(options.map(opt => opt.value)); // ✅ array of IDs
                                                    }}
                                                />
                                            </div>

                                        </div>

                                        <div className="mt-3">
                                            <button type="submit" className="nw-thm-btn w-100"> Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Add Lab Test Popup End --> */}

        </>
    )
}

export default DoctorDetailsView