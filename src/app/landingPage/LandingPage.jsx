import React from "react";
import SectionSlider1 from "../sections/home/index/section-slider1";
import Section from "./components/Section";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionBlogs1 from "../sections/home/index/section-blogs1";
import Sectionourresult from "../sections/home/index/section-our-result";
import SectionFour from "./components/SectionFour";

const LandingPage = ({ page }) => {
  return (
    <>
      <Section page={page} />
      <SectionTwo page={page} />
      <SectionThree page={page} />
      <SectionBlogs1 />
      <Sectionourresult />
      <SectionFour />
    </>
  );
};

export default LandingPage;
