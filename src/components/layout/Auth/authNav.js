// import { logo } from "../../../images/images";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";
import { logo } from "../../../images/images";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const AuthNavUser = () => {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    return toggle ? setToggle(false) : setToggle(true);
  };
  const refresh = () => {
    return window.location.reload();
  };
  return (
    <>
      <div className="flexiL bg-browni">
        <div
          className="centerMarg pushDown-2 mb-5 stuff limiter"
          onClick={refresh}
        >
          <h2 className="white">SmartSHE</h2>
        </div>
        <div className="centerMarg mt-3">
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <DashboardIcon /> DashBoard
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <AccountBoxIcon /> Profile
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <HistoryIcon /> History
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <HelpIcon /> Support
          </span>
        </div>
        <div className="pb-5 atGrabSoft center white bold stuff grayHover flexiLBaby">
          <i className="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
        </div>
      </div>

      {/* small screen */}
      <nav className="navbar navbar-expand-lg fixed-top bg-brown bottomShadow smallNav">
        <div className="container">
          <div className="stuff limiter" onClick={refresh}>
            {/* <img src={logo} alt="smartsheLogo" width="65px" /> */}
            <h5 className="inlineBlock white">SmartSHE</h5>
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
            <span className="white bold" onClick={toggler}>
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
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/user/dashboard"
                    className="nav-link atGrabSoft underline1"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#fff",
                            borderBottom: "2px solid #fff",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                   <DashboardIcon /> DashBoard
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/user/profile"
                    className="nav-link atGrabSoft"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#fff",
                            borderBottom: "2px solid #fff",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    <AccountBoxIcon /> Profile
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/user/history"
                    className="nav-link atGrabSoft"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#fff",
                            borderBottom: "2px solid #fff",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    <HistoryIcon /> History
                  </NavLink>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div
                  className=""
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                >
                  <NavLink
                    to="/user/support"
                    className="nav-link atGrabSoft"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#fff",
                            borderBottom: "2px solid #fff",
                          }
                        : { color: "#363636", borderBottom: "none" }
                    }
                  >
                    <HelpIcon /> Support
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

export default AuthNavUser;
