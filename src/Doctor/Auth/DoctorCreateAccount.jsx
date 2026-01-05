import {
    faCalendar,
    faChevronLeft,
    faEnvelope,
    faEye,
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

function DoctorCreateAccount() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const [isPass, setIsPass] = useState(false)
    const [isConf, setIsConf] = useState(false)
    const { profiles } = useSelector(state => state.patient)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        dob:null,
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
            navigate(`/doctor/otp?contact=${formData.contactNumber}`)
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

                                <img src="/doctor-pic.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center ">
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
                                        <label htmlFor="">Name</label>
                                        <input type="text" name="name" value={formData?.name} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Name" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faUser} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Mobile Number</label>
                                        <input type="number" name="contactNumber" value={formData?.contactNumber} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Mobile Number" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faPhone} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Email</label>
                                        <input type="email" name="email" value={formData?.email} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Email Address" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faEnvelope} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Date of Birth</label>
                                        <input type="date" name="dob" value={formData?.dob} onChange={handleChange} required className="form-control new-control-frm ps-5" placeholder="Enter Email Address" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label>Gender</label>
                                        <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faMarsAndVenus} /> </span>
                                            <select className="nw-select" name="gender" value={formData?.gender} onChange={handleChange} required>
                                                <option>--Select--</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>



                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Password</label>
                                        <input type={isPass?"password":"text"} name="password" value={formData?.password} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Email Address" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLock} /> </span>
                                        </div>
                                        <div className="login-eye-bx">
                                            <button type="button" onClick={()=>setIsPass(!isPass)} className="nw-contact-icon">
                                                <FontAwesomeIcon icon={isPass?faEye:faEyeSlash} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type={isConf?"password":"text"} name="confirmPassword" value={formData?.confirmPassword} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Confirm Password" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLock} /> </span>
                                        </div>
                                        <div className="login-eye-bx">
                                            <button type="button" onClick={()=>setIsConf(!isConf)} className="nw-contact-icon">
                                                <FontAwesomeIcon icon={isConf? faEye: faEyeSlash} />
                                            </button>
                                        </div>
                                    </div>


                                    <div className="mt-3 text-center">
                                        <button type="submit" className="nw-thm-btn w-100">Continue</button>
                                    </div>

                                    <div className='text-center mt-4'>
                                        <span className='do-account-title'>don't have an account?  <NavLink to="/doctor/login" className='nw-register-btn'>Login here</NavLink></span>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorCreateAccount