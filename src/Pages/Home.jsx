import React from "react";
import BelowLanding from "../components/BelowLanding";
import HorizontalView from "../components/HorizontalCarousel";
import LatestArticles from "../components/LatestArticles";
import MainImage from "../components/MainImage";
import MemoryLane from "../components/MemoryLane";
import SectionFive from "../components/SectionFive";
import SectionFour from "../components/SectionFour";
import Sponsors from "../components/Sponsors";
import Events from "../components/Events/Events";
import Team from "../components/Team";




const Home = () => {

  window.scrollTo(0,0)
  return (
    <React.Fragment >
      <LatestArticles/>
      <MainImage/>

      <div className="mt-4 px-3 px-md-0">
        <HorizontalView/>
      </div>
      <div className="mt-4">
        <BelowLanding/>
      </div>
      <div className="mt-4">
        <SectionFour/>
      </div>
      <div className="mt-4">
        <SectionFive/>
      </div>
      <div className="mt-4" >
        <MemoryLane/>
      </div>
      <div className="mt-4">
      <Events />
      </div>
      <div className="mt-4">
        <Sponsors />
      </div>
      <div className="mt-4">
        <Team/>
      </div>
    </React.Fragment>
  );
};

export default Home;
