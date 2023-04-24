import ImageCircle from "../UI/ImageCircle";
import Highlight from "../UI/Highlight";
import Option from "./Option";
import NewCall from "../SVG/NewCall";
import Search from "../SVG/Search";
import Options from "../SVG/Options";

import classes from "./Contacts.module.scss";

import CONTACT_LIST from "./contacts-list";

const OPTIONS_LIST = [
  {
    title: "New Call",
    icon: NewCall,
  },
  {
    title: "Search",
    icon: Search,
  },
  {
    title: "Options",
    icon: Options,
  },
];

const Contacts = () => {
  return (
    <>
      <hr className={classes.divider}></hr>
      <div className={classes.birthdays}>
        <h2>Birthdays</h2>
        <div className={classes.birthday__container}>
          <Highlight>
            <div className={classes.birthday__content}>
              <i></i>
              <span>
                <h3>Tess</h3> has a birthday today.
              </span>
            </div>
          </Highlight>
        </div>
      </div>
      <hr className={classes.divider}></hr>
      <div className={classes.contacts}>
        <div className={classes.contacts__header}>
          <h2>Contacts</h2>
          <ul className={classes.icons}>
            {OPTIONS_LIST.map((item) => (
              <Option Icon={item.icon} title={item.title} key={item.title} />
            ))}
          </ul>
        </div>
        <ul>
          {CONTACT_LIST.map((contact) => (
            <li key={contact.name}>
              <Highlight>
                <div className={classes.contact__content}>
                  <ImageCircle
                    picture={contact.profile}
                    size={36}
                    alt={contact.name}
                  />
                  <h3>{contact.name}</h3>
                </div>
              </Highlight>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Contacts;
