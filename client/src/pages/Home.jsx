// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import "../App.css";

function Home() {
  return (
    <> 
      <div className='flex'>
          <div className='m-5'>
              <img src={logo} alt='logo' />
              <Link to="/profile">
              <button>profile</button>
              </Link>
          </div>
          <div className='m-5'>
              <Link to='/login'>
              <button className='bg-[#00008B] text-white rounded-3xl text-xl m-5 p-5 px-10'>login</button>
              </Link>
          </div>

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
