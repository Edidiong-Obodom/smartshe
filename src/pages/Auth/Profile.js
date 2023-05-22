import AuthNavUser from "../../components/layout/Auth/authNav";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLogo,
  logout,
  selectUserAddress,
  selectUserEmail,
  selectUserLogo,
  selectUserName,
  selectUserReg,
  selectUserStatus,
} from "../../store/reducers/userReducer";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { api } from "../../link/API";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();

  const hiddenFileInput = useRef();
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const status = useSelector(selectUserStatus);
  const reg = useSelector(selectUserReg);
  const add = useSelector(selectUserAddress);
  const logo = useSelector(selectUserLogo);

  // const [image, setImage] = useState();
  let [display, setDisplay] = useState(false);
  // handle loading on submit
  const [loading, setLoading] = useState(false);
  const address = () => {
    return add === "null" || add == null ? "Empty" : add;
  };

  // const logo = () => {
  //   return log === "null" || log == null ? "Empty" : log;
  // };
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
  };
  console.log(logo === null);
  console.log(logo === "null");
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

  // converts image to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // const uploadLogoHandler = async (e) => {
  //   e.preventDefault();

  // };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const image = await convertToBase64(fileUploaded);
    console.log(image);
    try {
      setLoading(true);
      await axios
        .post(
          `${api}/user/logoupload`,
          {
            image,
          },
          {
            headers: {
              // 'content-type': 'text/json'
              authorization: sessionStorage.getItem("token"),
            },
          }
        )
        .then(function (response) {
          // console.log(response.status);
          if (response.status === 403) {
            console.log("bozo");
            setLoading(false);
            return logOut();
          } else if (response.status === 411) {
            setLoading(false);
            return console.log("Something went wrong...");
          } else {
            setLoading(false);
            dispatch(changeLogo(response.data.url));
            return setDisplay(true);
          }
        });
    } catch (error) {
      console.error(error);
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
              {logo === null || logo === "null" ? (
               <>
                <AccountCircleIcon
                  className="brown mb-2"
                  sx={{ fontSize: "72px" }}
                />
                <div onClick={handleClick} className="btnct btnct-brown mt-2">

                {loading ? (

                  <>

                    <BeatLoader color="#fff" loading={loading} size={"12"} />

                  </>

                ) : (

                  <>Upload Logo</>

                )}

              </div>
               </>
              ) : (
                <>
                <div
                  style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="profileImage mb-2"
                ></div>
                <div onClick={handleClick} className="btnct btnct-brown mt-2">

                {loading ? (

                  <>

                    <BeatLoader color="#fff" loading={loading} size={"12"} />

                  </>

                ) : (

                  <>Change Logo</>

                )}

              </div>
              </>
              )}
              
              <input
                type="file"
                accept=".jpeg, .png, .jpg, .svg"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
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
                  </div>
                  <div className="FlexCol container profileDetailsBig">
                    <div className="profileText bold">{reducerBig(name)}</div>
                    <div className="profileText bold">{reducerBig(email)}</div>
                    <div className="profileText bold">{reducerBig(reg)}</div>
                    <div className="profileText bold">{status}</div>
                    <div className="profileText bold">
                      {reducerBig(address())}
                    </div>
                  </div>
                  <div className="FlexCol container profileDetailsSmall">
                    <div className="profileText bold">{reducer(name)}</div>
                    <div className="profileText bold">{reducer(email)}</div>
                    <div className="profileText bold">{reducer(reg)}</div>
                    <div className="profileText bold">{status}</div>
                    <div className="profileText bold">{reducer(address())}</div>
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
