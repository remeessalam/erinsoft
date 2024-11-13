import { useLocation } from "react-router-dom";
import Footer from "../app/sections/common/footer";
import Header1 from "../app/sections/common/header1";

import LandingHeader from "../app/sections/common/LandingHeader";
import { useRef } from "react";
import Section from "../app/landingPage/components/Section";
import SectionTwo from "../app/landingPage/components/SectionTwo";
import SectionThree from "../app/landingPage/components/SectionThree";
import SectionBlogs1 from "../app/sections/home/index/section-blogs1";
import Sectionourresult from "../app/sections/home/index/section-our-result";
import SectionFour from "../app/landingPage/components/SectionFour";

function RootLandingLayout() {
  const { pathname } = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 28,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="page-wraper">
        {
          <LandingHeader
            homeRef={homeRef}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
            scrollToSection={scrollToSection}
          />
        }

        <div className="page-content">
          <div ref={homeRef}>
            <Section page={pathname} />
          </div>
          <SectionTwo
            page={pathname}
            ref={servicesRef}
            scrollToSection={scrollToSection}
          />
          <div ref={servicesRef}>
            <SectionThree page={pathname} />
          </div>
          <div ref={aboutRef}>
            <SectionBlogs1 />
          </div>
          <Sectionourresult />
          <div ref={contactRef}>
            <SectionFour />
          </div>
        </div>

        <Footer />
        {/* <!-- BUTTON TOP START --> */}
        <button className="scroltop">
          <span className="fa fa-angle-up  relative" id="btn-vibrate"></span>
        </button>
      </div>
    </>
  );
}

export default RootLandingLayout;
