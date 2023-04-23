import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Contacts from "./components/Contacts/Contacts";

import classes from "./App.module.scss";
const App = () => {
  return (
    <div className={classes.grid}>
      <Header />
      <div className={classes.feed}>
        <Feed />
      </div>
      <div className={classes.contacts}>
        <Contacts />
      </div>
    </div>
  );
};

export default App;