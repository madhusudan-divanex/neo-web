import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";


function DoctorHeader() {
      const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Jaipur, India");

  const locations = ["Jaipur, India", "Delhi, India", "Mumbai, India", "Sawai Madhopur, India"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light-box">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
            id="navbarSupportedContent"
          >

            <div className="mobile-close-btn d-lg-none">
              <FontAwesomeIcon icon={faTimes} onClick={closeMenu} />
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0  gap-lg-2 gap-sm-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={closeMenu}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  Doctors
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  Hospitals
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  Labs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>


            <div className="d-flex align-items-center flex-wrap gap-2">
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle nw-address-btn"
                  data-bs-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  <FontAwesomeIcon icon={faLocationDot} /> {selectedLocation}
                </a>

                <ul className="dropdown-menu dropdown-menu-end mt-2 nw-location-bx">
                  {locations.map((loc, index) => (
                    <li
                      key={index}
                      className="prescription-item"
                      onClick={() => setSelectedLocation(loc)}
                    >
                      <div className="prescription-nav d-flex justify-content-between align-items-center">
                        {loc}
                        {selectedLocation === loc && (
                          <FontAwesomeIcon icon={faCheck} />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex align-items-center gap-2 flex-wrap">
                <a href="#" className="nw-thm-btn outline" onClick={closeMenu}>
                  <FaUser className="me-1" /> Login
                </a>

                <a href="#" className="nw-thm-btn" onClick={closeMenu}>
                  Register Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>


      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default DoctorHeader