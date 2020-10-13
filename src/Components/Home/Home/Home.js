import React from "react";
import Footer from "../../Shared/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
