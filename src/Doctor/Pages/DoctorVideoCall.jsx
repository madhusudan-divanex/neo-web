
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faMicrophone, faPhone, faVideo } from "@fortawesome/free-solid-svg-icons"
import "../Css/style.css"
import "../Css/responsive.css"

function DoctorVideoCall() {
  return (
     <>
            <section className="chat-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <ProfileSidebar />
                        </div>
                        <div className="col-lg-9 mb-3">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0">Video call</h5>
                                </div>
                                <div className="all-profile-data-bx">
                                    <div className="video-call-card">
                                        <div className="live-chart-bx">
                                            <div className="live-tp-user">
                                                <img src="/calling-bner.jpg" alt="" />
                                                <div className="user-chating-content">
                                                    <h5 className="chat-title">Dr. David Patel </h5>
                                                    <p className="live-title">Online</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="nw-video-calling-card">
                                            <div className="capture-bxs">
                                                <img src="/call-pic.jpg" alt="" />

                                                <div className="front-camera-pic">
                                                    <img src="/date-time-img.png" alt="" />
                                                </div>


                                            </div>
                                        </div>

                                        <div className="video-calling-btm-bx">
                                            <button className="video-calling-btn calling-btn "><FontAwesomeIcon icon={faVideo} /></button>
                                            <button className="video-calling-btn calling-btn calling-close-btn"><FontAwesomeIcon icon={faPhone} /></button>
                                            <button className="video-calling-btn calling-btn "><FontAwesomeIcon icon={faMicrophone} /></button>
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

export default DoctorVideoCall