import classes from "../register/RegisterView.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../images/images";
import { api } from "../../link/API";

const RegisterView = () => {
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [userReg, setUserReg] = useState("");
  // handle loading on submit
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();

  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");

  const navigate = useNavigate();
  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          userName,
          userPhone,
          userReg,
        }),
      }).then((res) => {
        if (res.status === 401) {
          setDip("block");
          setLoading(false);
          return setLoginError("Email already in use...");}
        else if (res.status === 411) {
          setDip("block");
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

  const handlePostBack = () => {
    return navigate("/");
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
        </div>
        <div className={` mt-1 mb-4 ${classes.bod} form-signin`}>
          <img
            className={`${classes.bodimg} block centerMarg`}
            src={logo}
            alt="smartsheLogo"
            width="120px"
          />
          {/* <h3>SmartSHE</h3> */}
          <div className="container">
            {loginError && ( // then if changed flag is false show error message.
              <div
                className="container"
                style={{ color: "red", display: { dip } }}
              >
                <span>{loginError}</span>
              </div>
            )}
            {/* <form className="container"> */}
            <form className="container" onSubmit={onSubmitForm}>
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
              <div className="mb-1">
                <label htmlFor="RegNo" className="form-label">
                  <span className="red">*</span> Company's CAC RegNo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="RegNo"
                  autoComplete="off"
                  minLength="8"
                  maxLength="8"
                  pattern="[A-Za-z0-9]+"
                  value={userReg}
                  onChange={(e) => setUserReg(e.target.value)}
                  required
                />
              </div>
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
              <div className="d-grid gap-2 ">
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
      </>
    );
  }
};

export default RegisterView;
