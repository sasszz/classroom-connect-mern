// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {

  return (
    <>
      <h2>Welcome to Class Connect</h2>
      <Link to="/video" className="underline">Go to Meeting Room</Link>
    </>
  );
}

export default Home;
