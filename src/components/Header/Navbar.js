import NavbarItem from "./NavbarItem";

import classes from "./Navbar.module.scss";

import NAV_ITEMS from "./navbar-items";
const Navbar = () => {
  
  return (
    <nav>
      <ul className={classes.nav}>
        {NAV_ITEMS.map((nav) => {
            return <NavbarItem nav={nav} key={nav.title} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
