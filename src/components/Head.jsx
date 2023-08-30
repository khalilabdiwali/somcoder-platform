import React, { useState } from "react";
import { Link } from "react-router-dom";

function Head() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-slate-900">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-20">
        <button
          className="md:hidden p-5 m-2 rounded-md text-teal-500 hover:text-white hover:bg-teal-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fas fa-times fa-lg"></i>
          ) : (
            <i className="fas fa-bars fa-lg"></i>
          )}
        </button>
      </div>
      
      <header className={`${isOpen ? "block" : "hidden"} md:block`}>
        <nav className=" flex flex-col md:flex-row items-center justify-between   md:p-8 rounded mx-auto">
          <div className="ml-4 md:ml-14 p-4 md:p-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white">SOMCODERS</h1>
            <span className="text-white">ONLINE EDUCATION &amp; LEARNING</span>
          </div>         
          
          <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row text-white md:ml-auto md:mr-14 space-y-4 md:space-y-0 md:space-x-5 text-lg">
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/">HOME</Link></li>
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/About">ABOUT</Link></li>
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/Courses">COURSES</Link></li>
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/Contact">CONTACT</Link></li>
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/Pricing">PRICING</Link></li>
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/Team">TEAM</Link></li>
              <li className="font-bold hover:text-teal-600 hover:translate-y-1 duration-300"><Link to="/login">LOGIN</Link></li>
             
            </ul>
           
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Head;