import React from "react";
import profile from "../../../../public/image/profile.svg";
import search from "../../../../public/image/Frame.svg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu dropdown-content menu-sm z-[1] mt-3 rounded-box bg-black px-8 text-white shadow"
            >
              <p>Home</p>
              <p>Recipes</p>
              <p>About</p>
              <p>Search</p>
            </ul>
          </div>
          <a className=" text-2xl font-bold text-[#150B2B] md:text-[32px]">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden gap-12 text-[#150B2BB2] lg:flex">
          <p>Home</p>
          <p>Recipes</p>
          <p>About</p>
          <p>Search</p>
        </div>
        <div className="navbar-end flex gap-2">
          <div className="search-bar hidden rounded-[50px] bg-[#150B2B0D] p-4 px-6 md:flex md:w-[200px]">
            <div className=" flex items-center justify-center gap-2 text-center text-[#150B2BB2]">
              <div>
                {" "}
                <FaSearch />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  className="border-none bg-transparent"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full bg-[#0BE58A] p-2">
                <img
                  className="text-[#150B2B]"
                  alt="Tailwind CSS Navbar component"
                  src={profile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
