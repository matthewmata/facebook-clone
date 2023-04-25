import { useState } from "react";

import SearchBar from "../UI/SearchBar";
import Bubble from "../UI/Bubble";
import FacebookLogo from "../SVG/FacebookLogo";
import Search from "../SVG/Search";
import More from "./More";
import Navbar from "../Header/Navbar";

import outsideClick from "../../hooks/outside-click-hook";

import classes from "./Header.module.scss";

const Header = () => {
  const [expandSearch, setExpandSearch] = useState(false);

  const expandSearchHandler = (bool) => {
    setExpandSearch(bool);
  };

  const ref = outsideClick(() => expandSearchHandler(false));

  return (
    <header className={classes.header}>
      <div className={classes.header__items}>
        <FacebookLogo />
        <div>
          <div
            onClick={() => expandSearchHandler(true)}
            className={classes["header__search-container"]}
          >
            <Bubble className="nav-bubble">
              <Search />
            </Bubble>
          </div>
          {expandSearch && (
            <div ref={ref} className={classes["header__searchbar-container"]}>
              <SearchBar
                placeholderMessage="Search Facebook"
                isActive={expandSearch}
                setIsActive={expandSearchHandler}
              />
            </div>
          )}
        </div>
      </div>
      <More />
      <Navbar />
    </header>
  );
};

export default Header;
