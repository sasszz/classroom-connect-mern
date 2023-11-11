import React from "react";
import { Link } from "react-router-dom";
import Logout from "../assets/images/logout.png";
import Chat from "../assets/images/chat.png";
import People from "../assets/images/people.png";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#011638] h-18 p-4 flex row justify-between px-12">
      <div className="flex row gap-4">
        <img className="h-[42px]" src={Logo} alt="Classroom Connect" />
        <Link to="/">
          <button className="bg-[#011638] hover:bg-[#00008B] text-white rounded-lg border text-sm px-8 py-2 flex row gap-2 justify-center items-center">
            <img className="rotate-180 h-[12px]" alt="logout" src={Logout} />
            <p>Logout</p>
          </button>
        </Link>
      </div>
      <div className="flex row gap-4 hidden sm:inline">
        <button className="bg-[#011638] hover:bg-[#00008B] text-white rounded-lg border text-sm px-4 py-2 flex row gap-2 justify-center items-center">
          <img className="h-[16px]" alt="Chat" src={Chat} />
          <p>Chat</p>
        </button>
        <button className="bg-[#011638] hover:bg-[#00008B] text-white rounded-lg border text-sm px-4 py-2 flex row gap-2 justify-center items-center">
          <img className="h-[18px]" alt="People" src={People} />
          <p>4 Students</p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
