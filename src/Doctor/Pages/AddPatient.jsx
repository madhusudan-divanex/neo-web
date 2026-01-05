import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { BsPlusCircleFill } from "react-icons/bs";


function AddPatient() {
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
                                    <h5 className="heading-grad fz-24 mb-0">Add Patient</h5>
                                </div>

                                <div className="all-profile-data-bx">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Patient ID</label>
                                                    <input type="text" className="form-control new-control-frm" placeholder="Enter Patient ID" />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Patient Name </label>
                                                    <input type="text" className="form-control new-control-frm" placeholder="Enter Patient Name " />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Date of Birth</label>
                                                    <input type="date" className="form-control new-control-frm" placeholder="Enter " />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>Gender</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select">
                                                        <select className="nw-select">
                                                            <option selected>---Select Gender---</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Mobile Number</label>
                                                    <input type="number" className="form-control new-control-frm" placeholder="Enter  mobile number " />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Email</label>
                                                    <input type="email" className="form-control new-control-frm" placeholder="Enter  Email " />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Emergency contact person name</label>
                                                    <input type="text" className="form-control new-control-frm" placeholder="Emergency contact person name" />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Emergency Contact Phone</label>
                                                    <input type="number" className="form-control new-control-frm" placeholder="Enter  Emergency Contact Phone" />

                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Address</label>
                                                    <textarea name="" id="" className="form-control new-control-frm"></textarea>


                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>State</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select">
                                                        <select className="nw-select">
                                                            <option selected>---Select State---</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>City</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select">
                                                        <select className="nw-select">
                                                            <option selected>---Select City---</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Pin code</label>
                                                    <input type="number" className="form-control new-control-frm" placeholder="Enter Pin code" />

                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>Status</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select">
                                                        <select className="nw-select">
                                                            <option selected>Active</option>
                                                        </select>
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

export default AddPatient