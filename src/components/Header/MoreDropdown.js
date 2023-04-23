import { useState } from "react";

import AdditionalLinks from "./AdditionalLinks";
import Joel from "../../images/joel.jpeg";
import Bubble from "../UI/Bubble";
import ImageCircle from "../UI/ImageCircle";
import Highlight from "../UI/Highlight";
import DownArrow from "../SVG/DownArrow";
import UpArrow from "../SVG/UpArrow";

import classes from "./MoreDropdown.module.scss";

import MORE_DROPDOWN_MENU from "./more-dropdown-menu";

const MORE_DROPDOWN_MENU_SHORTENED = MORE_DROPDOWN_MENU.slice(0, 8);

const MoreDropdown = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [menuItems, setMenuItems] = useState(MORE_DROPDOWN_MENU_SHORTENED);

  const menuItemsHandler = (bool) => {
    if (bool) {
      setMenuItems(MORE_DROPDOWN_MENU);
      setSeeMore(true);
    } else {
      setMenuItems(MORE_DROPDOWN_MENU_SHORTENED);
      setSeeMore(false);
    }
  };

  const seeMoreOrLess = seeMore ? (
    <>
      <Bubble className="more-bubble">
        <UpArrow />
      </Bubble>
      <h2>See Less</h2>
    </>
  ) : (
    <>
      <Bubble className="more-bubble">
        <DownArrow />
      </Bubble>
      <h2>See More</h2>
    </>
  );

  return (
    <>
      <ul className={classes.more__dropdown}>
        <li>
          <Highlight>
            <div
              className={`${classes.more__item} ${classes["more__item-first-last"]}`}
            >
              <ImageCircle picture={Joel} size={28} alt="profile" />
              <h2>Joel Miller</h2>
            </div>
          </Highlight>
        </li>
        {menuItems.map((item) => {
          return (
            <li key={item.title}>
              <Highlight>
                <div className={classes.more__item}>
                  <i
                    className={`${classes["more__menu-icons"]} ${
                      classes[item.icon]
                    }`}
                  ></i>
                  <h2>{item.title}</h2>
                </div>
              </Highlight>
            </li>
          );
        })}
        <li onClick={() => menuItemsHandler(!seeMore)}>
          <Highlight>
            <div
              className={`${classes.more__item} ${classes["more__item-first-last"]}`}
            >
              {seeMoreOrLess}
            </div>
          </Highlight>
        </li>
      </ul>
      <hr />
      <div className={classes.additionalLinks__container}>
        <AdditionalLinks />
      </div>
    </>
  );
};

export default MoreDropdown;
