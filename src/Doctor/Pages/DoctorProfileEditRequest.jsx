import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faCheckCircle, faCircleXmark, faEdit } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { fetchDoctorDetail } from "../../Redux/features/doctor"
import { useEffect, useState } from "react"
import base_url from "../../baseUrl"
import { toast } from "react-toastify"
import { securePostData } from "../../Services/api"
import { Modal } from "bootstrap"
import Loader from "../../Loader/Loader"
import { Link } from "react-router-dom"

function DoctorProfileEditRequest() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const userId = localStorage.getItem('userId')
    const [message, setMessage] = useState('')
    const { profiles, kyc, medicalLicense, allowEdit, aboutDoctor, educationWork, customId, isRequest } = useSelector(state => state.doctor)
    useEffect(() => {
        dispatch(fetchDoctorDetail())
    }, [dispatch])
    const sendEditRequest = async () => {
        if (message == '') {
            toast.error("Please enter the reason")
            return
        }
        setLoading(true)
        const data = { doctorId: userId, message }
        try {
            const response = await securePostData(`doctor/edit-request`, data);
            if (response.success) {
                const modalEl = document.getElementById("edit-Request");
                const modalInstance = Modal.getInstance(modalEl);

                if (modalInstance) {
                    modalInstance.hide();
                }
                setMessage('')
                dispatch(fetchDoctorDetail())
                toast.success("You request was sent!")
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? <Loader />
                : <section className="new-profile-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3  col-sm-12 mb-3">
                                <ProfileSidebar />
                            </div>

                            <div className="col-lg-9 col-sm-12">
                                <div className="profile-right-card">
                                    <div className="profile-tp-header">
                                        <div className="d-flex align-items-center justify-content-between flex-wrap ">
                                            <div>
                                                <h5 className="heading-grad fz-24 mb-0">Profile</h5>
                                            </div>

                                            {!isRequest && <div>
                                                <a href="javascript:void(0)" className="nw-thm-btn outline" data-bs-toggle="modal" data-bs-target="#edit-Request"> <FontAwesomeIcon icon={faEdit} /> Send Edit Request </a>
                                            </div>}
                                            {allowEdit &&
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="approve-title">
                                                        <h5><span className="approve-right-check">
                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                        </span> Accept Edit Request </h5>
                                                    </div>

                                                    <Link to='/doctor/edit-profile' className="nw-thm-btn outline" > <FontAwesomeIcon icon={faEdit} /> Edit now</Link>
                                                </div>}
                                        </div>
                                    </div>
                                    <div className="all-profile-data-bx">
                                        <div>
                                            <div className="doctor-information-card mb-4">
                                                <div className="doctor-main-profile-card">
                                                    <div className="doctor-profile-pic">
                                                        <img src={profiles?.profileImage ?
                                                            `${base_url}/${profiles?.profileImage}` : "/call-pic.jpg"} alt="" />
                                                    </div>
                                                    <div className="doctor-content-details">
                                                        <div className="doctor-info-heading">
                                                            <h4>Dr. {profiles?.name} </h4>
                                                            <p>{customId}</p>
                                                        </div>

                                                        <div className="doctor-info-list">
                                                            <div className="doctor-info-item">
                                                                <h6>Mobile Number</h6>
                                                                <p>{profiles?.contactNumber}</p>
                                                            </div>

                                                            <div className="doctor-info-item">
                                                                <h6>Gender</h6>
                                                                <p className="text-capitalize">{profiles?.gender}</p>
                                                            </div>

                                                            <div className="doctor-info-item">
                                                                <h6>Email</h6>
                                                                <p>{profiles?.email}</p>
                                                            </div>

                                                            <div className="doctor-info-item">
                                                                <h6>Date of Birth</h6>
                                                                <p>{new Date(profiles?.dob)?.toLocaleDateString()}</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>

                                            <fieldset class="address-fieldset mb-4">
                                                <legend class="float-none w-auto px-3 field-title">
                                                    Address & About You
                                                </legend>
                                                <div className="doctor-hospital-info">
                                                    <div className="doctor-hospital-pic mb-2" >
                                                        <img src="/hospital.svg" alt="" />
                                                        <h5>{aboutDoctor?.hospitalName?.name}</h5>
                                                    </div>

                                                    <div className="doctor-info-list mb-3">
                                                        <div className="doctor-info-item">
                                                            <h6>Full Address</h6>
                                                            <p>{aboutDoctor?.fullAddress} </p>
                                                        </div>

                                                        <div className="doctor-info-item">
                                                            <h6>Country</h6>
                                                            <p>{aboutDoctor?.countryId?.name}</p>
                                                        </div>

                                                        <div className="doctor-info-item">
                                                            <h6>State</h6>
                                                            <p>{aboutDoctor?.stateId?.name}</p>
                                                        </div>

                                                        <div className="doctor-info-item">
                                                            <h6>City</h6>
                                                            <p>{aboutDoctor?.cityId?.name}</p>
                                                        </div>

                                                        <div className="doctor-info-item">
                                                            <h6>Pin code</h6>
                                                            <p>{aboutDoctor?.pinCode}</p>
                                                        </div>

                                                    </div>

                                                    <div className="doctor-info-list mb-3">
                                                        <div className="doctor-info-item">
                                                            <h6>Specialty</h6>
                                                            <p>{aboutDoctor?.specialty}</p>
                                                        </div>

                                                        <div className="doctor-info-item">
                                                            <h6>Treatment Areas</h6>
                                                            <p>{aboutDoctor?.treatmentAreas?.map(i => i).join(', ')}</p>
                                                        </div>
                                                    </div>

                                                    <div className="doctor-info-list mb-3">
                                                        <div className="doctor-info-item">
                                                            <h6>Fees</h6>
                                                            <p>${aboutDoctor?.fees}</p>
                                                        </div>

                                                        <div className="doctor-info-item">
                                                            <h6>Languages</h6>
                                                            <p>{aboutDoctor?.language?.map(i => i).join(', ')}</p>
                                                        </div>



                                                    </div>

                                                    <div className="doctor-info-list mb-3">
                                                        <div className="doctor-info-item">
                                                            <h6>About</h6>
                                                            <p>{aboutDoctor?.aboutYou}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </fieldset>
                                        </div>

                                        <div>

                                            <fieldset class="address-fieldset mb-4">
                                                <legend class="float-none w-auto px-3 field-title">
                                                    Education
                                                </legend>

                                                {educationWork?.education?.map((item, key) =>
                                                    <div className="doctor-hospital-info" key={key}>
                                                        <div className="doctor-hospital-pic align-items-start">
                                                            <img src="/chevron-one.svg" alt="" />
                                                            <div>
                                                                <h5>{item?.university}</h5>
                                                                <p>{item?.degree}</p>
                                                            </div>

                                                            <div className="ms-auto">
                                                                <p>{item?.startYear} to {item?.endYear}</p>
                                                            </div>

                                                        </div>
                                                    </div>)}
                                            </fieldset>
                                        </div>


                                        <div>



                                            <fieldset class="address-fieldset mb-4">
                                                <legend class="float-none w-auto px-3 field-title">
                                                    Work & Experience
                                                </legend>

                                                {educationWork?.work?.map((item, key) =>
                                                    <div className="doctor-hospital-info" key={key}>
                                                        <div className="doctor-hospital-pic align-items-start">
                                                            <img src="/chevron-two.svg" alt="" />
                                                            <div>
                                                                <h5>{item?.organization}</h5>
                                                                <p>{item?.totalYear} Years {item?.month} months</p>
                                                            </div>

                                                            {item?.present && <div className="ms-auto">
                                                                <p><span style={{ color: "#34A853" }}><FontAwesomeIcon icon={faCheckCircle} /></span> Present</p>
                                                            </div>}


                                                        </div>
                                                    </div>)}
                                            </fieldset>
                                        </div>

                                        <div>


                                            <fieldset class="address-fieldset mb-4">
                                                <legend class="float-none w-auto px-3 field-title">
                                                    Medical License
                                                </legend>

                                                {medicalLicense?.medicalLicense?.map((item, key) =>
                                                    <div className="doctor-hospital-info mb-3" key={key}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="doctor-hospital-pic align-items-start">
                                                                <img src="/chevron-three.svg" alt="" />
                                                                <h5>{item?.certName}</h5>
                                                            </div>


                                                        </div>

                                                        <div className="doctor-license-upload">
                                                            <div className="doctor-license-pic">
                                                                <img src={item?.certFile ?
                                                                    `${base_url}/${item?.certFile}` : "/doctor-license.png"} alt="" />
                                                            </div>
                                                        </div>

                                                    </div>)}


                                            </fieldset>

                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>}

            {/*Payment Status Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#edit-Request" */}
            <div className="modal step-modal" id="edit-Request" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-5">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-4">
                            <div>
                                <h6 className="heading-grad mb-0 fz-24"> Edit Request from Admin</h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#EF0000" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body p-4">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="edit-request-bx mb-3">
                                        <div className="float-left">
                                            <img src="/edit-reqest.png" alt="" />
                                            <div className="float-right">
                                                <p>The user has requested to update their profile details.This includes modifying personal information such as name, photo, contact details, and other relevant fields.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-10">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Note</label>
                                        <textarea name="" value={message} onChange={(e) => setMessage(e.target.value)} id="" className="form-control new-control-frm" placeholder=""></textarea>

                                    </div>

                                    <div>
                                        <button onClick={sendEditRequest} className="nw-thm-btn w-100">Send Edit Request </button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/*  Payment Status Popup End */}

        </>
    )
}

export default DoctorProfileEditRequest