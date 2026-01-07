import { faCircleXmark, faDownload, faFilePdf, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { useEffect, useRef, useState } from "react"
import { getSecureApiData } from "../../Services/api"
import base_url from "../../baseUrl"
import html2canvas from "html2canvas"
import html2pdf from "html2pdf.js"
import { BsCapsule } from "react-icons/bs"

function Prescriptions() {
    const userId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [allPrescriptions, setAllPrescriptions] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [prescriptionData,setPrescriptionData]=useState()
    async function fetchPrescriptions() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`patient/prescriptions/${userId}?page=${currentPage}`)
            if (result.success) {
                setAllPrescriptions(result?.data)
                // setCurrentPage(result?.currentPage)
                // setTotalPages(result?.totalPages)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPrescriptions()
    }, [userId])

    const prescriptionRef = useRef()
    const handleDownload = async (item) => {
        setPrescriptionData(item)
        const element = prescriptionRef.current;
        document.body.classList.add("hide-buttons");
        const opt = {
            margin: [0.2, 0.2, 0.2, 0.2],
            filename: "prescriptions.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: { scale: 3, useCORS: true },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };
        try {
            await html2pdf().from(element).set(opt).save().then(() => { document.body.classList.remove("hide-buttons"); });
        } catch (error) {

        }

    };
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
                                    <h5 className="heading-grad fz-24 mb-0">Prescriptions</h5>
                                </div>
                                <div className="all-profile-data-bx">
                                    <div className="row ">
                                        <div className="col-lg-12">
                                            <div className="table-section">
                                                <div className="table table-responsive mb-0">
                                                    <table className="table mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>S.No.</th>
                                                                <th>Date</th>
                                                                <th><span className="text-black">Doctor</span></th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {allPrescriptions?.length > 0 ?
                                                                allPrescriptions?.map((item, key) =>
                                                                    <tr key={key}>
                                                                        <td>{key + 1}.</td>
                                                                        <td>{new Date(item?.prescription?.createdAt).toLocaleDateString("en-GB", {
                                                                            day: "2-digit",
                                                                            month: "long",
                                                                            year: "numeric",
                                                                        })
                                                                        } </td>
                                                                        <td>
                                                                            <div className="admin-table-bx">
                                                                                <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                                    <img src={item?.doctor?.profileImage ? `${base_url}/${item?.doctor?.profileImage}`
                                                                                        : "/doctor-timing.png"} alt="" />
                                                                                    <div>
                                                                                        <h6 className="">Dr. {item?.doctor?.name} </h6>
                                                                                        <p>{item?.doctorAbout?.specialty} | {item?.doctorAbout?.hospitalName?.name}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <button onClick={()=>handleDownload(item?.prescription)} className="thm-btn thm-outline-btn"> <FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} /> Download </button>
                                                                            </div>

                                                                        </td>
                                                                    </tr>) : (
                                                                    <tr>
                                                                        <td colSpan="5" className="text-center py-4 fw-600">
                                                                            No prescription found
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

            </section>
            {prescriptionData &&
                <div className="modal fade step-modal d-none" id="prescription-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content rounded-5" >
                            <div className="d-flex align-items-center justify-content-between border-bottom p-4">
                                <div>
                                    <h6 className="heading-grad mb-0 fz-24"> Prescription</h6>
                                </div>
                                <div>
                                    <button type="button" onClick={() => setPrescriptionData(null)} className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                                        <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                </div>
                            </div>
                            <div className="modal-body p-4" ref={prescriptionRef}>
                                <div className="row mt-5">
                                    <div className="col-lg-12">
                                        <div className="view-report-card">
                                            <div className="view-report-header">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="active-barcode">{prescriptionData?.status}</span>
                                                        <h5>{prescriptionData?.customId}</h5>
                                                        <h6>Date: {new Date(prescriptionData?.createdAt).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "long",
                                                            year: "numeric",
                                                        })
                                                        } </h6>
                                                    </div>

                                                    <div className="d-flex gap-2">
                                                        <button className="fz-18 no-print" onClick={handleDownload}><FontAwesomeIcon icon={faDownload} /> </button>
                                                        <button className="fz-18 no-print"><FontAwesomeIcon icon={faPrint} /> </button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="view-report-content">
                                                <div className="sub-content-title">
                                                    <h4>RX.</h4>
                                                    <h3><BsCapsule style={{ color: "#00B4B5" }} /> Medications</h3>
                                                </div>

                                                {prescriptionData?.medications?.map((item, key) =>
                                                    <div className="view-medications-bx mb-3" key={key}>
                                                        <h5>{key + 1}. {item?.name}</h5>
                                                        <ul className="viwe-medication-list">
                                                            <li className="viwe-medication-item">Frequency: {item?.frequency} </li>
                                                            <li className="viwe-medication-item">Duration: {item?.duration}</li>
                                                            <li className="viwe-medication-item">Instructions: {item?.instructions}</li>
                                                            <li className="viwe-medication-item">Refills: {item?.refills} </li>

                                                        </ul>
                                                    </div>)}



                                                <div className="diagnosis-bx mb-3">
                                                    <h5>Diagnosis</h5>
                                                    <p>{prescriptionData?.diagnosis}</p>
                                                </div>

                                                {/* <div className="diagnosis-bx mb-3">
                                                                <h5>Diagnosis</h5>
                                                                <p>-</p>
                                                            </div> */}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Prescriptions