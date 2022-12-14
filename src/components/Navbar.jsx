import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoImg from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[70px] z-10 bg bg-[#ffff] md:drop-shadow-xl fixed drop-shadlow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="object-contain h-16" src={logoImg} alt="logo" />
          <ul className="hidden md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#FF8C32]" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shops"
                className={({ isActive }) =>
                  isActive ? "text-[#FF8C32]" : "text-black"
                }
              >
                Shops
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "text-[#FF8C32]" : "text-black"
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive ? "text-[#FF8C32]" : "text-black"
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "text-[#FF8C32]" : "text-black"
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-10">
          <button className="border-none bg-transparent text-black mr-8 hover:bg-transparent hover:text-[#FF8C32]">
            <Link to="/login">Login</Link>
          </button>
          <button className="border-none px-4 py-1">
            <Link to="/SignUp">Sign Up</Link>
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" />
          ) : (
            <AiOutlineClose className="w-5" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-[#ffff] w-full px-4"}>
        <li className="border-b-2 border-zinc-300 w-full py-4">Home</li>
        <li className="border-b-2 border-zinc-300 w-full py-4">Shops</li>
        <li className="border-b-2 border-zinc-300 w-full py-4">Products</li>
        <li className="border-b-2 border-zinc-300 w-full py-4">About Us</li>
        <li className="border-b-2 border-zinc-300 w-full py-4">FAQ</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent hover:bg-transparent text-[#03045E] hover:text-[#FF8C32] px-8 py-3 mb-4">
            Login
          </button>
          <button className="border-none px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
