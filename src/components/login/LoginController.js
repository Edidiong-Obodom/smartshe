import classes from "../login/LoginController.module.css";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { api } from "../../link/API";
import { logo } from "../../images/images";
import { useDispatch } from "react-redux";
import { changeAll } from "../../store/reducers/userReducer";
import { useLocation, useNavigate } from "react-router-dom";
// import { changeName, selectUser } from "../../store/reducers/userReducer";

const LoginView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // handle loading on submit
  const [loading, setLoading] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash");
  const pass = useRef();

  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

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
      await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then(async (res) => {
        const jsonData = await res.json();
        if (res.status === 401) {
          setDip("block");
          setLoading(false);
          return setLoginError(`${jsonData}`);
        } else if (res.status === 411) {
          setDip("block");
          setLoading(false);
          return setLoginError("Something went wrong...");
        } else {
          setLoading(false);
          sessionStorage.setItem("name", jsonData.person.name);
          sessionStorage.setItem("email", jsonData.person.email);
          sessionStorage.setItem("reg", jsonData.person.reg);
          sessionStorage.setItem("logo", jsonData.person.logo);
          sessionStorage.setItem("address", jsonData.person.address);
          sessionStorage.setItem("status", jsonData.person.status);
          sessionStorage.setItem("loggedIn", JSON.stringify(true));
          dispatch(
            changeAll({
              name: jsonData.person.name,
              email: jsonData.person.email,
              reg: jsonData.person.reg,
              logo: jsonData.person.logo,
              address: jsonData.person.address,
              status: jsonData.person.status,
              loggedIn: true,
              isAuthenticating: false,
            })
          );
          sessionStorage.setItem("token", "Bearer " + jsonData.token);
          return location.pathname === "/login"
            ? navigate("/user/dashboard")
            : "";
        }
      })
      // .then(function (data) {
      //   sessionStorage.setItem("token", "Bearer " + data.token);
      //   return navigate("/dashboard");
      // });
    } catch (error) {
      console.error(error);
    }
  };

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="container brown stuff" onClick={handlePostBack}>
          <h5>
            <i className="fa-solid mt-2 fa-chevron-left"></i> Home
          </h5>
        </div>
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
              {loginError && // then if changed flag is false show error message.
                (dip ? (
                  <div className="container" style={{ color: "red" }}>
                    <span>{loginError}</span>
                  </div>
                ) : (
                  ""
                ))}
              <form className="container" onSubmit={onSubmitForm}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
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
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
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
                    className={`btn shadowB ${classes.login}`}
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
                      <>Login</>
                    )}
                  </button>
                </div>

                <Link className={`${classes.forgot}`} to="/reset">
                  Forgotten password?
                </Link>

                <hr />
                <h4 className="center mb-3">or</h4>
                <div
                  className={`d-grid gap-2 shadowB btn ${classes.signup}`}
                  onClick={handleSignUp}
                >
                  Signup
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginView;
