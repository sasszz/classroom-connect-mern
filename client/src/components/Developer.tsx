import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Avatar1 from "../assets/images/avatar1.png";
import Avatar2 from "../assets/images/avatar2.png";
import Avatar3 from "../assets/images/avatar3.png";
import Avatar4 from "../assets/images/avatar4.png";
import Avatar5 from "../assets/images/avatar5.png";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";
import Website from "../assets/images/website.png";
import Dice from "../assets/images/dice.png";

const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

const Developer = ({ name, role, github, linkedin, website }) => {
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

  return (
    <div className="cursor-star max-w-xs w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="px-4 py-6">
        <img
          className="h-24 rounded-full mx-auto"
          src={randomAvatar}
          alt="Profile"
        />
        <h1 className="font-bold text-2xl text-center mt-2">{name}</h1>
        <p className="text-gray-600 text-sm text-center">{role}</p>
        <div className="flex justify-center items-center mt-2">
          {github && (
            <Link to={github}>
              <img src={Github} alt="Github" />
            </Link>
          )}
          {linkedin && (
            <Link to={linkedin}>
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          )}
          {website && (
            <Link to={website}>
              <img src={Website} alt="Website" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const DeveloperGrid = () => {
  const [avatarIndex, setAvatarIndex] = useState(0);

  const randomizeAvatars = () => {
    const newIndex = Math.floor(Math.random() * avatars.length);
    setAvatarIndex(newIndex);
  };

  const diceRef = useRef<HTMLImageElement>(null); // Define the type of ref

  const handleHover = () => {
    if (diceRef.current) {
      diceRef.current.style.transform = "rotate(45deg)";
    }
  };

  const handleHoverOut = () => {
    if (diceRef.current) {
      diceRef.current.style.transform = "rotate(0deg)";
    }
  };

  // Sample data for developers
  const developers = [
    {
      name: "Linda Paredes",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/linda-paredes",
      website: "https://www.bluehourwithlinda.com/",
    },
    {
      name: "Marita Thomas",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/marita-thomas/",
      website: "https://uxfol.io/cdae8129",
    },
    {
      name: "Leticia Gomez",
      role: "Developer",
      github: "https://github.com/lggomez18",
    },
    {
      name: "Tanya Kemkar",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/tanyakemkar/",
      github: "https://github.com/kemkartanya",
    },
    {
      name: "Jerome Haynes",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/jerome-haynes/",
      github: "https://github.com/dev-rome",
    },
    {
      name: "Jigme",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/jigmec/",
      github: "https://github.com/jchodon",
    },
    {
      name: "Lucie Chevreuil",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/lucie-c-sasszz/",
      github: "https://github.com/sasszz",
    },
    {
      name: "Chaiya",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/dchaiyaemmanuel/",
      github: "https://github.com/Chaiya8",
    },
    {
      name: "Danielle Smikle",
      role: "Developer",
    },
    {
      name: "Micheline Doughlin",
      role: "Developer",
    },
    {
      name: "Giovanni Govert",
      role: "UI/UX Designer",
    },
    {
      name: "Bea",
      role: "UI/UX Designer",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-32">
        {developers.map((dev, index) => (
          <Developer
            key={index}
            name={dev.name}
            role={dev.role}
            github={dev.github}
            linkedin={dev.linkedin}
            website={dev.website}
          />
        ))}
      </div>
      <button
        className="bg-[#00008B] flex my-8 row gap-2 justify-center items-center hover:bg-[#1178f8] text-white rounded-xl px-4 py-2 w-60"
        onClick={randomizeAvatars}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          ref={diceRef}
          className="h-[24px] hover:rotate-45"
          src={Dice}
          alt="Dice"
        />
        <p>Randomize Avatars</p>
      </button>
    </div>
  );
};

export default DeveloperGrid;
