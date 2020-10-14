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
            <PrivateRoute exact path="/order">
              <Order />
            </PrivateRoute>

            <PrivateRoute exact path="/review">
              <Review />
            </PrivateRoute>

            <PrivateRoute exact path="/admin-service-list">
              <AdminServiceList />
            </PrivateRoute>

            <PrivateRoute exact path="/service-list">
              <ServiceInfo />
            </PrivateRoute>

            <PrivateRoute exact path="/add-admin">
              <AddAdmin />
            </PrivateRoute>

            <PrivateRoute exact path="/add-service">
              <AddService />
            </PrivateRoute>

            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </userInformationData.Provider>
    </div>
  );
}

export default App;
