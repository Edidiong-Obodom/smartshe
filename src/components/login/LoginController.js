import LeftHandSide from "./loginComponents/LeftHandSide";
import RightHandSide from "./loginComponents/RightHandSide";
import classes from "../login/LoginController.module.css";

const LoginController = () => {
  return (
    <div className={`${classes.loginBody}`}>
      <div className={`${classes.LoginCard}`}>
        <LeftHandSide />
        <RightHandSide />
      </div>
    </div>
  );
};

export default LoginController;
