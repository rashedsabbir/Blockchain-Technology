import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="">
      <button className="smky-btn3 relative px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0  text-4xl py-2 my-8 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border-none hover:text-white">
        Contact Us
      </button>
      <section className="text-gray-700 body-font h-screen relative">
        <div className="md:absolute inset-0 bg-gray-300 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.814299579364!2d90.37271757910156!3d23.792741499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7617fda4ea1%3A0xe097ea5c0a771a32!2sStech%20Group!5e0!3m2!1sen!2sbd!4v1729314014017!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex md:justify-end md:p-4 lg:p-24  px-2">
          <div className="product-card lg:w-[400px] lg:h-[450px] rounded-md shadow-xl overflow-hidden z-[10] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div className="absolute -left-[20%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
              <div className="flex gap-1">
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 rotate-[24deg]"
                  height="200"
                  width="200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>
            <div className="absolute rounded-full bg-gray-500 z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[56%] transition-all duration-300"></div>
            <div className="para uppercase text-center leading-none z-40">
              <p className="text-black font-semibold text-xs font-serif">
                BlockChain
              </p>
              <p className="font-bold text-xl tracking-wider text-gray-500">
                Technology
              </p>
            </div>
            <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
              {/* <svg
                xmlSpace="preserve"
                viewBox="0 0 498.608 498.608"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                version="1.1"
              >
                <g>
                  <ellipse ry="72.08" rx="73" cy="76.72" cx="249.3"></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="63.48"
                    cx="177.388"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="44.816"
                    cx="201.388"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="91.488"
                    cx="164.084"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="118.144"
                    cx="164.084"
                  ></ellipse>
                  <ellipse
                    ry="20.408"
                    rx="20.664"
                    cy="139.728"
                    cx="160.42"
                  ></ellipse>
                  <ellipse
                    ry="20.408"
                    rx="20.664"
                    cy="160.408"
                    cx="153.092"
                  ></ellipse>
                  <ellipse
                    ry="17.448"
                    rx="17.664"
                    cy="17.448"
                    cx="215.42"
                  ></ellipse>
                  <ellipse
                    ry="17.448"
                    rx="17.664"
                    cy="19.488"
                    cx="237.868"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="63.48"
                    cx="321.204"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="44.816"
                    cx="297.204"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="91.488"
                    cx="334.532"
                  ></ellipse>
                  <ellipse
                    ry="26.664"
                    rx="27"
                    cy="118.144"
                    cx="334.532"
                  ></ellipse>
                  <ellipse
                    ry="20.408"
                    rx="20.664"
                    cy="139.728"
                    cx="338.188"
                  ></ellipse>
                  <ellipse
                    ry="20.408"
                    rx="20.664"
                    cy="160.408"
                    cx="345.548"
                  ></ellipse>
                  <ellipse
                    ry="17.448"
                    rx="17.664"
                    cy="17.448"
                    cx="283.228"
                  ></ellipse>
                  <ellipse
                    ry="17.448"
                    rx="17.664"
                    cy="19.488"
                    cx="260.748"
                  ></ellipse>
                </g>
                <polygon
                  points="450.252,366.408 297.308,319.168 297.308,306.608 201.308,306.608 201.308,319.168 
                    	48.356,366.408 57.308,498.608 57.308,498.608 57.308,498.608 441.308,498.608 443.428,498.608 443.428,498.608"
                ></polygon>
                <polygon
                  points="450.252,366.408 297.308,319.168 297.308,306.608 201.308,306.608 201.308,319.168 
                    	48.356,366.408 103.404,498.608 57.308,498.608 57.308,498.608 441.308,498.608 443.428,498.608 443.428,498.608"
                ></polygon>
                <polygon
                  points="450.252,366.408 297.308,319.168 297.308,305.656 246.236,301.48 244.668,319.168 
                    	253.868,366.408 303.164,498.608 57.308,498.608 57.308,498.608 441.308,498.608 443.428,498.608 443.428,498.608"
                ></polygon>
                <path
                  d="M353.972,165.472c0,35.344-51.264,64-104.672,64c-53.376,0-104.656-28.656-104.656-64
                    	s51.28-64,104.656-64C302.708,101.472,353.972,130.128,353.972,165.472z"
                ></path>
                <g>
                  <rect height="112" width="96" y="218.608" x="201.308"></rect>
                  <polygon points="290.084,311.312 249.308,416.152 199.804,335.424 249.308,285.92"></polygon>
                </g>
                <polygon points="297.308,343.808 297.308,218.608 202.284,218.608 281.46,442.96"></polygon>
                <path
                  d="M324.268,134.128c0,72.24-36.624,137.624-74.944,137.624s-74.96-65.376-74.96-137.624
                    	s36.64-84.288,74.96-84.288S324.268,61.888,324.268,134.128z"
                ></path>
                <path d="M249.324,49.84c38.32,0,74.944,12.048,74.944,84.288s-36.624,137.624-74.944,137.624"></path>
                <g>
                  <path
                    d="M259.74,45.08c0,0-69.656,53.328,89.92,117.568c0,0,3.064-70.688-23-101.504
                    		c-26.08-30.8-66.44-27-66.44-27L259.74,45.08z"
                  ></path>
                  <path
                    d="M284.692,35.968c0,0,64.16,71.112-135.672,132.048c0,0-11.784-75.976,18.984-108.528
                    		c30.76-32.552,85.92-27.144,85.92-27.144L284.692,35.968z"
                  ></path>
                </g>
                <circle r="4.672" cy="284.128" cx="332.988"></circle>
                <g>
                  <path
                    d="M196.812,466.152c0,0,70.008-2,119.336-68s51.328-66,78-54.672
                    		c26.664,11.344-25.344-2-18.672,130.672c1.064,21.344-16.672-5.328-16.672-5.328l-81.328,2.656l-39.984,2.488L196.812,466.152z"
                  ></path>
                  <path
                    d="M301.804,466.152c0,0-70.008-2-119.336-68s-51.336-66-78-54.672
                    		c-26.664,11.344,25.344-2,18.672,130.672c-1.064,21.344,16.664-5.328,16.664-5.328l81.336,2.656l39.984,2.488L301.804,466.152z"
                  ></path>
                </g>
                <path d="M387.724,498.608c-20.88-80-56.76-34-138.416-34c-81.664,0-117.536-46-138.416,34H387.724z"></path>
                <path d="M113.308,498.608h274.416c-20.872-80-56.416-34.496-137.208-34"></path>
                <g>
                  <path
                    d="M154.3,188.312c-17.384,0-31.504,14.112-31.504,31.504s14.12,31.504,31.504,31.504
                    		c17.4,0,31.504-14.112,31.504-31.504S171.7,188.312,154.3,188.312z M154.3,237.312c-9.648,0-17.496-7.832-17.496-17.504
                    		s7.84-17.504,17.496-17.504c9.664,0,17.504,7.832,17.504,17.504S163.964,237.312,154.3,237.312z"
                  ></path>
                  <path
                    d="M344.3,188.312c-17.384,0-31.496,14.112-31.496,31.504s14.112,31.504,31.496,31.504
                    		c17.4,0,31.504-14.112,31.504-31.504S361.7,188.312,344.3,188.312z M344.3,237.312c-9.648,0-17.504-7.832-17.504-17.504
                    		s7.848-17.504,17.504-17.504c9.664,0,17.504,7.832,17.504,17.504S353.964,237.312,344.3,237.312z"
                  ></path>
                  <path
                    d="M317.692,308.824c0,26.496-30.064,48-67.168,48c-37.096,0-67.168-21.504-67.168-48
                    		c0-26.512,30.072-8,67.168-8C287.628,300.824,317.692,282.312,317.692,308.824z"
                  ></path>
                </g>
                <path
                  d="M317.692,308.824c0,26.496-30.064,48-67.168,48c-37.096,0-67.168-21.504-67.168-48
                    	c0-26.512,30.072,21.328,67.168,21.328C287.628,330.152,317.692,282.312,317.692,308.824z"
                ></path>
                <polygon points="303.644,302.152 324.316,262.152 358.316,260.152 349.644,286.152 314.316,300.152"></polygon>
                <polygon
                  points="295.644,324.152 314.316,300.152 356.316,303.48 379.644,325.48 350.316,331.48 
                    	313.644,310.152"
                ></polygon>
                <g>
                  <circle r="3.76" cy="477.728" cx="143.068"></circle>
                  <circle r="3.752" cy="477.728" cx="162.348"></circle>
                  <circle r="3.76" cy="477.728" cx="181.7"></circle>
                  <circle r="3.76" cy="477.728" cx="201.02"></circle>
                  <circle r="3.768" cy="477.728" cx="220.332"></circle>
                  <circle r="3.752" cy="477.728" cx="239.644"></circle>
                  <circle r="3.752" cy="477.728" cx="258.988"></circle>
                  <circle r="3.752" cy="477.728" cx="278.284"></circle>
                  <circle r="3.752" cy="477.728" cx="297.628"></circle>
                  <circle r="3.752" cy="477.728" cx="316.924"></circle>
                  <circle r="3.76" cy="477.728" cx="336.236"></circle>
                  <circle r="3.76" cy="477.728" cx="355.548"></circle>
                </g>
              </svg> */}
              <img src="./Blockchain 256 logo.png" alt="" />
            </div>
            <div className="btm-_container z-40 flex flex-col justify-center items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-3 items-center justify-center">
                  <div className="p-1 bg-white flex items-center justify-center rounded-full">
                    <svg
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="1"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="fill-gray-800 h-3 w-3 stroke-none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg text-white">
                      <a
                        href="tel:+8809606990123"
                        className="text-white hover:text-gray-800"
                      >
                        +8809606990123
                      </a>
                    </p>
                    <p className="font-semibold text-lg text-white">
                      <a
                        href="tel:+8801818773300"
                        className="text-white hover:text-gray-800"
                      >
                        +8801818773300
                      </a>
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row gap-3 items-center justify-center">
                    <div className="p-1 bg-white flex items-center justify-center rounded-full">
                      <svg
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="fill-gray-800 h-3 w-3 stroke-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <p className="font-semibold text-md text-white">
                      <a
                        href="mailto:blockchaintech@stechgroupbd.com"
                        className="hover:text-gray-800 text-white"
                      >
                        blockchaintech@stechgroupbd.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <Link to="/contact">
                  <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white px-7 text-sm font-medium text-gray-800 backdrop-blur-3xl gap-2 undefined">
                      Contact Us
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
