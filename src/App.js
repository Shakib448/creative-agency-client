import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import Home from "./Components/Home/Home/Home";

export const userInformationData = createContext();
function App() {
  const [userData, setUserData] = useState({});
  return (
    <div className="App">
      <userInformationData.Provider value={[userData, setUserData]}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-sign-in" component={GoogleLogin} />
          </Switch>
        </Router>
      </userInformationData.Provider>
    </div>
  );
}

export default App;
