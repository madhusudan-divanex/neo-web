import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faDownload, faShareNodes } from "@fortawesome/free-solid-svg-icons"

function DoctorReportView() {
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
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h5 className="heading-grad fz-24 mb-0">Report view</h5>
                                        </div>

                                        <div className="d-flex gap-2">
                                            <button className="text-black fz-18"> <FontAwesomeIcon icon={faShareNodes} /> </button>
                                            <button className="text-black fz-18"> <FontAwesomeIcon icon={faDownload} /> </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="all-profile-data-bx">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="report-view-bx text-center">
                                                <img src="/report-pic.png" alt="" />
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

export default DoctorReportView