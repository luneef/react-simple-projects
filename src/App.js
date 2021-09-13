import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import BirthdayReminder from "./pages/birthdayreminder/BirthdayReminder";
import Portfolios from "./pages/portfolios/Portfolios";
import FoodMenu from "./pages/foodmenu/FoodMenu";
import JobExperiences from "./pages/jobexperiences/JobExperiences";
import Phonebook from "./pages/phonebook/Phonebook";
import MainScrapbook from "./pages/tripscrapbook/MainScrapbook";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/birthdayreminder" component={BirthdayReminder} />
        <Route exact path="/phbeaches" component={Portfolios} />
        <Route exact path="/foodmenu" component={FoodMenu} />
        <Route exact path="/jobexperiences" component={JobExperiences} />
        <Route exact path="/phonebook" component={Phonebook} />
        <Route exact path="/tripscrapbook" component={MainScrapbook} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
