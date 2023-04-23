import Bubble from "../UI/Bubble";
import Highlight from "../UI/Highlight";
import ImageCircle from "../UI/ImageCircle";

import Joel from "../../images/joel.jpeg";
import AdditionalLinks from "./AdditionalLinks";
import ACCOUNT_DROPDOWN_MENU from "./account-dropdown-menu";

import classes from "./AccountDropdown.module.scss";

const AccountDropdown = () => {
  return (
    <>
      <div className={classes["account-profile__container"]}>
        <Highlight>
          <div className={classes["account-title__container"]}>
            <ImageCircle picture={Joel} size={56} altName={"profile"} />
            <h2 className={classes["account-menu__title"]}>Joel Miller</h2>
          </div>
        </Highlight>
        <hr></hr>
        <Highlight>
          <div className={classes["account-profile-all__container"]}>
            <p>See all profiles</p>
          </div>
        </Highlight>
      </div>
      <ul className={classes["account-menu__items"]}>
        {ACCOUNT_DROPDOWN_MENU.map((menuItem) => {
          return (
            <Highlight key={menuItem.title}>
              <li className={classes["account-menu__item"]}>
                <div>
                  <Bubble>
                    <i
                      className={`${classes["account-menu__icons"]} ${
                        classes[menuItem.icon]
                      }`}
                    ></i>
                  </Bubble>
                </div>
                <div className={classes["account-menu__text-container"]}>
                  <h2>{menuItem.title}</h2>
                  <div>
                    <p>{menuItem.description}</p>
                  </div>
                </div>
              </li>
            </Highlight>
          );
        })}
      </ul>
      <div className={classes.additionalLinks__container}>
        <AdditionalLinks />
      </div>
    </>
  );
};

export default AccountDropdown;
