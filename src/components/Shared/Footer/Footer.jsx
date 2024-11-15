import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="pt-12">
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
          <nav className="place-self-center ">
            <div className="grid grid-flow-col gap-4">
              <Link to="https://www.facebook.com/blockchaintechnologyltd/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
