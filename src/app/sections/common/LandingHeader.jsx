import { NavLink, useLocation } from "react-router-dom";
import ItodoImage from "../../elements/itodo-img";
import { useState } from "react";
import { loadScript } from "../../../globals/constants";
import { useEffect } from "react";
import logo from "../../../assets/images/Logo/Logo.png";
function LandingHeader() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  function toggleNavClass() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    loadScript("js/mobilenav.js");
  });

  return (
    <>
      <header
        className={
          "header-style1 site-header  mobile-sider-drawer-menu " +
          (isActive ? "active" : "")
        }
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container clearfix">
              <div className="logo-header">
                <img src={logo} alt="Logo" className="header-logo-main" />
              </div>
              <button
                id="mobile-side-drawer"
                data-target=".header-nav"
                data-toggle="collapse"
                className="navbar-toggler collapsed"
                onClick={toggleNavClass}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar icon-bar-first" />
                <span className="icon-bar icon-bar-two" />
                <span className="icon-bar icon-bar-three" />
              </button>

              {/* MAIN NAVIGATION */}
              <div className="header-nav navbar-collapse collapse d-flex justify-content-end collapse ">
                <ul className=" nav navbar-nav ">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/services" ? "active" : ""
                    }
                  >
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li
                    className={
                      location.pathname === "/about-us" ? "active" : ""
                    }
                  >
                    <NavLink to="/about-us">About us</NavLink>
                  </li>

                  <li
                    className={
                      location.pathname === "//contact-us" ? "active" : ""
                    }
                  >
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default LandingHeader;
