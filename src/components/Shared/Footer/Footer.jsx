import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="pt-12git">
        <footer className="footer bg-base-100 text-base-content p-10 flex flex-col md:flex-row justify-between lg:px-64">
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link to="/services" className="link link-hover">
              Software Development
            </Link>
            <Link to="/services" className="link link-hover">
              IT Consulting and Strategy
            </Link>
            <Link to="/services" className="link link-hover">
              Cybersecurity Services
            </Link>
            <Link to="/services" className="link link-hover">
              IT Infrastructure Services
            </Link>
            <Link to="/services" className="link link-hover">
              Digital Marketing Services
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link to="/about-us" className="link link-hover">
              About
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact us
            </Link>
            <Link to="/faq" className="link link-hover">
              FAQ
            </Link>
            {/* <a className="link link-hover">Press kit</a> */}
          </nav>
          <nav className="text-left">
            <h6 className="footer-title">Call us</h6>
            <a className="link link-hover">
              <a
                href="tel:+8809606990123"
                className="block text-lg font-medium  hover:opacity-75 "
              >
                +8809606990123
              </a>
              <a
                href="tel:+8801818773300"
                className="block text-lg font-medium  hover:opacity-75 "
              >
                +8801818773300
              </a>
            </a>
            <a className="link link-hover">
              House- 31, Road- 17, Block- E <br /> Banani, Dhaka- 1213,
              Bangladesh
            </a>
            <a className="link link-hover">
              Saturday to Thursday: 9am - 5pm <br /> Weekend: 10am - 3pm
            </a>
          </nav>
        </footer>
        <footer className="footer bg-base-100 text-base-content border-base-300 border-t lg:px-60 py-4">
          <aside className="grid-flow-col items-center">
            <img className="w-24 h-24" src="./Blockchain 256 logo.png"></img>
            <p className="text-left">
              Blockchain Technology Ltd.
              <br />
              Aiming to please your needs as per requirements.
            </p>
          </aside>
          <nav className=" place-self-center md:justify-self-end">
            <div className="grid grid-flow-col grid-cols-3 gap-4 place-content-center">
              <a
                href="https://www.facebook.com/blockchaintechnologyltd/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="size-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/blockchain-technology-limited/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="size-7 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
