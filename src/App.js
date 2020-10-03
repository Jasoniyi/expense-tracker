import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PageRenderer from "./components/pageRenderer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="menu-display">
          <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
