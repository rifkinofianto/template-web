// src/components/Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import EachUtils from "../Utils/EachUtils";

const Navbar = ({ page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Daftar tautan navigasi
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  // Fungsi untuk merender tautan
  const renderLink = (item, index) => (
    <Link
      key={index}
      to={item.to}
      className={`px-2 py-1 hover:text-color-accent md:text-xl ${
        page.toLowerCase() === item.label.toLowerCase()
          ? "text-color-accent underline"
          : ""
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <nav className=" p-4 shadow-color-secondary shadow-md">
      <div className="container mx-auto  px-4 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          <h1 className="md:text-3xl text-2xl text-blue-500 flex">
            <p>Qyn</p>
            <p className="text-color-accent">MovieList</p>
          </h1>
        </Link>

        {/* Tombol toggle untuk mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Tautan desktop */}
        <div className="hidden md:flex md:text-xl items-center">
            <EachUtils of={navLinks} render={renderLink} />
        </div>
      </div>

      {/* Input search dan menu dropdown untuk mobile */}
      <div
        className={`md:hidden transition-all ${isMenuOpen ? "mt-4" : "hidden"}`}
      >
        <div className="flex flex-col space-y-2 mt-2 bg-gray-50 p-4 rounded-md shadow-lg">
          <EachUtils of={navLinks} render={renderLink} />
        </div>
      </div>
    </nav>
  );
};

// Validasi props menggunakan PropTypes
Navbar.propTypes = {
  page: PropTypes.string.isRequired, // Harus berupa string dan wajib ada
};

export default Navbar;
