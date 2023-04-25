import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import Contacts from "./components/Contacts/Contacts";
import More from "./components/More/More";


import classes from "./App.module.scss";

const App = () => {

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.feed}>
        <Feed />
      </div>
      <div className={classes.contacts}>
        <Contacts />
      </div>
      <div className={classes.more}>
        <More />
      </div>
    </div>
  );
};

export default App;