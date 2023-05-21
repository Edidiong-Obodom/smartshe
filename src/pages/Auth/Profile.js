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
    return add === "null" || add == null ? "Empty" : add;
  };
  const log = useSelector(selectUserLogo);
  const logo = () => {
    return log === "null" || log == null ? "Empty" : log;
  };

  const reducer = (text) => {
    if (text.length <= 10) {
      return text;
    } else if (text.slice(9, 10) === " ") {
      let short = text.slice(0, 9);
      let completeShort = short + "...";

      return completeShort;
    } else {
      let short = text.slice(0, 9);
      let completeShort = short + "...";
      return completeShort;
    }
  };
  const reducerBig = (text) => {
    if (text.length <= 26) {
      return text;
    } else if (text.slice(25, 26) === " ") {
      let short = text.slice(0, 25);
      let completeShort = short + "...";

      return completeShort;
    } else {
      let short = text.slice(0, 25);
      let completeShort = short + "...";
      return completeShort;
    }
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
            <div className="centerFlexReal">
              <div className="FlexRow mb-3">
                <div className="FlexCol center container">
                  <span className="profileText bold block">0</span>
                  <span className="profileText gray block">Applied</span>
                </div>
                <div className="FlexCol center container">
                  <span className="profileText bold">0</span>
                  <span className="profileText gray">Approved</span>
                </div>
              </div>
              <div className="mt-5">
                <hr />
                <div className="FlexRow">
                  <div className="FlexCol rightFlexCol">
                    <div className="profileText bold">Name:</div>
                    <div className="profileText bold">Email:</div>
                    <div className="profileText bold">CAC No:</div>
                    <div className="profileText bold">Status:</div>
                    <div className="profileText bold">Address:</div>
                    <div className="profileText bold">Logo:</div>
                  </div>
                  <div className="FlexCol container profileDetailsBig">
                    <div className="profileText bold">{reducerBig(name)}</div>
                    <div className="profileText bold">{reducerBig(email)}</div>
                    <div className="profileText bold">{reducerBig(reg)}</div>
                    <div className="profileText bold">{status}</div>
                    <div className="profileText bold">
                      {reducerBig(address())}
                    </div>
                    <div className="profileText bold">{reducerBig(logo())}</div>
                  </div>
                  <div className="FlexCol container profileDetailsSmall">
                    <div className="profileText bold">{reducer(name)}</div>
                    <div className="profileText bold">{reducer(email)}</div>
                    <div className="profileText bold">{reducer(reg)}</div>
                    <div className="profileText bold">{status}</div>
                    <div className="profileText bold">{reducer(address())}</div>
                    <div className="profileText bold">{reducer(logo())}</div>
                  </div>
                </div>
              </div>
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
