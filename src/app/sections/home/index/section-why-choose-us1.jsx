import { ourServices, publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import backgroundimage from "../../../../assets/images/whychooseusbackground.jpg";
import customdevelopment from "../../../../assets/images/png/cutomedevelopment.png";
import mobiledevelopment from "../../../../assets/images/png/mobile-development.png";
import webdevelopment from "../../../../assets/images/png/webdevelopment.png";
import artificila from "../../../../assets/images/png/artificial-intelligence.png";
import cloudcomputing from "../../../../assets/images/png/cloudcomputing.png";
import cybersecurity from "../../../../assets/images/png/cybersecurity.png";
import uxdesign from "../../../../assets/images/png/ux-design.png";
function SectionWhyChooseUs1() {
  let styleForCard = {
    display: "flex",
    flexDirection: "column",
    minHeight: "300px",
    maxHeight: "350px",
    justifyContent: "space-between",
  };
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-contain bg-no-repet"
        style={{
          backgroundImage: `url(${backgroundimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Why Choose Us</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">Our Services</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row justify-content-center g-col-6">
                {/* Block one */}
                {ourServices.map((obj) => (
                  <div
                    key={obj.heading}
                    className="col-lg-6 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-icon-bx-1">
                      <div
                        className="sx-icon-box-wraper mi"
                        style={{ ...styleForCard }}
                      >
                        <div className="sx-icon-bx-icon ">
                          <span className="sx-text-primary">
                            <img src={obj.image} alt="icon" width={50} />
                          </span>
                          {/* <NavLink to="/services/detail"> */}
                          <h4 className="sx-tilte">{obj.heading}</h4>
                          {/* </NavLink> */}
                        </div>
                        <div className="icon-content">
                          <p className=" truncate-text">
                            {obj.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWhyChooseUs1;
