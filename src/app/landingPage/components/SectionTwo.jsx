import ItodoImage from "../../elements/itodo-img";
//  "../../../elements/itodo-img";
import web from "../../../assets/images/landingaboutweb.jpg";
import app from "../../../assets/images/landingaboutapp.jpg";
//  "../../assets/images/solution.jpg";
function SectionTwo({ page }) {
  return (
    <>
      <div className="section-full  p-t110 p-b80 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      {page === "web-development"
                        ? "Web Development"
                        : " App Development"}
                    </h2>
                    {/* <span className="sx-title-2">
                      Empowering Innovation Through Software Solutions
                    </span> */}
                    <p>
                      {page === "web-development"
                        ? "Our web development solutions are meticulously crafted to meet your immediate needs while anticipating future challenges. We are committed to delivering innovative, tailor-made websites that drive real results. At ErinSoft, we understand that each organization is unique. That’s why we take the time to understand your specific goals and challenges, enabling us to create customized strategies that enhance your online presence and propel your business forward. Partner with us to build a digital experience that inspires confidence and growth."
                        : "Our app development solutions are designed to address your immediate needs and adapt to tomorrow’s challenges. At ErinSoft, we are dedicated to creating innovative, user-centric apps that deliver impactful results. We recognize that every organization has unique goals, which is why we tailor our approach to meet your specific needs. Let us partner with you to develop an app strategy that drives success, engages users, and positions your business for the future."}
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img
                          src={page === "web-development" ? web : app}
                          alt="our solution"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
