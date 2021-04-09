import logo from "./logo.svg";
import "./App.css";
import LeftSideBar from "./components/leftsidebar";
import MainPage from "./components/main-page";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <MainPage />
          </div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
