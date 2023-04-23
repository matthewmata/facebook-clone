import classes from "./Bubble.module.scss";

const Bubble = ({ isActive, className, children }) => {
  var bubbleActive = isActive ? classes['bubble--active'] : ''

  return (
    <div
      className={`${classes.bubble} ${classes[className]} ${bubbleActive}`}
    >
      {children}
    </div>
  );
};

export default Bubble;
