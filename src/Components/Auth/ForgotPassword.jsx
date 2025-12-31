import {
    faChevronLeft,
    
    faPhone,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
            <section className="admin-login-section nw-hero-section ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="admin-pisture-bx">
                                <div className="position-relative">
                                    <a href="javascript:void(0)" className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </a>
                                </div>

                                <img src="new-login-bnnr.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center pb-3">
                            <form action="">
                                <div className="nw-form-container">
                                    <div className="login-logo">
                                        <img src="/logo.png" alt="" />
                                    </div>

                                    <div className="admin-vndr-login my-3">
                                        <h3 className="heading-grad">Forgot Password</h3>
                                        <p className="py-3">Please enter email   address below</p>
                                    </div>

                                    <form action="">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Mobile Number</label>
                                            <input type="number" className="form-control new-control-frm px-5" placeholder="Enter Mobile Number" />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon"> <FontAwesomeIcon icon={faPhone} /> </span>
                                            </div>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <NavLink className="nw-thm-btn w-100">Login</NavLink>
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

export default ForgotPassword