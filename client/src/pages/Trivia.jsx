import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { CgLogOut } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { BsChatLeftText, BsPeople } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";

const Trivia = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedDivIndex, setSelectedDivIndex] = useState(0);

  const divsData = [
    "HyperText Markup Language",
    "Highly Textured Machine Learning",
    "Hardware Multi Transmission Link",
    "Host Matrix Transformation Lexicon",
  ];

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setSelectedDivIndex((prevIndex) => (prevIndex + 1) % divsData.length);
    } else if (event.key === "ArrowLeft") {
      setSelectedDivIndex(
        (prevIndex) => (prevIndex - 1 + divsData.length) % divsData.length
      );
    }
  };

  useEffect(() => {
    // Set focus to the selected div when it changes
    const selectedDiv = document.getElementById(`div-${selectedDivIndex}`);
    if (selectedDiv) {
      selectedDiv.focus();
    }
  }, [selectedDivIndex]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  // Function to toggle visibility
  const toggleVisibility = (section) => {
    setActiveSection(section);
    console.log(activeSection);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key (e.g., new line in a textarea)
      handleSendMessage();
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between overflow-y-hidden">
      <div className="text-white h-auto flex">
        <div>
          <div className="m-40">
            <div className="font-bold text-5xl">Question</div>
            <div className="text-2xl m-5">What does HTML stand for?</div>
          </div>

          <div className="bg-black text-white">
            <ProgressBar
              completed={10}
              bgColor="blue"
              className="text-left "
            />
            <div
              className="flex flex-wrap justify-center text-xl font-bold"
              onKeyDown={handleKeyDown}
              tabIndex="0"
            >
              {divsData.map((div, index) => (
                <div
                  key={index}
                  id={`div-${index}`}
                  className={`bg-[#00008B] cursor-pointer rounded mt-8 border text-white p-10 m-2 w-1/5 md:w-1/6 h-40 focus:outline-none focus:border-4 focus:text-[#00008B] focus:bg-[#EEC643] focus:border-blue-700 focus:shadow-outline-blue`}
                  tabIndex="0"
                >
                  {div}
                </div>
              ))}
            </div>
          </div>
        </div>

        {activeSection === "participants" && (
          <div id="participants" className="bg-black w-1/4 border rounded ">
            <div className="p-2 border-b flex justify-between">
              <div className="flex">
                <BsPeople className="m-1" />
                <div>Participants (3)</div>
              </div>
              <RxCross2 onClick={() => toggleVisibility()} className="m-1" />
            </div>
            <div className="p-2 border m-1 flex items-center">
              <div className="bg-white text-black h-7 w-7 m-1">T</div>
              <div>Tanya</div>
            </div>
            <div className="p-2 border m-1 flex items-center">
              <div className="bg-white text-black h-7 w-7 m-1">L</div>
              <div>Lucie</div>
            </div>
            <div className="p-2 border m-1 flex items-center">
              <div className="bg-white text-black h-7 w-7 m-1">L</div>
              <div>Linda</div>
            </div>
          </div>
        )}

        {activeSection === "leaderboard" && (
          <div id="leaderboard" className="bg-black w-1/4 border rounded ">
            <div className="p-2 border-b flex justify-between">
              <div className="flex">
                <MdLeaderboard className="m-1" />
                <div>Leaderboard</div>
              </div>
              <RxCross2 onClick={() => toggleVisibility()} className="m-1" />
            </div>
            <div className="p-2 border m-1 flex items-center">
              <div className="m-1">1.</div>
              <div>Tanya</div>
              <div className="m-1">(13/20)</div>
            </div>
            <div className="p-2 border m-1 flex items-center">
              <div className="m-1">2.</div>
              <div>Lucie</div>
              <div className="m-1">(12/20)</div>
            </div>
            <div className="p-2 border m-1 flex items-center">
              <div className="m-1">3.</div>
              <div>Linda</div>
              <div className="m-1">(11/20)</div>
            </div>
          </div>
        )}

        {activeSection === "chat" && (
          <div id="chat" className="relative bg-black w-1/4 border rounded ">
            <div className="p-2 border-b flex justify-between">
              <div className="flex">
                <BsChatLeftText className="m-1" />
                <div>Chat</div>
              </div>
              <RxCross2 onClick={() => toggleVisibility()} className="m-1" />
            </div>

            <div>
              {/* Display messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`m-2 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block px-2 py-1 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <div className="text-black">Tanya</div>
                    <div className="font-bold">{message.text}</div>
                    <div className="italic text-sm text-black">
                      {new Date().toLocaleString([], {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </div>
                  </span>
                </div>
              ))}
            </div>

            <div className="p-2 border-t absolute bottom-0 flex items-center w-full justify-between">
              <input
                type="text"
                value={newMessage}
                onKeyDown={handleKeyPress} // Handle Enter key press
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded bg-black text-white"
              />
              <AiOutlineSend onClick={handleSendMessage} />
            </div>
          </div>
        )}
      </div>
      <Footer2 />
    </div>
  );
};

export default Trivia;
