import {
    faChevronLeft,
    faEyeSlash,
    faLock,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function SetPassword() {
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
                                        <h3 className="heading-grad">Set Password</h3>
                                        <p className="py-2">Create a strong password to keep your account secure.</p>
                                    </div>

                                    <form action="">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">New Password</label>
                                            <input type="password" className="form-control new-control-frm px-5" placeholder="Enter New Password" />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLock} /> </span>
                                            </div>
                                            <div className="login-eye-bx">
                                                <a href="javascript:void(0)" className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faEyeSlash} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Confirm Password</label>
                                            <input type="password" className="form-control new-control-frm px-5" placeholder="Enter  Confirm Password" />
                                            <div className="contact-add-icon">
                                                <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLock} /> </span>
                                            </div>
                                            <div className="login-eye-bx">
                                                <a href="javascript:void(0)" className="nw-contact-icon">
                                                    <FontAwesomeIcon icon={faEyeSlash} />
                                                </a>
                                            </div>
                                        </div>


                                        <div className="mt-3 text-center">
                                            <button className="nw-thm-btn w-100">Save</button>
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

export default SetPassword