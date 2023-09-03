import React from "react";

import Firstdiv from "./HomePage/Firstdiv";
import BannerComp from "./HomePage/Banner";
import HomePageAboutUsBlock from "./HomePage/HomePageAboutUsBlock";
import WhyChooseUs from "./HomePage/WhyChooseUs";
import Slider from "./HomePage/Slider"
import EcoFriendly from "./HomePage/EcoFriendly";

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
