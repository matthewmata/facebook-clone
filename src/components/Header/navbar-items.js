import Create from "../SVG/Create";
import CreateDropdown from "./CreateDropdown";
import Messenger from "../SVG/Messenger";
import MessengerDropdown from "./MessengerDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import Notifications from "../SVG/Notifications";
import Account from "./Account";
import AccountDropdown from "./AccountDropdown";

const NAV_ITEMS = [
  {
    title: "Create",
    url: "/create",
    component: Create,
    dropdown: CreateDropdown,
  },
  {
    title: "Messenger",
    url: "/messenger",
    component: Messenger,
    dropdown: MessengerDropdown,
  },
  {
    title: "Notifications",
    url: "/notifications",
    component: Notifications,
    dropdown: NotificationsDropdown,
  },
  {
    title: "Account",
    url: "/account",
    component: Account,
    dropdown: AccountDropdown,
  },
];

export default NAV_ITEMS;
