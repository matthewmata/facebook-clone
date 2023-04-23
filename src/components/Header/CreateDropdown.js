import Bubble from "../UI/Bubble";
import Highlight from "../UI/Highlight";

import CREATE_DROPDOWN_MENU from "./create-dropdown-menu";

import classes from "./CreateDropdown.module.scss";

const CreateDropdown = () => {
  return (
    <>
      <h1 className={classes["create-menu__title"]}>Create</h1>
      <ul className={classes["create-menu__items"]}>
        {CREATE_DROPDOWN_MENU[0].map((menuItem) => {
          return (
            <Highlight key={menuItem.title}>
              <li className={classes["create-menu__item"]}>
                <div>
                  <Bubble>
                    <i
                      className={`${classes["create-menu__icons"]} ${
                        classes[menuItem.icon]
                      }`}
                    ></i>
                  </Bubble>
                </div>
                <div className={classes["create-menu__text-container"]}>
                  <h2>{menuItem.title}</h2>
                  <div>
                    <p>{menuItem.description}</p>
                  </div>
                </div>
              </li>
            </Highlight>
          );
        })}
        <hr></hr>
        {CREATE_DROPDOWN_MENU[1].map((menuItem) => {
          return (
            <Highlight key={menuItem.title}>
              <li className={classes["create-menu__item"]}>
                <div>
                  <Bubble>
                    <i
                      className={`${classes["create-menu__icons"]} ${
                        classes[menuItem.icon]
                      }`}
                    ></i>
                  </Bubble>
                </div>
                <div className={classes["create-menu__text-container"]}>
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
    </>
  );
};

export default CreateDropdown;
