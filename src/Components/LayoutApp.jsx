import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../Utils/Layout";

const LayoutApp = () => {
  const location = useLocation()

  const page = location.pathname === "/" ? "Home" : location.pathname.slice(1);
  return (
    <>
      <Layout page = {page}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/view_all" element={<div>View All</div>} />
        </Routes>
      </Layout>
    </>
  );
};

export default LayoutApp;
