import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order/Order";

export const userInformationData = createContext();
function App() {
  const [userData, setUserData] = useState({});
  return (
    <div className="app">
      <userInformationData.Provider value={[userData, setUserData]}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-sign-in" component={GoogleLogin} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/service-list" component={Order} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </userInformationData.Provider>
    </div>
  );
}

export default App;
