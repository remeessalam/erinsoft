import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import banner from "../../../assets/images/contuctbanner.jpg";
import { companyDetails } from "../../../globals/constants";
function ContactUsPage() {
  return (
    <>
      <Banner _data={banner} />

      {/* Contact us START */}
      <div className="section-full p-t110 p-b80 sx-bg-white sx-ourteam-outer ">
        <div className="container">
          {/* GOOGLE MAP & CONTACT FORM */}
          <div className="section-content">
            {/* CONTACT FORM*/}
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12  m-b30">
                <div className="contact-info">
                  {/* TITLE START */}
                  <div className="section-head left">
                    <div className="sx-head-s-title">Contact Us</div>
                    <div className="sx-head-l-title">
                      <h2 className="sx-title">
                        Connect with us for innovative design solutions tailored
                        just for you.
                      </h2>
                    </div>
                  </div>
                  {/* TITLE END */}
                  <div className="row sx-contact-form-icon-bx">
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-telephone" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Phone
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            {companyDetails.number}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-email-2" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Mail
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            example@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-map-location" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Contact Location
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            {companyDetails.address}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6 m-b30">
                      <div className="sx-icon-bx-5">
                        <div className="sx-media">
                          <i className="flaticon-clock" />
                        </div>
                        <div className="sx-icon-bx-info">
                          <a href="#" className="sx-icon-bx-title-info">
                            Office Time
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            Mon- Fri: 7.00 - 22.00
                          </a>
                          <a href="#" className="sx-icon-bx-title">
                            St-sun: 9.00 - 20.00
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 m-b30">
                <div className="contact-home1-right">
                  <div className="contact-home-1-form sx-bg-light">
                    <h4 className="sx-title">Get In Touch</h4>
                    <form
                      className="cons-contact-form2 form-transparent"
                      method="post"
                    >
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="username"
                          id="name"
                          required
                          placeholder="Your Name"
                        />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="Your Email"
                        />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <input
                          type="text"
                          name="phone"
                          id="Phone"
                          required
                          placeholder="Phone Number"
                        />
                        <span className="spin" />
                      </div>
                      <div className="input textarea input-animate">
                        <textarea
                          name="message"
                          id="message"
                          required
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                        <span className="spin" />
                      </div>
                      <div className="sx-btn-center text-center p-t10">
                        <button
                          type="submit"
                          className="site-button sx-btn-primary icon sx-btn-lg"
                        >
                          <i className="fa  fa-long-arrow-right" />
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact us END */}
      <div className="gmap-outline map-grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3824.6668040301267!2d83.414380!3d18.099210!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcc9b3b93953d%3A0xf27c4f9b64d498c3!2sPlot%2026%2C%20Siva%20Sai%20Nagar%2C%20Vizianagaram%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1699986958445!5m2!1sen!2sin&q=18.099210,83.414380"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="location-map"
        />
      </div>
    </>
  );
}

export default ContactUsPage;
