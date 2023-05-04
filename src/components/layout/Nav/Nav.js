import { logo } from "../../../images/images";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const refresh = () => {
    return window.location.reload();
  };
  const toggler = () => {
    return toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white bottomShadow">
        <div className="container">
          <div className="stuff limiter" onClick={refresh}>
            <img src={logo} alt="smartsheLogo" width="65px" />
            <h5 className="brown inlineBlock">SmartSHE</h5>
          </div>
          <div
            className="navbar-toggler noBorder"
            // type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" bold" onClick={toggler}>
              <motion.div
                whileTap={{ rotate: 360 }}
                transition={{ from: 0, duration: 1 }}
              >
                {!toggle ? (
                  <i className="fa-solid fa-bars atGrabNormal"></i>
                ) : (
                  <i className="fa-solid fa-xmark atGrabNormal-1"></i>
                )}
              </motion.div>
            </span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/"
                    className="nav-link atGrabSoft underline1"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "rgb(177, 64, 23)",
                            borderBottom: "2px solid #fd7e2b",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    Home
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/about"
                    className="nav-link atGrabSoft"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "rgb(177, 64, 23)",
                            borderBottom: "2px solid #fd7e2b",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    About us
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/ourteam"
                    className="nav-link atGrabSoft"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "rgb(177, 64, 23)",
                            borderBottom: "2px solid #fd7e2b",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    Our Team
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className="container"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/login"
                    className="nav-link atGrabSoft"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "rgb(177, 64, 23)",
                            borderBottom: "2px solid #fd7e2b",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    Login
                  </NavLink>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
