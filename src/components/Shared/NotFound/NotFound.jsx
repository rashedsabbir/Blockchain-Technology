import React from "react";
import { Link, Navigate } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="boxShadow px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl">
      <img
        src="https://i.ibb.co/nP1Cngw/Error-Server-1.png"
        alt="illustration"
        className="w-full lg:w-[500px]"
      />
      <h1 className="text-[#1C3177] text-[1.8rem] sm:text-[2.5rem] font-[800] mt-3 w-full lg:w-[55%] text-center">
        The page cannot be found. The requested URL was not found on this
        server.{" "}
      </h1>
      <Link to={`/`}>
        <button
          className="bg-white w-56 rounded-2xl h-14 my-6 relative text-right text-black text-xl font-semibold group"
          type="button"
        >
          <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[215px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p className="translate-x-2">Back to Home</p>
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
