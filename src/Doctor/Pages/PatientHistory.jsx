import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { getSecureApiData } from "../../Services/api"
import base_url from "../../baseUrl"
import { calculateAge } from "../../Services/globalFunction"
import Loader from "../../Loader/Loader"
import { Link } from "react-router-dom"

function PatientHistory() {
    const userId = localStorage.getItem('userId')
    const [appointmentRequest, setAppintmentRequest] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [search, setSearch] = useState('')
    const [patientData, setPatientData] = useState([])
    async function getPatientHistory() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`doctor/patient-history/${userId}?page=${currentPage}&search=${search}`)
            if (result.success) {
                setPatientData(result.data)
                setTotalPages(result.totalPages)
                setCurrentPage(result.currentPage)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userId) {
            getPatientHistory()
        }
    }, [userId,currentPage])
    return (
        <>
            {loading?<Loader/>
            :<section className="new-profile-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-sm-12 mb-3">
                            <ProfileSidebar />
                        </div>

                        <div className="col-lg-9 col-sm-12">
                            <div className="profile-right-card">
                                <div className="profile-tp-header">
                                    <h5 className="heading-grad fz-24 mb-0">Patient history</h5>
                                </div>
                                <div className="all-profile-data-bx">
                                    <div className="row">
                                        <div className="d-flex align-items-center justify-content-between mb-3 gap-2">
                                            <div>
                                                <div className="d-flex align-items-center gap-2 nw-box">
                                                    <div className="custom-frm-bx mb-0">
                                                        <input
                                                            type="email"
                                                            className="form-control admin-table-search-frm  pe-5"
                                                            id="email"
                                                            placeholder="Search"
                                                            required
                                                        />
                                                        <div className="adm-search-bx">
                                                            <button className="tp-search-btn text-secondary">
                                                                <FontAwesomeIcon icon={faSearch} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {totalPages > 1 && <div className="page-selector">
                                                <div className="filters">
                                                    <select className="form-select custom-page-dropdown nw-custom-page "
                                                        value={currentPage}
                                                        onChange={(e) => setCurrentPage(e.target.value)}>
                                                        {Array.from({ length: totalPages }, (_, i) => (
                                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <div className="table-section">
                                                <div className="table table-responsive mb-0">
                                                    <table className="table mb-0 nw-mega-table">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Patient Details</th>
                                                                <th>Gender</th>
                                                                <th>Age</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {patientData?.length > 0 ?
                                                                patientData?.map((item, key) =>
                                                                    <tr key={key}>
                                                                        <td>{key + 1}.</td>
                                                                        <td>
                                                                            <div className="admin-table-bx">
                                                                                <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                                    <img src={item?.profileImage ? `${base_url}/${item?.profileImage}`
                                                                                        : "/patient-pic.png"} alt="" />
                                                                                    <div>
                                                                                        <h6 className="">{item?.name}</h6>
                                                                                        <p>{item?.userId?.unique_id}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-capitalize">{item?.gender}</td>
                                                                        <td>{calculateAge(item?.patientDemographic?.dob)} Years</td>
                                                                        <td>
                                                                            <div>
                                                                                <Link to={`/doctor/detail-view/${item?.name}/${item?.lastApt?._id}`} className="nw-thm-btn">View Details</Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>) : (
                                                                    <tr>
                                                                        <td colSpan="5" className="text-center py-4 fw-600">
                                                                            No patient found
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

            </section>}
        </>
    )
}

export default PatientHistory