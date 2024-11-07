/* eslint-disable no-unused-vars */
import React from "react";
import Switcher from "../../Hooks/DarkMode/Switcher";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white  backdrop-filter backdrop-blur-2xl bg-opacity-0 ">
      <div className="navbar flex justify-between">
        <div className="navbar-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-blue-500 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" className=" ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* <li>
                <a>Team</Link>
              </li> */}
              {/* <li>
                <a>Career</Link>
              </li>
              <li>
                <a>Products</Link>
                <ul className="p-2">
                  <li>
                    <a>Product 1</Link>
                  </li>
                  <li>
                    <a>Product 2</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Link
              to="/"
              className="btn btn-ghost text-xl text-primary dark:text-secondary  "
            >
              <img
                className="lg:w-10 lg:h-12 w-5 h-5"
                src="/Blockchain tech logo.png"
                alt=""
              />{" "}
              <h3 className="neon-text glitch-effect lg:text-2xl">
                Blockchain Technology
              </h3>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal  px-1 gap-2">
            <li>
              <Link to="/" className=" nav-class text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className=" nav-class text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-class text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-class text-primary">
                Services
              </Link>
            </li>
            {/* <li>
              <a className="nav-class text-primary">Team</Link>
            </li> */}
            {/* <li>
              <a className="nav-class text-primary">Career</Link>
            </li>
            <li>
              <details>
                <summary className="nav-class text-primary">Products</summary>
                <ul className="p-2">
                  <li>
                    <a>Product 1</Link>
                  </li>
                  <li>
                    <a>Product 2</Link>
                  </li>
                </ul>
              </details>
            </li> */}

            <li>
              <Link to="/faq" className="nav-class text-primary">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className=" ">
          <Switcher />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
