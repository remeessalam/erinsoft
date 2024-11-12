import ItodoImage from "../../../elements/itodo-img";
import ourresult from "../../../../assets/images/";
function Sectionourresult() {
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
                    <h2 className="sx-title">Focus on Results</h2>
                    {/* <span className="sx-title-2">
                      Empowering Innovation Through Software Solutions
                    </span> */}
                    <p>
                      Our solutions are designed with one primary goal: to
                      deliver tangible results. We take a results-oriented
                      approach, ensuring that our projects are not only
                      completed on time and within budget but also effectively
                      contribute to your business growth. We measure success
                      through your satisfaction and the positive impact our
                      solutions have on your operations.
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
                        <img src={ourresult} alt="our solution" />
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

export default Sectionourresult;
