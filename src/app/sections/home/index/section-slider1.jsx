// import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
import bannerone from "../../../../assets/images/homepage-banner1.jpg";
import bannertwo from "../../../../assets/images/homepage-banner2.jpg";
register();

function SectionSlider1() {
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{ backgroundImage: `url(${bannertwo})` }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title text-shadow"
                  data-swiper-parallax="-300"
                >
                  We are Focused
                </span>
                <h2 className="sx-bnr-1-large-title text-shadow">
                  Driven and passionate about innovation.
                </h2>
                <div className="sx-bnr-1-info text-shadow">
                  We are driven by passion and innovation, constantly striving
                  to push boundaries and embrace new possibilities. Our
                  commitment fuels our dedication to creating impactful
                  solutions that inspire and resonate.
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
                <h1 className="animate-charcter">IT Solution</h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${bannerone})`,
            }}
          >
            <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title text-shadow"
                  data-swiper-parallax="-300"
                >
                  We are the finest
                </span>
                <h2 className="sx-bnr-1-large-title text-shadow">
                  We are prepared to tackle IT solutions
                </h2>
                <div className="sx-bnr-1-info text-shadow">
                  We are committed to delivering innovative IT solutions,
                  focusing on excellence and efficiency. Our expertise ensures
                  seamless integration and optimal performance, driving success
                  for every project we undertake.
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
                <h1 className="sx-title">Analytics</h1>
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

export default SectionSlider1;
