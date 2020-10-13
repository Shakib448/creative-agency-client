import React from "react";
import MainNav from "../../Shared/MainNav/MainNav";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <MainNav />
      <Banner />
      <Client />
      <Service />
    </div>
  );
};

export default Home;
