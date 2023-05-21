// import { logo } from "../../../images/images";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { logo } from "../../../images/images";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/reducers/userReducer";

const AuthNavUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    return toggle ? setToggle(false) : setToggle(true);
  };
  const refresh = () => {
    return window.location.reload();
  };
  const logOut = () => {
    sessionStorage.clear();
    dispatch(
      logout({
        name: "",
        email: "",
        reg: "",
        logo: "",
        address: "",
        status: "",
        loggedIn: false,
        isAuthenticating: false,
      })
    );
    return navigate(location.pathname);
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
            <NavLink
              to="/user/dashboard"
              className="nav-link atGrabSoft underline1"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#363636",
                      borderBottom: "2px solid #363636",
                    }
                  : { color: "#fff", borderBottom: "none" }
              }
            >
              <DashboardIcon /> DashBoard
            </NavLink>
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <NavLink
              to="/user/profile"
              className="nav-link atGrabSoft underline1"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#363636",
                      borderBottom: "2px solid #363636",
                    }
                  : { color: "#fff", borderBottom: "none" }
              }
            >
              <AccountBoxIcon /> Profile
            </NavLink>
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <HistoryIcon /> History
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <SettingsIcon /> Settings
          </span>
          <span className="block atGrabSoft centerMarg white bold stuff grayHover mt-4">
            <HelpIcon /> Support
          </span>
        </div>
        <div
          onClick={logOut}
          className="pb-5 atGrabSoft center white bold stuff grayHover flexiLBaby"
        >
          <motion.div
            className="limiter centerMargpartial"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
          >
            <i className="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
          </motion.div>
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
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
                <NavLink
                  to="/user/settings"
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
                  <SettingsIcon /> Settings
                </NavLink>
              </li>
              <li className="nav-item">
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
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={logOut}
                  className="nav-link atGrabSoft"
                  // style={({ isActive }) =>
                  //   isActive
                  //     ? {
                  //         color: "#fff",
                  //         borderBottom: "2px solid #fff",
                  //       }
                  //     : { color: "#363636", borderBottom: "none" }
                  // }
                >
                  <span className="white">
                    <i className="fa-solid fa-right-from-bracket"></i> &nbsp;
                    Logout
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AuthNavUser;
