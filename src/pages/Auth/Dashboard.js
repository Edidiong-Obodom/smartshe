import AuthNavUser from "../../components/layout/Auth/authNav";
import { motion } from "framer-motion";
import { logout, selectUserName } from "../../store/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import Four0Four from "../../components/error/404error";

const DashBoard = () => {
  const dispatch = useDispatch();
  const clientName = useSelector(selectUserName);
  const navigate = useNavigate();

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
            <div className="addIconB addIconBP stuff sha" onClick={() => {
              navigate("invoiceapply");
            }}>
              <motion.div
                whileInView={{ rotate: 360 }}
                transition={{ from: 0, duration: 2 }}
              >
                <DescriptionIcon className="brown" sx={{ fontSize: "72px" }} />
              </motion.div>
              <h2 className="block brown">Invoice</h2>
            </div>
            <div className="addIconB addIconBP stuff sha">
              <motion.div
                whileInView={{ rotate: 360 }}
                transition={{ from: 0, duration: 2 }}
              >
                <CreditScoreIcon className="brown" sx={{ fontSize: "72px" }} />
              </motion.div>
              <h2 className="block brown">Loan</h2>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

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
    {/* <Four0Four /> */}
    </>
  );
};

export default DashBoard;
