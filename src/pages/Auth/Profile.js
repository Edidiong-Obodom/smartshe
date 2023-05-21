import AuthNavUser from "../../components/layout/Auth/authNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import {
  selectUserAddress,
  selectUserEmail,
  selectUserLogo,
  selectUserName,
  selectUserReg,
  selectUserStatus,
} from "../../store/reducers/userReducer";
import { motion } from "framer-motion";

const Profile = () => {
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const status = useSelector(selectUserStatus);
  const reg = useSelector(selectUserReg);
  const add = useSelector(selectUserAddress);
  const address = () => {
    return add === "null" || add == null ? "empty" : add;
  };
  const log = useSelector(selectUserLogo);
  const logo = () => {
    return log === "null" || log == null ? "empty" : log;
  };
  const profile = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="pushDown-dashboard container">
          <div className="">
            <div className="centerFlexReal mb-3">
              <AccountCircleIcon className="brown" sx={{ fontSize: "72px" }} />
              <div className="btnct btnct-brown mt-2">Upload Logo</div>
            </div>
            <span className="profileText bold block center mb-3">
              Company Name: {name}
            </span>
            <span className="profileText bold block center mb-3">
              Company Email: {email}
            </span>
            <span className="profileText bold block center mb-3">
              Company CAC No: {reg}
            </span>
            <span className="profileText bold block center mb-3">
              Company Status: {status}
            </span>
            <span className="profileText bold block center mb-3">
              Company Address: {address()}
            </span>
            <span className="profileText bold block center mb-3">
              Company Logo: {logo()}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="flexi">
        <AuthNavUser />
        <div className="flexiR">{profile()}</div>
      </div>
      <div className="smallNav">
        <AuthNavUser />
        {profile()}
      </div>
    </>
  );
};

export default Profile;
