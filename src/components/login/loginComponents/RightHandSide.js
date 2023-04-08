import classes from "./loginComponents.module.css";

const RightHandSide = () => {
  return (
    <div className={`${classes.rightHandside}`}>
      <div className={`${classes.margAuto}`}>
        <h2 className={`${classes.underLineBlue}`}>Hello, welcome back!</h2>
        <p className={`${classes.subMessage}  ${classes.underLineBlue}`}>
          Please create a password and start using your account
        </p>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              aria-describedby="passwordHelp"
            />
            <span className={`${classes.floatRight} mt-2`}>
              Forgot password?
            </span>
          </div>
            <button type="submit" class={`btn ${classes.continue}`}>
              Continue
            </button>
        </form>
      </div>
    </div>
  );
};

export default RightHandSide;
