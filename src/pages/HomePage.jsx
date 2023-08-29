import React from "react";

import Firstdiv from "./homePage/Firstdiv";
import BannerComp from "./homePage/Banner";
import HomePageAboutUsBlock from "./homePage/HomePageAboutUsBlock";
import WhyChooseUs from "./homePage/WhyChooseUs";
import Slider from "./homePage/Slider"
import EcoFriendly from "./homePage/EcoFriendly";

const HomePage = () => {
    return (
      <>
        {/*<div style={{ width: "85%", margin: "0 auto" }}>*/}
          <Firstdiv />
          <BannerComp />
          <HomePageAboutUsBlock />
          <EcoFriendly />
          <Slider />
          <WhyChooseUs />
        {/*</div>*/}
      </>
    );
};

export default HomePage;
