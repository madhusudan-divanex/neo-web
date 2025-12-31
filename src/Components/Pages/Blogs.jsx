import { faCalendar, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

function Blogs() {
  return (
    <>
     <section className="tp-breadcrum-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center mb-3">
                                <h4 className="lg_title">Blogs</h4>
                            </div>
                            <div className="admin-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb custom-breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="breadcrumb-link">
                                                <FontAwesomeIcon icon={faHome} />
                                            </a>
                                        </li>


                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                          Blogs
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                        <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <div className="bloging-card">
                                <div class="blog-picture">
                                    <img src="/hospital-pic.jpg" alt="example" class="img-scale" />
                                </div>
                                <div className="blog-content mt-2">
                                    <h4>Navigating Telehealth: A Guide to Virtual Healthcare Visits</h4>

                                    <div className="d-flex gap-3 my-3">
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faUser}/> Admin</span>
                                        <span className="blog-user-title"><FontAwesomeIcon icon={faCalendar}/> 13 Aug, 2023</span>
                                    </div>

                                    <p className="blog-para">Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good health.</p>

                                    <div className="text-center mt-4">
                                          <NavLink to="/blogs-detail" className="nw-thm-btn w-75">Read More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default Blogs