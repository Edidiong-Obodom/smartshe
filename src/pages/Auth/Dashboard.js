import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import AuthNavUser from "../../components/layout/Auth/authNav";
import { api } from "../../link/API";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { motion } from "framer-motion";

const DashBoard = () => {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [name, setName] = useState("");

  const getUser = useCallback(async () => {
    try {
      await fetch(`${api}/user`, {
        method: "GET",
        headers: { authorization: sessionStorage.getItem("token") },
      })
        .then((res) => {
          if (res.status !== 200) {
            return navigate("/login");
          } else {
            return res.json();
          }
        })
        .then(function (jsonData) {
          setIsAuthenticating(false);
          setName(jsonData.userName);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [navigate]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getUser();
  }, [getUser]);

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };

  const dashBody = () => {
    return (
      <div className="pushDown-dashboard container">
        <h2 className="center">Welcome! {name}</h2>
        <h5 className="center">
          {" "}
          You are logged in. Our user dashboard is still in development please
          come back later.
        </h5>

        <div className="container center brown stuff" onClick={handlePostBack}>
          <h5>
            <i className="fa-solid fa-arrow-left"></i> Home
          </h5>
        </div>

        <div className="dashIconGrid mt-4 container">
          <div className="addIconB stuff sha">
            <motion.div
              whileInView={{ rotate: 360 }}
              transition={{ from: 0, duration: 2 }}
            >
              <AddBoxIcon className="brown" sx={{ fontSize: "72px" }} />
            </motion.div>
            <h2 className="block brown">Add Invoice</h2>
          </div>
          {/* <div className="addIconB stuff sha">
            <motion.div
              whileInView={{ rotate: 360 }}
              transition={{ from: 0, duration: 2 }}
            >
              <AddBoxIcon className="brown" sx={{ fontSize: "72px" }} />
            </motion.div>
            <h2 className="block brown">Add Invoice</h2>
          </div> */}
        </div>
      </div>
    );
  };

  if (isAuthenticating) {
    return (
      <>
        <div className="centerFlex1">
          <BeatLoader color="#fd7e2b" loading={isAuthenticating} size={"40"} />
        </div>
      </>
    );
  } else {
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
  }
};

export default DashBoard;
