import ItodoImage from "../../../elements/itodo-img";
import imageone from "../../../../assets/images/sectionaboutcompany.jpg";
function SectionAboutCompany1() {
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
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img src={imageone} alt="aboutcompanyimage" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      Welcome to ErinSoft Technologies
                    </h2>
                    <span className="sx-title-2">
                      Empowering Innovation Through Software Solutions
                    </span>
                    <p>
                      At ErinSoft Technologies, we are a dynamic software
                      company dedicated to delivering innovative technology
                      solutions tailored to meet the evolving needs of
                      businesses across various industries. Our team of expert
                      developers, designers, and strategists work
                      collaboratively to harness the power of technology,
                      enabling our clients to drive digital transformation and
                      achieve sustainable growth. With a keen focus on quality
                      and excellence, we pride ourselves on being at the
                      forefront of technology innovation. With a blend of
                      creativity and technical proficiency, we transform complex
                      challenges into streamlined processes, allowing our
                      clients to focus on their core business objectives. We
                      believe in the potential of technology to transform how
                      organizations operate and succeed in today’s fast-paced
                      digital landscape.
                    </p>
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

export default SectionAboutCompany1;
