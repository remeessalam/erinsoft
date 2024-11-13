import { useLocation } from "react-router-dom";
import Footer from "../app/sections/common/footer";
import Header1 from "../app/sections/common/header1";
// import Header2 from "../app/sections/common/header2";
// import Header3 from "../app/sections/common/header3";
import AppRoutes from "../routing/app-routes";
import LandingHeader from "../app/sections/common/LandingHeader";
import { useRef } from "react";

function RootLayout() {
  const { pathname } = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div className="page-wraper">
        {
          // (pathname === "/index2" && <Header2 />) ||
          pathname === "/" ? <Header1 /> : <LandingHeader />

          // <Header1 />
        }

        <div className="page-content">
          <AppRoutes />
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

export default RootLayout;
