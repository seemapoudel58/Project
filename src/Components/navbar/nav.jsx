import React from "react";
import { Link } from "react-router-dom";
import { FaGem } from "react-icons/fa";
import { NavItems } from "./Item";
import { FaUserPlus } from "react-icons/fa";
import Dropdown from "./Dropdown";

function Nav() {
  const SignUpButton = () => (
    <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
      <FaUserPlus className="mr-2" />
      Sign Up
    </button>
  );

  return (
    <nav className="bg-white shadow-lg ">
      <div className=" width max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-evenly space-x-[6rem] xl:space-x-[25rem] ">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
              >
                <FaGem className="h-8 w-8" />
                <span className="font-semibold text-xl text-gray-800">
                  MAEUM
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ul className="flex items-center justify-center space-x-8  font-bold text-[18px] lg:text-[21px]">
                {NavItems.map((item) => (
                  <li key={item.id} className={item.cName}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-indigo-600 transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SignUpButton />
          </div>
        </div>
      </div>
      <Dropdown />
    </nav>
  );
}

export default Nav;
