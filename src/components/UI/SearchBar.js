import Search from "../SVG/Search";
import BackArrow from "../SVG/BackArrow";

import classes from "./SearchBar.module.scss";

const SearchBar = ({ placeholderMessage, isActive, setIsActive }) => {
  const placeholderTextClass = isActive
    ? classes["search-bar__input-placeholder--active"]
    : classes["search-bar__input-placeholder"];

  return (
    <div className={classes["search-bar"]}>
      {isActive && (
        <div
          className={classes["search-bar__back-arrow-container"]}
          onClick={() => setIsActive(false)}
        >
          <div className={classes["search-bar__back-arrow-bubble"]}>
            <BackArrow />
          </div>
        </div>
      )}
      <div
        className={classes["search-bar__input-container"]}
        onClick={() => {
          setIsActive(true); console.log('run')} }
      >
        {!isActive && <Search />}
        <input
          type="text"
          placeholder={placeholderMessage}
          className={placeholderTextClass}
        />
      </div>
    </div>
  );
};

export default SearchBar;
