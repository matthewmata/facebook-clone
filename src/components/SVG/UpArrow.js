import classes from "./SVG.module.scss";

const UpArrow = () => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      className={classes["svg-icon"]}
    >
      <path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path>
    </svg>
  );
};

export default UpArrow;
