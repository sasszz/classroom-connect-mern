import { useState } from "react";

import { useNavigate } from "react-router-dom";
import ClassroomImg from "../assets/images/classroom.png";
import Desk from "../assets/images/teachertable.png";
import Trivia from "../assets/images/trivia.png";

const Classroom = () => {
  const navigate = useNavigate();
  const [showVideoTooltip, setShowVideoTooltip] = useState(false);
  const [showTriviaTooltip, setShowTriviaTooltip] = useState(false);

  const divStyle = {
    backgroundImage: `url(${ClassroomImg})`,
  };

  return (
    <div
      className="h-screen bg-fixed bg-center relative bg-no-repeat"
      style={divStyle}
    >
      <button
        className="absolute top-[180px] self-center hover:opacity-75"
        onClick={() => {
          navigate("/video");
        }}
        onMouseEnter={() => setShowVideoTooltip(true)}
        onMouseLeave={() => setShowVideoTooltip(false)}
      >
        <img alt="desk" className="h-[14rem]" src={Desk} />
      </button>
      <button
        className="absolute top-[30px] left-[100px] hover:opacity-75"
        onClick={() => {
          navigate("/trivia");
        }}
        onMouseEnter={() => setShowTriviaTooltip(true)}
        onMouseLeave={() => setShowTriviaTooltip(false)}
      >
        <img alt="trivia" className="h-[9rem]" src={Trivia} />
      </button>
      {showVideoTooltip && (
        <div className="transition duration-300 ease-in-out  tooltip bg-black text-white p-2 text-sm">
          Let's join the class meeting!
        </div>
      )}
      {showTriviaTooltip && (
        <div className="transition duration-300 ease-in-out  tooltip bg-black text-white p-2 text-sm">
          Let's play a game of trivia!
        </div>
      )}
    </div>
  );
};

export default Classroom;
