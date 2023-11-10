import { useNavigate } from "react-router-dom";
import ClassroomImg from "../assets/images/classroom_xs.png";
import Desk from "../assets/images/teachertable.png";

const Classroom = () => {
  const navigate = useNavigate();

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
      >
        <img alt="desk" className="h-[14rem]" src={Desk} />
      </button>
    </div>
  );
};

export default Classroom;
