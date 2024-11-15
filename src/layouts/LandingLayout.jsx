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
import { portfolioDataApp, portfolioDataWeb } from "../globals/constants";
import FormComponent from "../app/landingPage/components/FormComponent";

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

  const modifiedPathname = pathname.replace("/", "");
  console.log(modifiedPathname, "asdlfkajsd");

  const portfolioData =
    modifiedPathname === "web-development"
      ? portfolioDataWeb
      : portfolioDataApp;

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
            <Section page={modifiedPathname} />
          </div>
          <FormComponent />
          <SectionTwo
            page={modifiedPathname}
            ref={servicesRef}
            scrollToSection={scrollToSection}
          />
          <div ref={servicesRef}>
            <SectionThree page={modifiedPathname} />
          </div>
          <div className="portfolio-container">
            <div className="wrapper">
              <div className="header-content">
                <h2 className="portfolio-heading">Our Portfolio</h2>
                <p className="portfolio-description">
                  Explore some of the successful projects we have delivered,
                  showcasing our expertise across diverse domains. Here are some
                  of our valued clients and the work we've done for them.
                </p>
              </div>
              <ul className="portfolio-grid">
                {portfolioData.map((project, index) => (
                  <li key={index} className="portfolio-item">
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={`${project.name} app preview`}
                        className="project-image"
                      />
                      <strong className="project-name">{project.name}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div ref={aboutRef}>
            <SectionBlogs1 page={modifiedPathname} />
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
