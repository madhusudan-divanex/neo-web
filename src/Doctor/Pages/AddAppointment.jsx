
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { BsPlusCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Select from 'react-select'
import { getSecureApiData, securePostData } from "../../Services/api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorDetail } from "../../Redux/features/doctor";
import { useNavigate } from "react-router-dom";

function AddAppointment() {
    const dispath=useDispatch()
    const navigate=useNavigate()
    const [users, setUsers] = useState()
    const doctorId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [patientId, setPatientId] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const {aboutDoctor}=useSelector(state=>state.doctor)
    async function fetchPendingRequest() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`patient/all?limit=100000`)
            if (result.success) {
                const formattedOptions = result.data.map(user => ({
                    value: user._id,   // or user._id depending on your data
                    label: user.name, // display name
                }));
                setUsers(formattedOptions)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPendingRequest()
    }, [])
    const handleBook = async (e) => {
        e.preventDefault();

        if (!patientId || !date || !time) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);

        try {
            // Combine date + time into Date object
            const appointmentDate = new Date(`${date}T${time}`);

            const data = {
                patientId,
                doctorId,
                date: appointmentDate, 
                fees:aboutDoctor?.fees
            };

            const response = await securePostData("appointment/doctor", data);

            if (response?.success) {
                toast.success("Appointment add successfully!");
                // reset form if needed
                setPatientId("");
                setDate("");
                setTime("");
                navigate('/doctor/requests')
            } else {
                toast.error(response?.message || "Booking failed");
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        dispath(fetchDoctorDetail())
    },[dispath])
    return (
        <>
            <section className="new-profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-sm-12 mb-3">
                            <ProfileSidebar />
                        </div>

                        <div className="col-lg-9 col-sm-12">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0"> Add Appointment</h5>
                                </div>
                                <div className="all-profile-data-bx">
                                    <form onSubmit={handleBook}>
                                        <div className="new-panel-card mb-3">
                                            <div className="row">
                                                <div>
                                                    <h5 className="text-black fz-18 fw-700">Appointment Details</h5>
                                                    <p className="fz-16 fw-400">Enter the details for the new appointment.</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Appointment Date</label>
                                                        <input type="date"
                                                            value={date} onChange={(e) => setDate(e.target.value)}
                                                            className="form-control new-control-frm" placeholder="" />

                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Appointment Time</label>
                                                        <input type="time"
                                                            value={time} onChange={(e) => setTime(e.target.value)}
                                                            className="form-control new-control-frm" placeholder="" />

                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="new-panel-card ">
                                            <div className="row">
                                                <div className="d-flex align-item-center justify-content-between flex-wrap">
                                                    <div>
                                                        <h5 className="text-black fz-18 fw-700">Select Patient</h5>
                                                        <p className="fz-16 fw-400">select a patient for this appointment.</p>
                                                    </div>

                                                    {/* <div>
                                                        <button className="nw-exprt-btn"><BsPlusCircleFill /> Add Patient</button>
                                                    </div> */}
                                                </div>



                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label>Patient</label>
                                                        <div className="select-wrapper">

                                                            <Select
                                                                options={users}
                                                                name="patientId"
                                                                classNamePrefix="custom-select"
                                                                placeholder="Select patient"
                                                                onChange={(selectedOption) => {
                                                                    setPatientId(selectedOption.value);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        <div className="text-end mt-3">
                                            <button className="nw-thm-btn">Submit</button>
                                        </div>

                                    </form>
                                </div>





                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default AddAppointment