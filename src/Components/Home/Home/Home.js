import React from "react";
import MainNav from "../../Shared/MainNav/MainNav";
import Banner from "../Banner/Banner";
import CarouselDetails from "../CarouselDetails/CarouselDetails";
import Client from "../Client/Client";
import ClientFeedBack from "../ClientFeedBack/ClientFeedBack";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <MainNav />
      <Banner />
      <Client />
      <Service />
      <CarouselDetails />
      <ClientFeedBack />
    </div>
  );
};

export default Home;
