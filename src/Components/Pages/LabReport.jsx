import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { getSecureApiData } from "../../Services/api"
import { useEffect, useState } from "react"
import Loader from "../../Loader/Loader"

function LabReport() {
    const patientId=localStorage.getItem('patientId')
    const userId=localStorage.getItem('userId')
    const [loading,setLoading]=useState(true)
    const [currentPage,setCurrentPage]=useState(1)
    const [totalPage,setTotalPage]=useState(1)
    const [totalData,setTotalData] =useState(1)
    const [allReports,setAllReports]=useState([])
    const fetchLabReports=async()=>{
        try {
            const response=await getSecureApiData(`patient/lab-report/${userId}?page=${currentPage}`)
            if(response.success){
                setAllReports(response.data)
                setCurrentPage(response.pagination.currentPage)
                setTotalPage(response.pagination.totalPage)
                setTotalData(response.pagination.totalData)

            }
        } catch (error) {
            
        } finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(userId){
            fetchLabReports()
        }
    },[userId])
    return (
        <>
            {loading? <Loader/>
            :<section className="new-profile-section">
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

                                                            {allReports?.length>0 ?
                                                            allReports?.map((item,key)=><tr>
                                                                <td>{key+1}.</td>
                                                                <td>{new Date(item?.createdAt)?.toLocaleDateString()}</td>
                                                                <td>{item?.testId?.shortName}</td>
                                                                <td>
                                                                    <div>
                                                                        <button className="thm-btn thm-outline-btn"> <FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download </button>
                                                                    </div>

                                                                </td>

                                                            </tr>):'No record'}




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

export default LabReport