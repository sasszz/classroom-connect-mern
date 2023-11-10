// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from '../assets/images/logo.png'

function Home() {

  return (
    <> 
      <div className='flex'>
          <div className='m-5'>
              <img src={logo} alt='logo' />
          </div>
          <div className='m-5'>
              <Link to='/login'>
              <button className='bg-[#00008B] text-white rounded-3xl text-xl m-5 p-5 px-10'>login</button>
              </Link>
          </div>
      </div>
      <h2 className="font-bold text-5xl">Welcome to Class Connect</h2>
      <div className="m-4 font-bold text-3xl text-white italic">Where Meeting Meets Fun!</div>
      <Link to="/video" className="underline text-4xl m-10">Go to Meeting Room</Link>
    </>
  );
}

export default Home;
