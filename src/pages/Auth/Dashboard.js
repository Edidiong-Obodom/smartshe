import { useNavigate } from "react-router-dom";
import AuthNavUser from "../../components/layout/Auth/authNav";

const DashBoard = () => {
  const navigate = useNavigate();

  // takes user back to homepage
  const handlePostBack = () => {
    return navigate("/");
  };

  return (
    <>
      <div className="flexi">
        <AuthNavUser />
        <div className="flexiR">
          <div className="pushDown-3">
            <h1 className="center">
              Still in Development Please Come Back Later
            </h1>
            <div className="mt-3 container center brown stuff" onClick={handlePostBack}>
              <h5>
                <i className="fa-solid fa-arrow-left"></i> Home
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="smallNav">
        <AuthNavUser />
        <div className="pushDown container">
          <h1 className="center">
            Still in Development Please Come Back Later
          </h1>

          <div className="mt-3 container center brown stuff" onClick={handlePostBack}>
            <h5>
              <i className="fa-solid fa-arrow-left"></i> Home
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
