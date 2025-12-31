import {
    faCalendar,
    faChevronLeft,
    faDroplet,
    faRulerVertical,
    faWeightScale,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getApiData, getSecureApiData, securePostData } from "../../Services/api";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";

function PersonalInfo() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({ height: "", weight: "", bloodGroup: "", dob: null })
    const handleChange = (e) => {
        const { type, name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const data = { userId, ...formData }
        try {
            const response = await securePostData('patient/demographic', data)
            if (response.success) {
                toast.success('Records saved successfully')
                navigate('/medical-history')
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    };
    async function fetchUserProfile() {
        const result = await getSecureApiData(`patient/demographic/${localStorage.getItem('userId')}`)
        if (result.success) {
            const data = result.data
            setFormData({...data,dob: data.dob
        ? new Date(data.dob).toISOString().split("T")[0]
        : ""})
        }
    }
    useEffect(() => {
        if (userId) {
            fetchUserProfile()
        }
    }, [userId])

    return (
        <>
            {loading ? <Loader />
                : <section className="admin-login-section nw-hero-section ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="admin-pisture-bx">
                                    <div className="position-relative">
                                        <Link to='/kyc' className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>
                                    </div>

                                    <img src="new-login-bnnr.png" alt="" />
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center pb-3">
                                <div>
                                    <div className="nw-form-container">
                                        <div className="login-logo">
                                            <img src="/logo.png" alt="" />
                                        </div>

                                        <div className="admin-vndr-login my-3">
                                            <h3 className="heading-grad">Personal & Demographic Info</h3>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            {/* Height */}
                                            <div className="custom-frm-bx">
                                                <label>Height</label>
                                                <input
                                                    type="text"
                                                    name="height"
                                                    value={formData.height}
                                                    onChange={handleChange}
                                                    className="form-control new-control-frm px-5"
                                                    placeholder="Enter your height"
                                                />
                                                <div className="contact-add-icon">
                                                    <span className="nw-contact-icon">
                                                        <FontAwesomeIcon icon={faRulerVertical} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Weight */}
                                            <div className="custom-frm-bx">
                                                <label>Weight (Kg)</label>
                                                <input
                                                    type="number"
                                                    name="weight"
                                                    value={formData.weight}
                                                    onChange={handleChange}
                                                    className="form-control new-control-frm px-5"
                                                    placeholder="Enter your weight"
                                                />
                                                <div className="contact-add-icon">
                                                    <span className="nw-contact-icon">
                                                        <FontAwesomeIcon icon={faWeightScale} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Blood Group */}
                                            <div className="custom-frm-bx">
                                                <label>Blood Group</label>
                                                <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm">
                                                    <span className="nw-contact-icon">
                                                        <FontAwesomeIcon icon={faDroplet} />
                                                    </span>
                                                    <select
                                                        name="bloodGroup"
                                                        value={formData.bloodGroup}
                                                        onChange={handleChange}
                                                        className="nw-select"
                                                    >
                                                        <option value="">--Select--</option>
                                                        <option value="A+">A+</option>
                                                        <option value="A-">A-</option>
                                                        <option value="B+">B+</option>
                                                        <option value="B-">B-</option>
                                                        <option value="O+">O+</option>
                                                        <option value="O-">O-</option>
                                                        <option value="AB+">AB+</option>
                                                        <option value="AB-">AB-</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Date of Birth */}
                                            <div className="custom-frm-bx">
                                                <label>Date of Birth</label>
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleChange}
                                                    className="form-control new-control-frm ps-5"
                                                />
                                                <div className="contact-add-icon">
                                                    <span className="nw-contact-icon">
                                                        <FontAwesomeIcon icon={faCalendar} />
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <div className="mt-5 text-center">
                                                <button type="submit" className="nw-thm-btn w-100">
                                                    Submit & Next
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
        </>
    )
}

export default PersonalInfo