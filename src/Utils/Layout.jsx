import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children, page }) => {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar page={page} />
        <main className="container mx-auto px-4 md:my-5 my-3 ">{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
