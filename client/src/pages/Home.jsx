// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import "../App.css";

function Home() {
  return (
    <>
      <Header />
      <div className="mt-10">
        <h2 className="font-bold text-5xl">Welcome to Class Connect</h2>
        <div className="m-4 font-bold text-3xl text-white italic">
          Where Meeting Meets Fun!
        </div>
      </div>
    </>
  );
}

export default Home;
