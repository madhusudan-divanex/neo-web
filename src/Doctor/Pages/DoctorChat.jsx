import {
    faPaperclip, faPaperPlane, faPhone,
    // faSearch, 

    faVideo
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"

function DoctorChat() {
    return (
        <>
            <section className="chat-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-3">

                            <ProfileSidebar />
                        </div>
                        <div className="col-lg-9 mb-3">
                            <div className="right-chat-card chat-tp-header">
                                <div className="lab-tp-title patient-bio-tab  d-flex align-items-center justify-content-between py-2">
                                    <div className="">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="chat-usr-avatr-crd">
                                                <div className="chat-usr-avatr-bx nw-chat-add-live">
                                                    <img src="/chat-logo.jpg" alt="" />
                                                </div>

                                                <div className="chat-usr-info">
                                                    <h5 className="mb-0">Jerome Bell</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="add-nw-bx d-flex gap-4">
                                        <button className="text-black calling-btn">
                                            <FontAwesomeIcon icon={faPhone} style={{ color: "#FEB052" }} />
                                        </button>

                                        <button className="text-black calling-btn">
                                            <FontAwesomeIcon icon={faVideo} style={{ color: "#FEB052" }} />
                                        </button>

                                    </div>

                                </div>

                                <div className="all-chating-content-bx">
                                    <div className="chat-container">
                                        <div className="d-flex align-items-start mb-4">
                                            <img src="/chat-logo.jpg" className="chat-avatar me-2 " alt="user" />
                                            <div>
                                                <div className="chat-bubble nw-left">
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </div>
                                                <div className="chat-time">8:00 PM</div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-start justify-content-end mb-4">
                                            <div>
                                                <div className="chat-bubble nw-right">
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                </div>
                                                <div className="chat-time text-end">8:00 PM</div>
                                            </div>
                                            <img src="/chat-logo.jpg" className="chat-avatar ms-2 " alt="user" />
                                        </div>
                                    </div>



                                    <div className="">
                                        <div className="custom-frm-bx mb-0">
                                            <input type="text" className="form-control px-5" placeholder="Message now" />

                                            <div className="chat-papperclip-bx">
                                                <a href="" className="papperclip-btn"><FontAwesomeIcon icon={faPaperclip} className="paper-clip-icon" /></a>
                                            </div>

                                            <div className="chat-papper-plane-bx">
                                                <button className="chat-papper-plane-btn"><FontAwesomeIcon icon={faPaperPlane} className="paper-plane-icon" /></button>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorChat