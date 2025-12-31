import {
    faChevronLeft,
    faEnvelope,
    faEyeSlash,
    faLock,
    faMarsAndVenus,
    faPhone,
    faUser,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getApiData, postApiData } from "../../Services/api";

function CreateAccount() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [isPass, setIsPass] = useState(false)
    const [isConf, setIsConf] = useState(false)
    const { profiles } = useSelector(state => state.patient)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        password: "",
        gender: "",
    });
    const handleChange = (e) => {
        const { type, name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password was not matched")
            return
        }

        try {
            sessionStorage.setItem('accountData', JSON.stringify(formData))
            navigate(`/otp?contact=${formData.contactNumber}`)
            // const response = await postApiData('patient', formData)
            // if (response.success) {
            //     toast.success('Signup successfully')
            //     localStorage.setItem('token', response.token)
            //     localStorage.setItem('userId', response.userId)
            // } else {
            //     toast.error(response.message)
            // }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    };
    useEffect(() => {

        if (sessionStorage.getItem('accountData')) {
            const data = JSON.parse(sessionStorage.getItem('accountData'))
            setFormData(data)
        }
    }, [])
    return (
        <>
            <section className="admin-login-section nw-hero-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="admin-pisture-bx">
                                <div className="position-relative">
                                    <Link to='/select-account-type' className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>
                                </div>

                                <img src="new-login-bnnr.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center pb-3">
                            <div >
                                <div className="nw-form-container">
                                    <div className="login-logo">
                                        <img src="/logo.png" alt="" />
                                    </div>

                                    <div className="admin-vndr-login">
                                        <h3 className="heading-grad">Create Account</h3>
                                        <p className="">Giv credential to sign up your account</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="custom-frm-bx">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control new-control-frm px-5"
                                                placeholder="Enter Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label>Mobile Number</label>
                                            <input
                                                type="number"
                                                className="form-control new-control-frm px-5"
                                                placeholder="Enter Mobile Number"
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                            />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control new-control-frm px-5"
                                                placeholder="Enter Email Address"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label>Gender</label>
                                            <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm">
                                                <span className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faMarsAndVenus} />
                                                </span>
                                                <select
                                                    className="nw-select"
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">--Select--</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control new-control-frm px-5"
                                                placeholder="Enter Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faLock} />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                className="form-control new-control-frm px-5"
                                                placeholder="Enter Confirm Password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                            />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faLock} />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-3 text-center">
                                            <button type="submit" className="nw-thm-btn w-100">
                                                Continue
                                            </button>
                                        </div>

                                        <div className="text-center mt-4">
                                            <span className="do-account-title">
                                                don't have an account?{" "}
                                                <NavLink to="/login" className="nw-register-btn">
                                                    Login here
                                                </NavLink>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateAccount