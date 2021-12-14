import React from "react";
import {  Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-500">
      <div className="w-1/4">
        <Link to="/home" className="text-xl font-bold">ZerroZilla</Link>
      </div>
      <div className="w-1/2 pr-4">
       <input type="text" className="w-full bg-gray-100 h-10 pl-3 rounded-xl border-none" placeholder="SEARCH" />
      </div>
      <div className="w-1/4">
        <div className="float-right">
          <button className="font-bold text-white uppercase hover:text-gray-100">vivek kumar</button>
          <button className="bg-red-800 pl-6 pr-6 pt-1 pb-1 ml-5 text-white rounded-full font-bold hover:bg-red-700">CART</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
