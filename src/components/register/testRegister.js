import classes from "../register/RegisterView.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../images/images";
import { api } from "../../link/API";
import { motion } from "framer-motion";

const TestRegister = () => {
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [userReg, setUserReg] = useState("");
  // handle loading on submit
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();

  // cac
  const [cacVerified, setCAC] = useState(false);

  // email
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  // error messages and status
  const [loginError, setLoginError] = useState(
    ""
  );
  const [dip, setDip] = useState(false);

  const navigate = useNavigate();
  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  // Handles the total form submission
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          newUserName,
          userPhone,
          userReg,
        }),
      }).then((res) => {
        if (res.status === 401) {
          setDip(true);
          setLoading(false);
          return setLoginError("Email already in use...");
        } else if (res.status === 411) {
          setDip(true);
          setLoading(false);
          return setLoginError("Something went wrong...");
        } else {
          setLoading(false);
          setSuccess(true);
          return res.json();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };

  // verifies the user's CAC registeration
  const verifyCAC = async (e) => {
    e.preventDefault();
    const searchTerm = userReg;
    try {
      setLoading(true);
      await fetch(`${api}/auth/verifycac`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          searchTerm,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            setLoading(false);
            setLoginError("Something went wrong somewhere...");
            return setDip(true);
          } else {
            setDip(false);
            return res.json();
          }
        })
        .then((data) => {
          setLoading(false);
          // Compares the name gotten from CAC and the name inputed by the client
          if (data.companyName.toUpperCase().slice(0, 4) === userName.toUpperCase().slice(0, 4)){
            setCAC(true);
            setLoading(false);
            return setNewUserName(data.companyName);
          } else{
            setLoginError("The CAC name does not match the CAC registeration number, please check the name and number and try again.");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  // sends the user's verification code
  const vCodeSender = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch(`${api}/auth/verificationcode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
        }),
      })
        .then((res) => {
          if (res.status === 418) {
            setLoading(false);
            setLoginError("Something went wrong somewhere...");
            return setDip(true);
          } else if (res.status === 406) {
            setLoading(false);
            setLoginError("Client already exists...");
            return setDip(true);
          } else if (res.status === 200) {
            res.json();
            setLoginError("If you don't see the verification code in your inbox, check your spam folder.");
            setDip(true);
            setLoading(false);
            return setVerifyEmail(true);
          }
        })
    } catch (error) {
      console.error(error);
    }
  };
  // verifies the user's verification code
  const vCodeVerify = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch(`${api}/auth/emailverification`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          verificationCode,
        }),
      })
        .then((res) => {
          if (res.status === 418) {
            setLoading(false);
            setLoginError("Something went wrong somewhere...");
            return setDip(true);
          } else if (res.status === 403) {
            setLoading(false);
            setLoginError("Wrong code, try again...");
            return setDip(true);
          } else if (res.status === 200) {
            res.json();
            setDip(false);
            setLoading(false);
            return setEmailVerified(true);
          }
        })
    } catch (error) {
      console.error(error);
    }
  };
  const formDisplay = () => {
    if (!cacVerified && !verifyEmail && !emailVerified) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={` mt-1 mb-4 ${classes.bod} form-signin`}>
            <img
              className={`${classes.bodimg} block centerMarg`}
              src={logo}
              alt="smartsheLogo"
              width="120px"
            />
            <div className="container">
              {loginError && ( // then if changed flag is false show error message.
                dip? (
                    
                <div
                className="container"
                style={{ color: "red"}}
              >
                <span>{loginError}</span>
              </div>
                ) : ""
              )}

              {/* CAC verification form */}
              <form className="container" onSubmit={verifyCAC}>
                <div className="mb-1">
                  <label htmlFor="mail1" className="form-label">
                    <span className="red">*</span> Company's name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mail1"
                    autoComplete="off"
                    aria-describedby="mailHelp"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="RegNo" className="form-label">
                    <span className="red">*</span> Company's CAC RegNo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="RegNo"
                    autoComplete="off"
                    maxLength="9"
                    pattern="[A-Za-z0-9]+"
                    value={userReg}
                    onChange={(e) => setUserReg(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    className={`btn bold bg-brown bottomShadow btnct btnct-white ${classes.login}`}
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <div
                          style={{ display: "inline-block" }}
                          className="load"
                        ></div>
                      </>
                    ) : (
                      <>Verify Your CAC Registeration</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      );
    } else if (cacVerified && !verifyEmail && !emailVerified) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={` mt-1 mb-4 ${classes.bod} form-signin`}>
            <img
              className={`${classes.bodimg} block centerMarg`}
              src={logo}
              alt="smartsheLogo"
              width="120px"
            />
            {/* <h3>SmartSHE</h3> */}
            <div className="container">
              <h4 className="mb-3">{newUserName}</h4>
              {loginError && ( // then if changed flag is false show error message.
                dip? (
                    
                <div
                className="container"
                style={{ color: "red"}}
              >
                <span>{loginError}</span>
              </div>
                ) : ""
              )}
              {/* Email verification code sender form */}
              <form className="container" onSubmit={vCodeSender}>
                <div className="mb-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <span className="red">*</span> Company's email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="d-grid gap-2  mt-4">
                  <button
                    className={`btn bold bg-brown bottomShadow btnct btnct-white ${classes.login}`}
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <div
                          style={{ display: "inline-block" }}
                          className="load"
                        ></div>
                      </>
                    ) : (
                      <>Next</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      );
    } else if (cacVerified && verifyEmail && !emailVerified) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={` mt-1 mb-4 ${classes.bod} form-signin`}>
            <img
              className={`${classes.bodimg} block centerMarg`}
              src={logo}
              alt="smartsheLogo"
              width="120px"
            />
            {/* <h3>SmartSHE</h3> */}
            <div className="container">
              <h4 className="mb-3">{newUserName}</h4>
              {loginError && ( // then if changed flag is false show error message.
                dip? (
                    
                <div
                className="container"
                style={{ color: "red"}}
              >
                <span>{loginError}</span>
              </div>
                ) : ""
              )}
              {/* Email verification code sender form */}
              <form className="container" onSubmit={vCodeVerify}>
                <div className="mb-1">
                  <label htmlFor="vcode" className="form-label">
                    <span className="red">*</span> Enter Verification Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="vcode"
                    maxLength={5}
                    autoComplete="off"
                    aria-describedby="vcodeHelp"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                  />
                </div>
                
                <div className="d-grid gap-2 mt-4">
                  <button
                    className={`btn bold bg-brown bottomShadow btnct btnct-white ${classes.login}`}
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <div
                          style={{ display: "inline-block" }}
                          className="load"
                        ></div>
                      </>
                    ) : (
                      <>Verify Email</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={` mt-1 mb-4 ${classes.bod} form-signin`}>
            <img
              className={`${classes.bodimg} block centerMarg`}
              src={logo}
              alt="smartsheLogo"
              width="120px"
            />
            {/* <h3>SmartSHE</h3> */}
            <div className="container">
              <h4 className="mb-3">{newUserName}</h4>
              {loginError && ( // then if changed flag is false show error message.
                dip? (
                    
                <div
                className="container"
                style={{ color: "red"}}
              >
                <span>{loginError}</span>
              </div>
                ) : ""
              )}
              {/* <form className="container"> */}
              <form className="container" onSubmit={onSubmitForm}>
                <div className="mb-1">
                  <label htmlFor="phone" className="form-label">
                    <span className="red">*</span> Company's phone no
                  </label>
                  <input
                    type="tell"
                    className="form-control"
                    id="phone"
                    autoComplete="off"
                    minLength="11"
                    maxLength="11"
                    pattern="[0-9]+"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <span className="red">*</span> Password
                  </label>
                  <span className={`d-flex ${classes.white}`}>
                    <input
                      type="password"
                      className="form-control me-2"
                      id="exampleInputPassword1"
                      autoComplete="off"
                      ref={pass}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      className={`btn ${classes.eye}`}
                      onClick={showPassword}
                      type="button"
                    >
                      <i className={`fa-regular ${eye}`}></i>
                    </button>
                  </span>
                  <div id="emailHelp" className="form-text">
                    min. 8 characters
                  </div>
                </div>
                <div className="d-grid gap-2 mt-4">
                  <button
                    className={`btn bold bg-brown bottomShadow btnct btnct-white ${classes.login}`}
                    type="submit"
                  >
                    {loading ? (
                      <>
                        <div
                          style={{ display: "inline-block" }}
                          className="load"
                        ></div>
                      </>
                    ) : (
                      <>Signup</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      );
    }
  };
  if (success) {
    return (
      <>
        <div className="container fixed-top">
          <div className="container brown stuff" onClick={handlePostBack}>
            <h5>
              <i className="fa-solid mt-2 fa-chevron-left"></i> Home
            </h5>
          </div>
        </div>
        <div className="centerFlex1">
          <div className="">
            <div className="center brown centerF1">
              <i className="atGrabMassive fa-solid fa-square-check"></i>
            </div>
            <div className=" atGrab1">Registeration Successful!</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="container brown stuff" onClick={handlePostBack}>
            <h5>
              <i className="fa-solid mt-2 fa-chevron-left"></i> Home
            </h5>
          </div>
          {formDisplay()}
        </div>
      </>
    );
  }
};

export default TestRegister;
