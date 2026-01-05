// import { faCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

// function Header() {

//     const [selectedLocation, setSelectedLocation] = useState("Jaipur, India");

//   const locations = [
//     "Jaipur, India",
//     "Delhi, India",
//     "Mumbai, India",
//     "Pune, India",
//     "Kolkata, India"
//   ];


//   return (
//    <>

//    <nav className="navbar navbar-expand-lg navbar-light-box ">
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img src="/logo.png" alt="Logo" className="logo-img" />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

       
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
//             <li className="nav-item">
//               <a className="nav-link active" href="#">
//                 Home
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Doctors
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Hospitals
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Labs
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>

//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>

//           <div className="d-flex align-items-center flex-wrap gap-4">
           

//             <div className="dropdown">
//                   <a
//                     href="#"
//                     className="dropdown-toggle nw-address-btn"
//                     id="acticonMenu1"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     onClick={(e) => e.preventDefault()}
//                   >
//                     <FontAwesomeIcon icon={faLocationDot} /> {selectedLocation}
//                   </a>

//                   <ul
//                     className="dropdown-menu dropdown-menu-end mt-2 nw-location-bx"
//                     aria-labelledby="acticonMenu1"
//                   >

//                     {locations.map((loc, index) => (
//                       <li
//                         key={index}
//                         className="prescription-item"
//                         onClick={() => setSelectedLocation(loc)}
//                       >
//                         <div className="prescription-nav d-flex justify-content-between align-items-center">
//                           {loc}

//                           {selectedLocation === loc && (
//                             <FontAwesomeIcon icon={faCheck} />
//                           )}
//                         </div>
//                       </li>
//                     ))}

//                   </ul>
//                 </div>


//             <div className="d-flex align-items-center  gap-3">
//               <a href="#" className="nw-thm-btn outline">
//                 <FaUser className="me-1" /> Login
//               </a>
              
//               <a href="#" className="nw-thm-btn">
//                 Register Here
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>
//     </nav>

//    </>
//   )
// }

// export default Header



import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Jaipur, India");

  const locations = ["Jaipur, India", "Delhi, India", "Mumbai, India"];

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
          <NavLink className="navbar-brand me-0" to="/">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </NavLink>

      
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
                <NavLink to="/" className="nav-link active" onClick={closeMenu}>
                  Home
                </NavLink>
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
                <Link className="nav-link" to="/find-labs" onClick={closeMenu}>
                  Labs
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  Book ambulance
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
                <Link to='/select-account-type' className="nw-thm-btn outline" onClick={closeMenu}>
                  <FaUser className="me-1" /> Login
                </Link>

                <Link to='/select-account-type' className="nw-thm-btn" onClick={closeMenu}>
                  Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
