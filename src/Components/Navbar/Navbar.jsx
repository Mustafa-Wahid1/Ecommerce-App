import React from "react";
import logo from "../../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { PiHandbagFill } from "react-icons/pi";
import { IoIosHeart } from "react-icons/io";

const Navbar = ({ handalscrool, setsearchterm, isScroold, handelpanel, totalItems,Wishlist }) => {
  return (
    <>
      <header className={` bg-white fixed top-0 right-0 left-0 ${isScroold ? 'shadow-lg' : ''} `}>
        {/* logo */}
        <nav className=" px-25  h-[14vh] max-w-[1300px]: flex items-center justify-between max-auto ">
          <div>
            {" "}
            <a
              className="bg-gray-200 h-15 w-15 rounded-full flex items-center justify-between p-2"
              href=""
            >
              <img className="" src={logo} />
            </a>
          </div>
          {/* nav action */}
          <div className=" flex items-center gap-5">
            {/* search bar */}
            <div className="flex items-center p-0.5 rounded-full border-2 border-blue-600">
              <input
                onFocus={handalscrool}
                type="text"
                className="h-[4vh] pl-5 focus:outline-none"
                name="search"
                autoComplete="off"
                placeholder="Search..."
                onChange={(e) => setsearchterm(e.target.value)}
              />
              <button className=" flex justify-center items-center bg-blue-600 rounded-full w-10 h-10 text-white text-xl">
                <IoSearchSharp />
              </button>
            </div>
            {/* icon */}
            <button onClick={() => (handelpanel('WhishList')

            )} className="text-[1.7rem] text-zinc-800 relative cursor-pointer">
              <IoIosHeart/>
             {
              Wishlist.length > 0 &&
               <span
                className="text-white bg-red-600 h-4 w-4 rounded-full flex items-center justify-center text-[10px]
                     absolute top-4 border-2 border-white "
              >
              {Wishlist.length}
              </span>
             }
            </button>

            <button onClick={() => (handelpanel('Cart')

            )} className="text-[1.7rem] text-zinc-800 relative cursor-pointer">
              <PiHandbagFill />
              {
                totalItems >0 && 
                              <span
                className="text-white bg-red-600 h-4 w-4 rounded-full flex items-center justify-center text-[10px]
                     absolute top-4 border-2 border-white" >{totalItems}  
              </span>
              }
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
