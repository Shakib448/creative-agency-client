import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleLogin from "./Components/GoogleLogin/GoogleLogin";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order/Order";
import Review from "./Components/Dashboard/Review/Review";
import ServiceInfo from "./Components/Dashboard/ServiceInfo/ServiceInfo";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import AddService from "./Components/Dashboard/AddService/AddService";
import AdminServiceList from "./Components/Dashboard/AdminServiceList/AdminServiceList";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
            <Route exact path="/review" component={Review} />
            <Route
              exact
              path="/admin-service-list"
              component={AdminServiceList}
            />
            <PrivateRoute exact path="/service-list">
              <ServiceInfo />
            </PrivateRoute>
            <Route exact path="/add-admin" component={AddAdmin} />
            <Route exact path="/add-service" component={AddService} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </userInformationData.Provider>
    </div>
  );
}

export default App;
