import outsideClick from "../../hooks/outside-click-hook";

import classes from "./Dropdown.module.scss";

const Dropdown = ({ onClickOutside, dropdown, children }) => {
  const ref = outsideClick(onClickOutside);
  if (!dropdown) return null;

  return (
    <div ref={ref} className={classes.dropdown}>
      {children}
    </div>
  );
};

export default Dropdown;
