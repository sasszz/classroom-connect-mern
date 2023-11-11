import React from "react";
import { Link } from "react-router-dom";
import GDILogo from "../assets/images/gdilogo.png";
import Github from "../assets/images/whitegithub.png";
import Logo from "../assets/images/logo.png";

const FooterLanding = () => {
  return (
    <div className="bg-[#011638] h-18 p-4 flex row justify-between px-12">
      <div className="flex row gap-4 items-center">
        <img className="h-[42px]" src={Logo} alt="Classroom Connect" />
        <img className="h-[42px]" src={GDILogo} alt="GDI" />
      </div>
      <p className="text-white self-center">
        Built in the spirit of collaboration for the{" "}
        <Link
          className="hover:text-[#EEC643] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          to="https://girldevelopit.com/"
        >
          GirlDevelopIt
        </Link>{" "}
        2023 Hackathon
      </p>
      <div className="flex row gap-4">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://github.com/sasszz/classroom-connect-mern"
        >
          <button className="bg-[#011638] hover:bg-[#00008B] text-white rounded-lg border text-sm px-4 py-2 flex row gap-2 justify-center items-center">
            <img className="h-[16px]" alt="Github" src={Github} />
            <p>Github</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FooterLanding;
