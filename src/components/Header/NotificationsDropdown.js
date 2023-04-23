import Highlight from "../UI/Highlight";
import ImageCircle from "../UI/ImageCircle";

import NOTIFICATION_ITEMS from "./notifications-dropdown-items";

import classes from "./NotificationsDropdown.module.scss";

const NotificationsDropdown = () => {

  const notificationTextParser = (name, type) => {
    if (type === 'Birthday') {
      return (
        <p><b>{name}</b> has a birthday today. Send them good thoughts!</p>
      )
    }
    if (type === "Post") {
      return (
        <p>
          <b>{name}</b> shared a post with you and a selection of her other friends
        </p>
      );
    }
    if (type === "Event") {
      return (
      <p>
        <b>{name}</b> sent you an invite to an event
      </p>
      )
    }
  }

  return (
    <>
      <h1 className={classes["notifications-menu__title"]}>Notifications</h1>
      <ul className={classes["notifications-menu__items"]}>
        {NOTIFICATION_ITEMS.map((item) => {
          return (
            <Highlight key={item.name}>
              <li className={classes["notifications-menu__item"]}>
                <div className={classes["notifications-menu__profile-container"]}>
                  <ImageCircle
                    picture={item.picture}
                    size={56}
                    altName={item.altName}
                  />
                  <i
                    className={`${classes["notifications-menu__icons"]} ${
                      classes[item.icon]
                    }`}
                  ></i>
                </div>
                <div className={classes["notifications-menu__text-container"]}>
                  <div>{notificationTextParser(item.name, item.type)}</div>
                  <div className={classes["notifications-menu__timestamp"]}>
                    {item.timestamp}
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

export default NotificationsDropdown;
