import classes from "./Highlight.module.scss";

const Highlight = ({ children }) => {
  return (
    <div className={classes.highlight}>{children}</div>
  );
};

export default Highlight;
