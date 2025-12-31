import {
    faChevronLeft,
    faEye,
    faEyeSlash,
    faLock,
    faPhone,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { postApiData } from "../../Services/api";
import { toast } from "react-toastify";
import { fetchPatientDetail, fetchPatientProfile } from "../../Redux/features/patient";
import { useState } from "react";
import Loader from "../Layouts/Loader";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)
    const [loading,setLoading] =useState(false)
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
            const response = await postApiData('patient/signin', formData)
            if (response.success) {
                localStorage.setItem('token', response.token)
                localStorage.setItem('userId', response.userId)
                localStorage.setItem('patientId', response.patientId)
                
                
                toast.success('Login successfully')
                
                navigate(`/otp?contact=${formData?.contactNumber}`)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally{
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
                                    <Link to='/' className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>
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

                                    <div className="admin-vndr-login my-3">
                                        <h3 className="heading-grad">Login Here</h3>
                                        <p className="py-3">Sign in to access your health records securely.</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Mobile Number</label>
                                            <input type="number" name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange} className="form-control new-control-frm px-5" placeholder="Enter Mobile Number" />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon"> <FontAwesomeIcon icon={faPhone} /> </span>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Password</label>
                                            <input type="text" name="password"
                                            value={formData.password}
                                            onChange={handleChange} className="form-control new-control-frm px-5" placeholder="*******" />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLock} /> </span>
                                            </div>
                                            <div className="login-eye-bx">
                                                <button onClick={() => setIsShow(!isShow)}  className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={isShow ? faEyeSlash : faEye} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className='text-end'>
                                            <NavLink to="/forgot-password" className='lab-login-forgot-btn fs-6'>Forgot Password</NavLink>
                                        </div>

                                        <div className="mt-3 text-center">
                                            <button className="nw-thm-btn w-100" type="submit">Login</button>
                                        </div>

                                        <div className='text-center mt-5'>
                                            <span className='do-account-title'>don't have an account?  <NavLink to="/create-account" className='nw-register-btn'>Register here</NavLink></span>
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

export default Login