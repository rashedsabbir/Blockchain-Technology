/* eslint-disable no-unused-vars */
import React from "react";
import Switcher from "../../Hooks/DarkMode/Switcher";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-transparent bg-opacity-50">
      <div className="navbar">
        <div className="navbar-start">
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
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Career</a>
              </li>
              <li>
                <a>Products</a>
                <ul className="p-2">
                  <li>
                    <a>Product 1</a>
                  </li>
                  <li>
                    <a>Product 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-primary">
            Blockchain Technology
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a className="nav-class">Hover Me</a>
            </li>
            <li>
              <a className="nav-class">Contact Us</a>
            </li>
            <li>
              <a className="nav-class">Services</a>
            </li>
            <li>
              <a className="nav-class">Team</a>
            </li>
            <li>
              <a className="nav-class">Career</a>
            </li>
            <li>
              <details>
                <summary className="nav-class text-blue-500">Products</summary>
                <ul className="p-2">
                  <li>
                    <a>Product 1</a>
                  </li>
                  <li>
                    <a>Product 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a className="nav-class">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Switcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
