import { useState } from "react";
import ButtonOpen from "../Utils/ButtonOpen";
const Footer = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);
  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <footer className="border-t-2 border-color-primary md:pt-12 pt-7">
      <div className="container mx-auto md:flex md:justify-between">
        {/* About Section */}
        <div className="text-justify md:w-96 mx-4">
          <div className="flex items-center gap-3">
            <ButtonOpen handleMenu={toggleAbout} isOpen={isAboutOpen} />
            <h2 className="md:text-2xl text-lg font-bold text-black md:mb-4 mb-2">
              About
            </h2>
          </div>
          <p
            className={`leading-relaxed ${
              isAboutOpen ? "block" : "hidden"
            } md:block`}
          >
            This website is built by Nofianto Rifki, a passionate front-end
            developer with a love for anime and UI/UX design. The goal is to
            provide a seamless and enjoyable experience for users who want to
            explore Blue Archive characters.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="md:text-left md:my-0 my-4 mx-4">
          <div className="flex items-center gap-3">
            <ButtonOpen handleMenu={toggleLinks} isOpen={isLinksOpen} />
            <h2 className="md:text-2xl text-lg font-bold text-black md:mb-4 mb-2">
              Quick Links
            </h2>
          </div>
          <ul
            className={`space-y-2 ${isLinksOpen ? "block" : "hidden"} md:block`}
          >
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="mt-2 mx-4">
          <div className="flex items-center gap-3">
            <ButtonOpen handleMenu={toggleContact} isOpen={isContactOpen} />
            <h2 className="md:text-2xl text-lg font-bold text-black md:mb-4 mb-2">
              Contact Us
            </h2>
          </div>
          <div
            className={`md:mb-4 mb-2 ${
              isContactOpen ? "block" : "hidden"
            } md:block`}
          >
            <p className="md:mb-5 mb-3">
              Feel free to reach out to us on Instagram:
            </p>
            <a
              href="https://www.instagram.com/nofiantorifki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-color-accent hover:bg-blue-600 transition text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-color-dark"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
              <span className="text-color-dark">@nofiantorifki</span>
            </a>
          </div>
        </div>
      </div>

      <div className="md:mt-8 mt-8 py-4 text-center font-bold md:text-xl text-lg">
        <p>
          &copy; {new Date().getFullYear()} Nofianto Rifki. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
