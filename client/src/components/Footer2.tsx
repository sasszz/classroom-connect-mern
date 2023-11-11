import React from "react";
import { Link } from "react-router-dom";
import Logout from "../assets/images/logout.png";
import Apple from "../assets/images/apple.png";
import Logo from "../assets/images/logo.png";

const Footer2 = () => {
  return (
    <div className="bg-[#011638] h-18 p-4 flex row justify-between px-12">
      <div className="flex row gap-4">
        <img className="h-[42px]" src={Logo} alt="Classroom Connect" />
        <div className="hidden sm:inline">
          <Link to="/">
            <button className="bg-[#011638] hover:bg-[#00008B] text-white rounded-lg border text-sm px-8 py-2 flex row gap-2 justify-center items-center">
              <img className="rotate-180 h-[12px]" alt="logout" src={Logout} />
              <p>Logout</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex row gap-4">
        <Link to="/classroom">
          <button className="bg-[#011638] hover:bg-[#00008B] text-white rounded-lg border text-sm px-4 py-2 flex row gap-2 justify-center items-center">
            <img className="h-[16px]" alt="Apple" src={Apple} />
            <p>Back to Classroom</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer2;
