import React from "react";
import  {BiChevronRight} from "react-icons/bi";
import {BiSearch} from "react-icons/bi"

const NavSm = () => {
    return(
        <>
        <div className="text-white font-bold px-4 py-2 flex items-center justify-between">
            <div>
                <h3>It all starts here</h3>
                <span className="text-gray-300 text-xs flex items-center">MUMBAI <BiChevronRight /> </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};


const NavMd = () => {
    return(
        <div className="container mx-auto w-3/5 px-4 py-2 w-full flex items-center">
        <div className="w-8 h-8"> <BiSearch className="w-full h-full text-white" /> </div>
      <input type="search" 
      placeholder="Search for movies, events, plays, sports and activities" 
      className="w-full px-2 py-1"/>
      <div className="w-20 px-1"><button className="bg-red-600 text-white px-1 py-1 hover:bg-white hover:text-red-600"> sign in </button></div>
  </div>
    );
};


const NavLg = () => {
    return(
        <div className="container mx-auto w-3/5 px-4 py-2 w-full flex items-center">
        <div className="w-8 h-8"> <BiSearch className="w-full h-full text-white" /> </div>
      <input type="search" 
      placeholder="Search for movies, events, plays, sports and activities" 
      className="w-full px-2 py-1"/>
      <div className="w-20 px-1"><button className="bg-red-600 text-white px-2 py-1 hover:bg-white hover:text-red-600"> sign in </button></div>
  </div>
    );
};


const Navbar = () => {
    return(
        <>
        <nav className="bg-gray-700">
            <div className="md:hidden lg:hidden">
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden">
                <NavMd />
            </div>
            <div className="hidden lg:flex">
                <NavLg />
            </div>
        </nav>
        </>
    );
};

export default Navbar;