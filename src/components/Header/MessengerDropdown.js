import { useState } from "react";

import SearchBar from "../UI/SearchBar";
import Highlight from "../UI/Highlight";
import ImageCircle from "../UI/ImageCircle";

import MESSENGER_DROPDOWN_MENU from "./messenger-dropdown-menu";

import classes from "./MessengerDropdown.module.scss";

const MessengerDropdown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h1 className={classes["messenger-menu__title"]}>Chats</h1>
      <div className={classes["messenger-searchbar-container"]}>
        <SearchBar
          placeholderMessage={"Search Messenger"}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <ul className={classes["messenger-menu__items"]}>
        {MESSENGER_DROPDOWN_MENU.map((chat) => {
          return (
            <Highlight key={chat.name}>
              <li className={classes["messenger-menu__item"]}>
                <ImageCircle
                  picture={chat.picture}
                  size={56}
                  altName={chat.altName}
                />
                <div className={classes["messenger-menu__text-container"]}>
                  <h2>{chat.name}</h2>
                  <div>
                    <p>
                      {chat.lastMessage} · {chat.timestamp}
                    </p>
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

export default MessengerDropdown;
