import React from "react";
import MainNav from "../../Shared/MainNav/MainNav";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <MainNav />
      <Banner />
    </div>
  );
};

export default Home;
