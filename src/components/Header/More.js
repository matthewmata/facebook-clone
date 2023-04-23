import { useState } from "react";

import MoreDropdown from "./MoreDropdown";
import Highlight from "../UI/Highlight";
import MoreIcon from "../SVG/More";
import GamingIcon from "../SVG/Gaming";

import classes from "./More.module.scss";

import CENTER_NAV_MENU from "./center-nav-menu";

const More = () => {
  const [expandMore, setExpandMore] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const centerNavHandler = (title) => {
    setActiveItem(title);
  };

  return (
    <div className={classes.header__items}>
      <ul className={classes.center__nav}>
        {CENTER_NAV_MENU.map((item) => {
          return (
            <li
              key={item.title}
              onClick={() => {
                setExpandMore(false);
                centerNavHandler(item.title);
              }}
              className={`${classes["center__nav-item"]} ${classes["center__nav-item-hidden"]}`}
            >
              <div
                className={
                  activeItem === item.title
                    ? classes["center__nav-icon__border--active"]
                    : ""
                }
              ></div>
              <Highlight>
                <div className={classes["center__nav-icon__container"]}>
                  <item.icon isActive={activeItem === item.title} />
                </div>
              </Highlight>
              <div className={classes["menu__title"]}>{item.title}</div>
            </li>
          );
        })}
        <li
          onClick={() => {
            setExpandMore((prevState) => !prevState);
            if (expandMore) {
              centerNavHandler("Home");
            } else {
              centerNavHandler("More");
            }
          }}
          className={`${classes["center__nav-item"]} ${classes["center__nav-more"]}`}
        >
          <div
            className={
              expandMore && activeItem === "More"
                ? classes["center__nav-icon__border--active"]
                : ""
            }
          ></div>
          <Highlight>
            <div className={classes["center__nav-icon__container"]}>
              <MoreIcon isActive={activeItem === "More"} />
            </div>
          </Highlight>
          <div className={classes["menu__title"]}>More</div>
        </li>
        <li
          onClick={() => {
            setExpandMore(false);
            centerNavHandler("Gaming");
          }}
          className={`${classes["center__nav-item"]} ${classes["center__nav-gaming"]}`}
        >
          <div
            className={
              activeItem === "Gaming"
                ? classes["center__nav-icon__border--active"]
                : ""
            }
          ></div>
          <Highlight>
            <div className={classes["center__nav-icon__container"]}>
              <GamingIcon isActive={activeItem === "Gaming"} />
            </div>
          </Highlight>
          <div className={classes["menu__title"]}>Gaming</div>
        </li>
      </ul>
      {expandMore && (
        <div className={classes.more_overlay}>
          <MoreDropdown />
        </div>
      )}
    </div>
  );
};

export default More;
