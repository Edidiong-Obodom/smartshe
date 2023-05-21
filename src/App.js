import { Route, Routes } from "react-router-dom";
import Login from "./pages/Unauth/Login";
import Signup from "./pages/Unauth/Signup";
import Home from "./pages/Unauth/Home.js";
import Admin from "./pages/Auth/Admin";
import About from "./pages/Unauth/About";
import OurTeam from "./pages/Unauth/Team";
import DashBoard from "./pages/Auth/Dashboard";
import Profile from "./pages/Auth/Profile";
import { useSelector, useDispatch } from "react-redux";
import { changeIsAuth, selectUserLoggedIn } from "./store/reducers/userReducer";
import { useCallback, useEffect } from "react";
import { selectUserIsAuth } from "./store/reducers/userReducer";
import { BeatLoader } from "react-spinners";
// import Test from "./pages/Test";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectUserIsAuth);
  const userIsLoggedIn = useSelector(selectUserLoggedIn);

  const getUser = useCallback(async () => {
    try {
      isAuth ? dispatch(changeIsAuth(false)) : dispatch(changeIsAuth(true));
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const authHandler = () => {
    if (isAuth) {
      return (
        <>
          <Route
            path="/user/dashboard"
            element={
              <div className="centerFlex1">
                <BeatLoader color="#fd7e2b" loading={isAuth} size={"40"} />
              </div>
            }
          />

          <Route
            path="/user/profile"
            element={
              <div className="centerFlex1">
                <BeatLoader color="#fd7e2b" loading={isAuth} size={"40"} />
              </div>
            }
          />
        </>
      );
    } else {
      return (
        <>
          <Route
            path="/user/dashboard"
            element={userIsLoggedIn ? <DashBoard /> : <Login />}
          />
          <Route
            path="/user/profile"
            element={userIsLoggedIn ? <Profile /> : <Login />}
          />
          <Route path="/checker" element={<Admin />} />
        </>
      );
    }
  };

  return (
    <Routes>
      {/* Unauth Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/test" element={<Test />} /> */}

      {/* Auth Routes */}
      {authHandler()}
    </Routes>
  );
}

export default App;
