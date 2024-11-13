import ScrollToTop from "./app/elements/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import Loader from "./app/elements/loader";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import RootLandingLayout from "./layouts/LandingLayout";

function App() {
  const [isLoading, setLoading] = useState(true);
  const { pathname } = useLocation();

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      {isLoading && <Loader />}
      <ScrollToTop />
      {pathname === "/web-development" || pathname === "/app-development" ? (
        <RootLandingLayout />
      ) : (
        <RootLayout />
      )}
    </>
  );
}

export default App;
