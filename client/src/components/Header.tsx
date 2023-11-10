import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Class Connect" className="md:ml-0 h-24" />
        <Link to="/login">
          <button className="bg-[#00008B]  text-white rounded-3xl text-xl m-5 p-5 px-10">
            login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
