import { useLocation } from "react-router-dom";
import Footer from "../app/sections/common/footer";
import Header1 from "../app/sections/common/header1";

import AppRoutes from "../routing/app-routes";
import { useRef } from "react";

function RootLayout() {
  return (
    <>
      <div className="page-wraper">
        <Header1 />

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
