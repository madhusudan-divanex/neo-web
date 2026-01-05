
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { BsPlusCircleFill } from "react-icons/bs";

function AddAppointment() {
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
                                    <form action="">
                                        <div className="new-panel-card mb-3">
                                            <div className="row">
                                                <div>
                                                    <h5 className="text-black fz-18 fw-700">Appointment Details</h5>
                                                    <p className="fz-16 fw-400">Enter the details for the new appointment.</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Appointment Date</label>
                                                        <input type="date" className="form-control new-control-frm" placeholder="" />

                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Appointment Time</label>
                                                        <input type="time" className="form-control new-control-frm" placeholder="" />

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
                                                        <div className="field custom-frm-bx mb-0 custom-select nw-custom-select">
                                                            <select className="nw-select">
                                                                <option selected>---Select Patient ---</option>
                                                                <option>Female</option>
                                                                <option>Other</option>
                                                            </select>
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