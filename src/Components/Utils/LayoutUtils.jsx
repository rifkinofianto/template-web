import Footer from "../Footer";
import PropTypes from "prop-types";
import Navbar from "../Navbar";

const LayoutUtils = ({ children, page }) => {
  return (
    <>
      <div className="bg-color-dark text-color-primary">
        <Navbar page={page} />
        <main className="container mx-auto px-4 md:my-7 my-3 border-color-primary">{children}</main>
        <Footer />
      </div>
    </>
  );
};

LayoutUtils.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired,
};

export default LayoutUtils;
