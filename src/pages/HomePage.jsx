import React from "react";
import Firstdiv from "./homePage/Firstdiv";
import BannerComp from "./homePage/Banner";
import HomePageAboutUsBlock from "./HomePage/HomePageAboutUsBlock";

const HomePage = () => {
  return (
    <div style={{ width: "85%", margin: "0 auto" }}>
      <Firstdiv />
      <BannerComp />
      <HomePageAboutUsBlock />
    </div>
  );
};

export default HomePage;
