import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { FiPlusSquare } from "react-icons/fi";
import { faCalendar, faClock, faClose,  faKitMedical, faPerson, faStar} from "@fortawesome/free-solid-svg-icons";

function DoctorAddPrescriptions() {
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
                                    <h5 className="heading-grad fz-24 mb-0">Add Prescriptions</h5>
                                </div>

                                <form action="">     
                                <div className="all-profile-data-bx">
                                    <div className="row">
                                          <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Diagnosis</label>
                                                    <input type="text" className="form-control new-control-frm px-5" placeholder="Enter  Diagnosis" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faPerson} /> </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>Status</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faStar} /> </span>
                                                        <select className="nw-select">
                                                            <option>--Select Status--</option>
                                                            <option selected>Active</option>
                                                            <option>Test 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                    </div>

                                    <div className="mt-3">
                                        <h5 className="fz-20 fw-700 text-black">Add Medications </h5>
                                    <div className="pres-report-bx position-relative mb-4">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Medications Name</label>
                                                    <input type="text" className="form-control new-control-frm px-5" placeholder="Enter Medications Name" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faKitMedical} /> </span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>Frequency</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faClock} /> </span>
                                                        <select className="nw-select">
                                                            <option>--Select--</option>
                                                           
                                                            <option>Test 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                   <div className="custom-frm-bx">
                                                    <label htmlFor="">Duration</label>
                                                    <input type="text" className="form-control new-control-frm ps-5" placeholder="Enter Duration" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                   <div className="custom-frm-bx">
                                                    <label htmlFor="">Refills</label>
                                                    <input type="text" className="form-control new-control-frm ps-5" placeholder="Enter Refills" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Instructions</label>
                                                    <textarea name="" id="" className="form-control new-control-frm"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="remv-medication-bx">
                                            <button className="remv-pic-btn"> <FontAwesomeIcon icon={faClose} /> </button>
                                        </div>

                                    </div>

                                    <div className="pres-report-bx position-relative mb-4">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Medications Name</label>
                                                    <input type="text" className="form-control new-control-frm px-5" placeholder="Enter Medications Name" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faKitMedical} /> </span>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label>Frequency</label>
                                                    <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faClock} /> </span>
                                                        <select className="nw-select">
                                                            <option>--Select--</option>
                                                           
                                                            <option>Test 2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                   <div className="custom-frm-bx">
                                                    <label htmlFor="">Duration</label>
                                                    <input type="text" className="form-control new-control-frm ps-5" placeholder="Enter Duration" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                   <div className="custom-frm-bx">
                                                    <label htmlFor="">Refills</label>
                                                    <input type="text" className="form-control new-control-frm ps-5" placeholder="Enter Refills" />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Instructions</label>
                                                    <textarea name="" id="" className="form-control new-control-frm"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="remv-medication-bx">
                                            <button className="remv-pic-btn"> <FontAwesomeIcon icon={faClose} /> </button>
                                        </div>

                                    </div>
                                    </div>
                                    <div className="add-more-bx d-flex justify-content-end">
                                        <button className="nw-thm-btn outline d-flex align-items-center justify-content-center gap-2 nw-dashed-brd"> <FiPlusSquare />  Add More Medications</button>
                                    </div>

                                    <div className="custom-frm-bx">
                                    <label htmlFor="">Notes</label>
                                    <textarea name="" id="" className="form-control new-control-frm"></textarea>
                                    </div>


                                    

                                    <div className="text-end pt-3 border-top">
                                        <button className="nw-thm-btn">Submit</button>
                                    </div>

                                </div>


                            
                            </form>
                                </div>

                            
                            
                        </div>

                    </div>
                </div>

            </section>
        </>
  )
}

export default DoctorAddPrescriptions