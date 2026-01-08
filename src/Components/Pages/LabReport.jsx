import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { getSecureApiData } from "../../Services/api"
import { useEffect, useState } from "react"
import Loader from "../../Loader/Loader"
import ReportDownload from "./ReportDownload"
import { useSelector } from "react-redux"

function LabReport() {
    const patientId = localStorage.getItem('patientId')
    const userId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [totalData, setTotalData] = useState(1)
    const [allReports, setAllReports] = useState([])
    const [showDownload, setShowDownload] = useState(false);
    const [pdfLoading, setPdfLoading] = useState(null)
    const [selectedReport, setSelectedReport] = useState(null);

    const fetchLabReports = async () => {
        try {
            const response = await getSecureApiData(`patient/lab-report/${userId}?page=${currentPage}`)
            if (response.success) {
                setAllReports(response.data)
                setCurrentPage(response.pagination.currentPage)
                setTotalPage(response.pagination.totalPage)
                setTotalData(response.pagination.totalData)

            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (userId) {
            fetchLabReports()
        }
    }, [userId])
    const handleDownload = (appointmentId, testId, id) => {
        setPdfLoading(id)
        setSelectedReport({ appointmentId, testId });
        setShowDownload(true);
    };

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
                                        <h5 className="heading-grad fz-24 mb-0">Lab Report</h5>
                                    </div>
                                    <div className="all-profile-data-bx">
                                        <div className="row ">
                                            <div className="col-lg-12">
                                                <div className="table-section">
                                                    <div className="table table-responsive mb-0">
                                                        <table className="table mb-0 nw-mega-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>S.No.</th>
                                                                    <th>Date</th>
                                                                    <th>Test name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {allReports?.length > 0 ?
                                                                    allReports?.map((item, key) => <tr>
                                                                        <td>{key + 1}.</td>
                                                                        <td>{new Date(item?.createdAt)?.toLocaleDateString('en-GB', {
                                                                            day: 'numeric',
                                                                            month: 'long',
                                                                            year: 'numeric',
                                                                        })}</td>
                                                                        <td>{item?.testId?.shortName}</td>
                                                                        <td>
                                                                            <div>
                                                                                <button
                                                                                    className="thm-btn thm-outline-btn"
                                                                                    disabled={pdfLoading !== null}
                                                                                    onClick={() =>
                                                                                        handleDownload(item?.appointmentId, item?.testId?._id, item?._id)
                                                                                    }
                                                                                >
                                                                                    <FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} />
                                                                                    {pdfLoading == item?._id ? 'Downloading' : 'Download'}
                                                                                </button>
                                                                            </div>
                                                                        </td>

                                                                    </tr>) : (
                                                                    <tr>
                                                                        <td colSpan="5" className="text-center py-4 fw-600">
                                                                            No report found
                                                                        </td>
                                                                    </tr>
                                                                )}




                                                            </tbody>
                                                        </table>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {(showDownload && selectedReport) && <div className="d-none">
                        <ReportDownload
                            appointmentId={selectedReport?.appointmentId?._id}
                            currentTest={selectedReport?.testId}
                            endLoading={() => setPdfLoading(null)}
                            pdfLoading={pdfLoading}
                        />
                    </div>}

                </section>}
        </>
    )
}

export default LabReport