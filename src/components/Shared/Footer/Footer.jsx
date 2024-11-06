import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white lg:grid lg:grid-cols-5 gap-4">
        <div className="  lg:col-span-2 flex lg:flex-row flex-col lg:py-12 items-center">
          <img src="./Blockchain 256 logo.png" alt="" className=" h-80 w-80 " />
          <p className="px-4">
            Blockchain Technoloogy aims to please your needs as per
            requirements. You can reach us via email at <br />
            <a href="mailto:blockchaintech@stechgroupbd.com">
              blockchaintech@stechgroupbd.com
            </a>
          </p>
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="mx-12">
              <p>
                <span className="text-lg font-bold uppercase tracking-wide text-gray-500">
                  {" "}
                  Call us{" "}
                </span>

                <a
                  href="tel:+8809606990123"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  +8809606990123
                </a>
                <a
                  href="tel:+8801818773300"
                  className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
                >
                  +8801818773300
                </a>
              </p>

              <p className="mt-8">
                House- 31, Road- 17, Block- E Banani, <br /> Dhaka- 1213,
                Bangladesh
              </p>
              <ul className="mt-8 space-y-1 text-sm text-gray-700">
                <li>Saturday to Thursday: 9am - 5pm</li>
                <li>Weekend: 10am - 3pm</li>
              </ul>
              <ul className="mt-8 flex gap-6 justify-center items-center">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-bold text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/services"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Software Development{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/services"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      IT Consulting and Strategy{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/services"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Cybersecurity Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/services"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      IT Infrastructure Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/services"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Digital Marketing Services{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/contact"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="/faq"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      FAQ{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              {/* <ul className="flex flex-wrap gap-4 text-xs justify-center">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Cookies{" "}
                  </a>
                </li>
              </ul> */}

              <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                &copy; 2024. Blockchain Technology Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
