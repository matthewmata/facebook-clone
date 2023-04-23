import { useState } from "react";

import Dropdown from "../UI/Dropdown";

import classes from "./NavbarItem.module.scss";
import Bubble from "../UI/Bubble";

const NavbarItem = ({ nav }) => {
  const [isShown, setIsShown] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  let onHoverClass = !isShown
    ? classes.hidden
    : nav.title === "Account"
    ? `${classes["nav__title"]} ${classes["nav__title--last-child"]}`
    : classes["nav__title"];

  const onClickOutside = () => {
    setDropdown(false);
  };

  return (
    <li
      className={classes.nav__item}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => setDropdown(true)}
    >
      <Bubble className="nav-bubble" isActive={dropdown}>
        <nav.component isActive={dropdown} />
      </Bubble>
      <div className={onHoverClass}>{nav.title}</div>
      {dropdown && (
        <div onMouseEnter={() => setIsShown(false)}>
        <Dropdown dropdown={dropdown} onClickOutside={onClickOutside}>
          <nav.dropdown />
        </Dropdown>
        </div>
      )}
    </li>
  );
};

export default NavbarItem;
