import classes from "../error/404error.module.css";

const Four0Four = () => {
  return (
    <div className={classes.main}>
      <div class={classes.section}>
        <h1 class={`${classes.error}`}>404</h1>
        <div class={classes.page}>
          Ooops!!! The page you are looking for is not found
        </div>
        <a class={classes.backHome} href="/">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default Four0Four;
