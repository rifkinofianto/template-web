import { Routes, Route, useLocation } from "react-router-dom";
import LayoutUtils from "../Utils/LayoutUtils";
import ContactPage from "../../Pages/ContactPage";
import AboutPage from "../../Pages/AboutPage";
import HomePage from "../../Pages/HomePage";

const Layout = () => {
  const location = useLocation()

  const page = location.pathname === "/" ? "Home" : location.pathname.slice(1);
  return (
    <>
      <LayoutUtils page = {page}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </LayoutUtils>
    </>
  );
};

export default Layout;
