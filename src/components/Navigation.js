import React from "react";
import "bootstrap/js/src/collapse.js"

//Pass State/Prop to set active tab
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <span className="navbar-brand">Ziad</span>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler01"
          aria-controls="navbarToggler01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                //set eventListener to call handlePageChange on click
                onClick={() => handlePageChange("About")}
                //set className to toggle "active" based on currentPage
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
                href="#home"
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                //set eventListener to call handlePageChange on click
                onClick={() => handlePageChange("Project")}
                //set className to toggle "active" based on currentPage
                className={
                  currentPage === "Project" ? "nav-link active" : "nav-link"
                }
                href="#project"
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                href="#resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //     //set eventListener to call handlePageChange on click
    //       onClick={() => handlePageChange("About")}
    //       //set className to toggle "active" based on currentPage
    //       className={currentPage === "About" ? "nav-link active" : "nav-link"}
    //       href="#home"
    //     >
    //       About Me
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       onClick={() => handlePageChange("Portfolio")}
    //       className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
    //       href="#portfolio"
    //     >
    //       Portfolio
    //     </a>
    //   </li>
    // <li className="nav-item">
    //   <a
    //     onClick={() => handlePageChange("Contact")}
    //     className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
    //     href="#contact"
    //   >
    //     Contact
    //   </a>
    // </li>
    // <li className="nav-item">
    //   <a
    //     onClick={() => handlePageChange("Resume")}
    //     className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
    //     href="#resume"
    //   >
    //     Resume
    //   </a>
    // </li>
    // </ul>
  );
}

export default NavTabs;
