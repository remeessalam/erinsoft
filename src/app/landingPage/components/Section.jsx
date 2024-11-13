// import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import bannerone from "../../../assets/images/webdevelopmentbanner.jpg";
import bannertwo from "../../../assets/images/webdevelopmentbannertwo.jpg";
import appbannerone from "../../../assets/images/appdevelopmentbanner.jpg";
import apppbannertwo from "../../../assets/images/appdevelopementtwo.jpg";
register();

function Section({ page }) {
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          f
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${
                page === "web-development" ? bannertwo : appbannerone
              })`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  We are Focused
                </span>
                <h2 className="sx-bnr-1-large-title">
                  {page === "web-development"
                    ? "Driven and passionate about delivering innovative web solutions."
                    : "Driven and passionate about creating innovative mobile solutions."}
                </h2>
                <div className="sx-bnr-1-info">
                  {page === "web-development"
                    ? "We are driven by passion and innovation, constantly striving to push boundaries and embrace new possibilities in web development. Our commitment fuels our dedication to creating impactful web solutions that inspire and connect."
                    : "We are driven by passion and innovation, constantly striving to push boundaries and embrace new possibilities in app development. Our commitment fuels our dedication to creating impactful apps that inspire and engage."}
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="animate-charcter">ErinSoft</h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${
                page === "web-development" ? bannerone : apppbannertwo
              })`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  We are the finest
                </span>
                <h2 className="sx-bnr-1-large-title">
                  {page === "web-development"
                    ? "We are prepared to tackle web development solutions."
                    : "We are prepared to tackle app development solutions."}
                </h2>
                <div className="sx-bnr-1-info shadow-sm">
                  {page === "web-development"
                    ? "We are committed to delivering innovative web development solutions, focusing on excellence and efficiency. Our expertise ensures seamless integration and optimal performance, driving success for every project we undertake."
                    : "We are committed to delivering innovative app development solutions, focusing on excellence and efficiency. Our expertise ensures seamless integration and optimal performance, driving success for every project we undertake."}
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                {/* <div className="sx-bnr-video">
                  <a
                    href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                    className="mfp-video circle"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="sx-title">ErinSoft</h1>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        {/* !swiper slides */}
        {/* Add Arrows */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </>
  );
}

export default Section;
