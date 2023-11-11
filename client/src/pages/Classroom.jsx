import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
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
    <div className="min-h-screen flex flex-col justify-between overflow-y-hidden bg-[#011638]">
      <div
        className="flex-grow bg-fixed bg-center relative bg-no-repeat"
        style={divStyle}
      >
        <button
          className="absolute lg:top-[200px] lg:left-[650px] md:left-[300px] md:top-[150px] left-[200px] top-[150px] hover:opacity-75"
          onClick={() => {
            navigate("/video");
          }}
          onMouseEnter={() => setShowVideoTooltip(true)}
          onMouseLeave={() => setShowVideoTooltip(false)}
        >
          <img alt="desk" className="h-[14rem]" src={Desk} />
        </button>
        <button
          className="absolute lg:top-[0px] lg:left-[100px] left-[30px] hover:opacity-75"
          onClick={() => {
            navigate("/trivia");
          }}
          onMouseEnter={() => setShowTriviaTooltip(true)}
          onMouseLeave={() => setShowTriviaTooltip(false)}
        >
          <img alt="trivia" className="h-[9rem]" src={Trivia} />
        </button>
        {showVideoTooltip && (
          <div className="transition duration-300 ease-in-out tooltip bg-[#011638] text-center text-white p-2 text-lg">
            Join the class meeting!
          </div>
        )}
        {showTriviaTooltip && (
          <div className="transition duration-300 ease-in-out tooltip bg-[#011638] text-center text-white p-2 text-lg">
            Play a game of trivia!
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Classroom;
