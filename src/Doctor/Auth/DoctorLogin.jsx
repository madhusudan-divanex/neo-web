import {
    faChevronLeft,
    faEyeSlash,
    faLock,
    faPhone,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { postApiData } from "../../Services/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Loader from "../../Loader/Loader";

function DoctorLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const userId = localStorage.getItem('userId')
    const [formData, setFormData] = useState({
        contactNumber: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await postApiData('doctor/signin', formData)
            if (response.success) {
                localStorage.setItem('token', response.token)
                localStorage.setItem('userId', response.userId)
                localStorage.setItem('doctorId', response.doctorId)


                toast.success('Login successfully')

                navigate(`/doctor/otp?contact=${formData?.contactNumber}`)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    };
    return (
        <>
            {loading?<Loader/>
            :<section className="admin-login-section nw-hero-section ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="admin-pisture-bx">
                                <div className="position-relative">
                                    <a href="javascript:void(0)" className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </a>
                                </div>

                                <img src="/doctor-pic.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center pb-5">
                            <div className="nw-form-container">
                                <div className="login-logo">
                                    <img src="/logo.png" alt="" />
                                </div>

                                <div className="admin-vndr-login my-3">
                                    <h3 className="heading-grad">Login Here</h3>
                                    <p className="py-3">Sign in to access your health records securely.</p>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Mobile Number</label>
                                        <input type="number" name="contactNumber" value={formData?.contactNumber} onChange={handleChange} className="form-control new-control-frm px-5" placeholder="Enter Mobile Number" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faPhone} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Password</label>
                                        <input type="password" name="password" value={formData?.password} onChange={handleChange} className="form-control new-control-frm px-5" placeholder="******" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLock} /> </span>
                                        </div>
                                        <div className="login-eye-bx">
                                            <button type="button" className="nw-contact-icon">
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className='text-end'>
                                        <NavLink to="/forgot-password" className='lab-login-forgot-btn fs-6'>Forgot Password</NavLink>
                                    </div>

                                    <div className="mt-3 text-center">
                                        <button type="submit" className="nw-thm-btn w-100">Login</button>
                                    </div>

                                    <div className='text-center mt-5'>
                                        <span className='do-account-title'>don't have an account?  <NavLink to="/doctor/create-account" className='nw-register-btn'>Register here</NavLink></span>
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

export default DoctorLogin