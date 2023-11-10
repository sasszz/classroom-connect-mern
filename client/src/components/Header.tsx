import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#011638] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Class Connect" className="md:ml-0 h-20" />
        </Link>
        <div className="items-center flex flex-row gap-10">
          <ul className="text-white flex flex-row gap-10">
            <li>
              <Link to="/about">
                <button className="hover:text-[#EEC643]">About Us</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="hover:text-[#EEC643]">Sign Up</button>
              </Link>
            </li>
          </ul>
          <Link to="/login">
            <button className="bg-[#00008B] hover:bg-[#EEC643] hover:text-[#00008B] text-white rounded-3xl border text-xl px-14 py-4">
              login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
