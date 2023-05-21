import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import AuthNavUser from "../../components/layout/Auth/authNav";
import { api } from "../../link/API";
// import AddBoxIcon from "@mui/icons-material/AddBox";
import { motion } from "framer-motion";
import { logout, selectUserName } from "../../store/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DescriptionIcon from "@mui/icons-material/Description";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [isAuthenticating, setIsAuthenticating] = useState(true);
  // const [name, setName] = useState("");
  const clientName = useSelector(selectUserName);

  // const getUser = useCallback(async () => {
  //   try {
  //     const clientName = await selectUserName();
  //     setName(clientName);
  //     return clientName.length > 0
  //       ? setIsAuthenticating(false)
  //       : setIsAuthenticating(true);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }, [navigate]);
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   getUser();
  // }, [getUser]);

  // takes user back to homepage
  const handlePostBack = () => {
    sessionStorage.clear();
    return dispatch(
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
  };

  const dashBody = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="pushDown-dashboard container">
          <h2 className="center">Welcome back, {clientName}</h2>
          <h5 className="center">
            {" "}
            You are logged in. Our user dashboard is still in development please
            come back later.
          </h5>

          <div
            className="container center brown stuff"
            onClick={handlePostBack}
          >
            <h5>
              <i className="fa-solid fa-arrow-left"></i> Logout
            </h5>
          </div>

          <div className="dashIconGrid mt-4 container">
            <div className="addIconB addIconBP stuff sha">
              <motion.div
                whileInView={{ rotate: 360 }}
                transition={{ from: 0, duration: 2 }}
              >
                <CreditScoreIcon className="brown" sx={{ fontSize: "72px" }} />
              </motion.div>
              <h2 className="block brown">Loan</h2>
            </div>
            <div className="addIconB addIconBP stuff sha">
              <motion.div
                whileInView={{ rotate: 360 }}
                transition={{ from: 0, duration: 2 }}
              >
                <DescriptionIcon className="brown" sx={{ fontSize: "72px" }} />
              </motion.div>
              <h2 className="block brown">Invoice</h2>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // if (isAuthenticating) {
  //   return (
  //     <>
  //       <div className="centerFlex1">
  //         <BeatLoader color="#fd7e2b" loading={isAuthenticating} size={"40"} />
  //       </div>
  //     </>
  //   );
  // } else {
  return (
    <>
      <div className="flexi">
        <AuthNavUser />
        <div className="flexiR">{dashBody()}</div>
      </div>
      <div className="smallNav">
        <AuthNavUser />
        {dashBody()}
      </div>
    </>
  );

  // return (
  //   <div className="centerFlex1">
  //     <BeatLoader
  //       color="#fd7e2b"
  //       loading={true}
  //       size={"40"}
  //     />
  //   </div>
  // );
};
// };

export default DashBoard;
