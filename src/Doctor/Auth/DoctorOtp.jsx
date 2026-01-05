import {
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postApiData } from "../../Services/api";
import { fetchDoctorDetail } from "../../Redux/features/doctor";

function DoctorOtp() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const contactNumber = searchParams.get('contact')
    const userId = localStorage.getItem('userId')
    const dispatch = useDispatch()
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, 4);

        if (!/^\d+$/.test(pasteData)) return;

        const pasteOtp = pasteData.split("");
        const newOtp = [...otp];

        pasteOtp.forEach((digit, index) => {
            if (index < 4) newOtp[index] = digit;
        });

        setOtp(newOtp);
        inputsRef.current[pasteOtp.length - 1].focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data;
        const accountData = JSON.parse(sessionStorage.getItem('accountData'))
        if (sessionStorage.getItem('accountData')) {
            data = { phone: contactNumber, code: otp?.join(''), ...accountData }
        } else {
            data = { phone: contactNumber, code: otp?.join('') }
        }
        setLoading(true)
        try {
            const response = await postApiData('doctor/verify-otp', data)
            if (response.success) {
                sessionStorage.clear()
                toast.success('Verify successfully')
                if (sessionStorage.getItem('accountData')) {
                    const response = await postApiData('doctor', JSON.parse(sessionStorage.getItem("accountData")))
                    if (response.success) {

                    } else {
                        toast.error(response.message)
                        navigate(-1)
                    }
                }
                localStorage.setItem('token', response.token)
                localStorage.setItem('userId', response.userId)
                localStorage.setItem('doctorId', response.doctorId)
                if (response.nextStep) {
                    navigate(response.nextStep)
                } else {
                    navigate('/doctor/request-list')
                    dispatch(fetchDoctorDetail())
                }
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        if (!contactNumber) {
            navigate('/')
        }
    }, [contactNumber])
    return (
        <>
            <section className="admin-login-section nw-hero-section ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="admin-pisture-bx">
                                <div className="position-relative">
                                    <Link to='/doctor/create-account' className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>
                                </div>
                                <img src="/doctor-pic.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center pb-3">
                            <form action="">
                                <div className="nw-form-container">
                                    <div className="login-logo">
                                        <img src="/logo.png" alt="" />
                                    </div>

                                    <div className="admin-vndr-login my-3">
                                        <h3 className="heading-grad">Verify OTP</h3>
                                        <p className="py-3">We have sent a verification code to <span className="new_title mb-0 fz-18">+91 9067634286</span></p>
                                    </div>

                                    <form action="">
                                        <div className="custom-frm-bx admin-frm-bx lab-login-frm-bx my-3">

                                            {otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        ref={(el) => (inputsRef.current[index] = el)}
                                                        type="text"
                                                        maxLength="1"
                                                        value={digit}
                                                        className="form-control new-control-frm text-center"
                                                        placeholder="0"
                                                        onChange={(e) => handleChange(e.target.value, index)}
                                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                                        onPaste={handlePaste}
                                                    />
                                                ))}
                                        </div>

                                        <div className="mt-4 text-center">
                                            <NavLink onClick={handleSubmit} className="nw-thm-btn w-100">Verify</NavLink>
                                        </div>

                                        <div className='text-center mt-4'>
                                            <p className='do-account-title text-black'>Didn’t receive any code? </p>
                                            <p className='do-account-title py-3'>Request new code in <span className="otp-timing">30s </span></p>
                                            <a href="javascript:void(0)" className='nw-register-btn'>Resend</a>

                                        </div>


                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorOtp