import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGem } from "react-icons/fa";
import { NavItems } from "./Item";
import { FaUserPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const SignUpButton = () => {
    return (
      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-yellow-700 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
          <FaUserPlus className="mr-2" />
          Sign Up
        </button>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-lg ">
      <div className=" width max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-evenly space-x-[6rem] xl:space-x-[25rem] ">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-2 text-yellow-700"
              >
                <FaGem className="h-8 w-8" />
                <span className="font-semibold text-xl text-gray-800">
                  MAEUM
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <ul className="flex items-center justify-center space-x-8  font-bold text-[18px] lg:text-[21px] z-10">
                {NavItems.map((item) => (
                  <li key={item.id} className={item.cName}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-yellow-600 transition duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <SignUpButton />

          <div className="md:hidden">
            <IoMenu className="h-6 w-6" onClick={toggleMenu} />
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pt-10 px-5 bg-white w-7/12 translate-x-0 fixed h-full top-0 left-0 z-10">
            <div className="absolute top-[4%] left-[10%] translate-y-[0%]">
              <div className=" flex justify-between items-center  ">
                <div>
                  <Link
                    to="/"
                    className="flex items-center space-x-2 text-yellow-700 hover:text-yellow-500"
                  >
                    <FaGem className="h-8 w-8" />
                    <span className="font-semibold text-xl text-gray-800">
                      MAEUM
                    </span>
                  </Link>
                </div>

                <div>
                  <IoMdClose className="h-6 w-6 ml-14" onClick={closeMenu} />
                </div>
              </div>
              <div className="py-10">
                <ul className=" md:hidden ">
                  {NavItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-bodyLargeRegular py-2 cursor-pointer tracking-wider uppercase"
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
         </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;