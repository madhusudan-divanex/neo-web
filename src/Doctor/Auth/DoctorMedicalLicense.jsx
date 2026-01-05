import {
    faChevronLeft,
    faFile,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { toast } from "react-toastify";
import { getSecureApiData, securePostData } from "../../Services/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import base_url from "../../baseUrl";
import Loader from "../../Loader/Loader";

function DoctorMedicalLicense() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [licenses, setLicenses] = useState([
        { certName: "", certFile: null, preview: "" },
    ]);

    const handleChange = (index, field, value) => {
        const updated = [...licenses];
        updated[index][field] = value;
        setLicenses(updated);
    };

    const handleFileChange = (index, file) => {
        const updated = [...licenses];
        updated[index].certFile = file;

        if (file && file.type.startsWith("image/")) {
            updated[index].preview = URL.createObjectURL(file);
        } else {
            updated[index].preview = ""; // PDF ke liye no preview
        }

        setLicenses(updated);
    };


    const addMore = () => {
        setLicenses([...licenses, { certName: "", certFile: null, preview: "" }]);
    };

    const removeItem = (index) => {
        const updated = licenses.filter((_, i) => i !== index);
        setLicenses(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('medicalLicense', JSON.stringify(
            licenses.map(report => ({
                certName: report.certName,            
               
            }))
        ));

        licenses.forEach(report => {
            if(report.certFile instanceof File){
                formData.append('certFile', report.certFile);
            }
        });

        try {
            const response = await securePostData('doctor/medical-license', formData);
            if (response.success) {
                toast.success('Prescriptions submitted successfully!');
                navigate('/doctor/address-about')
            } else {
                toast.error('Submission failed: ' + data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        } finally {
            setLoading(false)
        }
    };
    async function fetchMedicalLic() {
        setLoading(true)
        const result = await getSecureApiData(`doctor/medical-license/${localStorage.getItem('userId')}`)
        if (result.success) {
            const data = result.data
            setLicenses(data?.medicalLicense)
        }
        setLoading(false)
    }
    useEffect(() => {
        if (userId) {
            fetchMedicalLic()
        }
    }, [userId])

    return (
        <>
            {loading?<Loader/>
            :<section className="admin-login-section nw-hero-section ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="admin-pisture-bx">
                                <div className="position-relative">
                                    <Link to="/doctor/education-work" className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>
                                </div>

                                <img src="/doctor-pic.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center pb-3">

                            <div className="nw-form-container">
                                <div className="login-logo">
                                    <img src="/logo.png" alt="" />
                                </div>

                                <div className="admin-vndr-login my-3">
                                    <h3 className="heading-grad">Medical License  </h3>

                                </div>

                                <form onSubmit={handleSubmit}>
                                    {licenses.map((item, index) => (
                                        <div
                                            className="pres-report-bx d-flex align-items-center gap-4 mb-3"
                                            key={index}
                                        >
                                            <div className="flex-grow-1">
                                                <div className="custom-frm-bx">
                                                    <label>Medical License Certificate Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control new-control-frm px-5"
                                                        placeholder="Enter Medical License Certificate Name"
                                                        value={item.certName}
                                                        onChange={(e) =>
                                                            handleChange(index, "certName", e.target.value)
                                                        }
                                                    />
                                                    <div className="contact-add-icon">
                                                        <span className="nw-contact-icon">
                                                            <FontAwesomeIcon icon={faFile} />
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="custom-frm-bx">
                                                    <label>Upload Medical License Certificate</label>

                                                    <div className="upload-box nw-upload-bx p-3 text-center">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <div className="upload-icon">
                                                                    <IoCloudUploadOutline />
                                                                </div>
                                                                <div className="text-start">
                                                                    <p className="fw-semibold mb-0">
                                                                        <label
                                                                            htmlFor={`fileInput-${index}`}
                                                                            className="file-label file-select-label fw-600 fz-16 mb-0"
                                                                        >
                                                                            Drop a file here
                                                                        </label>
                                                                    </p>
                                                                    <small className="format-title">
                                                                        File Support JPEG, PDF
                                                                    </small>
                                                                </div>
                                                            </div>

                                                            <div className="mt-2">
                                                                <label
                                                                    htmlFor={`fileInput-${index}`}
                                                                    className="browse-btn"
                                                                >
                                                                    Browse
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <input
                                                            type="file"
                                                            className="d-none"
                                                            id={`fileInput-${index}`}
                                                            accept=".png,.jpg,.jpeg,.pdf"
                                                            onChange={(e) =>
                                                                handleFileChange(index, e.target.files[0])
                                                            }
                                                        />

                                                        {item.certFile && (
                                                            <div className="mt-3 text-center">
                                                                {item.certFile.type === "application/pdf" ? (
                                                                    <p className="mb-0 fw-semibold">
                                                                        📄 {item.certFile.name}
                                                                    </p>
                                                                ) : (
                                                                    item.preview && (
                                                                        <img
                                                                            src={item.preview}
                                                                            alt="Uploaded"
                                                                            className="img-thumbnail"
                                                                            width="120"
                                                                        />
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                        {!item?.preview &&item?.certFile?.startsWith('uploads') && (
                                                            <div className="mt-3 text-center">

                                                                <img
                                                                    src={`${base_url}/${item?.certFile}`}
                                                                    alt="Uploaded"
                                                                    className="img-thumbnail"
                                                                    width="120"
                                                                />

                                                            </div>
                                                        )}

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="nw-press-delete-bx">
                                                {licenses.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="text-danger"
                                                        onClick={() => removeItem(index)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="add-more-bx">
                                        <button
                                            type="button"
                                            className="nw-thm-btn outline w-100 d-flex align-items-center justify-content-center gap-2 border-dashed"
                                            onClick={addMore}
                                        >
                                            <FiPlusSquare /> Add More
                                        </button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <button type="submit" className="nw-thm-btn w-100">
                                            Submit & Next
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default DoctorMedicalLicense