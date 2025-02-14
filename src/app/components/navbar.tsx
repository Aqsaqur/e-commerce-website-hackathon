import React from "react";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi"; // React Icon
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className= "bg-black text-white">

      <div className="container mx-auto flex justify-between items-center p-4 px-20">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Food<span className="text-yellow-500">tuck</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-yellow-500 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href={"/menu"} className="hover:text-yellow-500 transition">Menu</a>
          </li>
          <li>
            <a href={"/blog"} className="hover:text-yellow-500 transition">Blog</a>
          </li>
          <li>
            <a href="/chef" className="hover:text-yellow-500 transition">Chef</a>
          </li>
          <li>
            <a href={"/about"} className="hover:text-yellow-500 transition">About</a>
          </li>
          <li>
            <a href="/shop" className="hover:text-yellow-500 transition">Shop</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 transition">Contact</a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <FiSearch size={20} className="hover:text-yellow-500 cursor-pointer" />


          {/* <link rel="stylesheet" href="/signup" ><FiUser size={20}  className="hover:text-yellow-500 cursor-pointer" /> */}
          <Link rel="stylesheet" href="/signup"> <FiUser size={20}  className="hover:text-yellow-500 cursor-pointer" /></Link>

          <Link rel="stylesheet" href="/cart"><FiShoppingBag size={20} className="hover:text-yellow-500 cursor-pointer" /></Link>


          
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white">
            <FiShoppingBag size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;