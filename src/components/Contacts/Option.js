import { useState } from "react";

import classes from "./Option.module.scss";

const Option = ({Icon, title}) => {
    const [isShown, setIsShown] = useState(false);

    let onHoverClass = !isShown ? classes.hidden : classes.title;

  return (
    <li
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span className={classes.icon}>
        <Icon />
        <div className={onHoverClass}>{title}</div>
      </span>
    </li>
  );
};

export default Option;
