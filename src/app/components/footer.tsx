import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm" >
      {/* Top Section */}
      <div className=" container mx-auto px-20 py-8 md:flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Still <span className="text-yellow-500">You Need Our Support ?</span>
          <p className="mt-2 md:mt-0 text-gray-400 text-xs">
          Dont wait, make a smart & logical quote here. Its pretty easy.
        </p>
        </div>
       
        <div className="flex mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 w-full md:w-auto text-black outline-none"
          />
          <button className="bg-yellow-500 text-white px-4 py-2">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-500 my-4"></div>

      {/* Middle Section */}
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-2">About Us.</h3>
          <p className="text-gray-400">
            Corporate clients and leisure travelers have been relying on us for dependable, safe, and professional car services in major cities across the world.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <div className="bg-yellow-500 p-2 text-black rounded-full">
              <FiArrowRightCircle size={24} />
            </div>
            <div>
              <p>Opening Hours</p>
              <p className="text-gray-400 text-sm">Mon - Sat (8.00 - 6.00)</p>
              <p className="text-gray-400 text-sm">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="px-20">
          <h3 className="text-lg font-bold mb-2">Useful Links</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-bold mb-2">Help?</h3>
          <ul className="space-y-2">
            <a href={"/faq"} className="hover:text-yellow-500 transition">FAQ</a>
            <li>Term & Condition</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-bold mb-2">Recent Post</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/f1.png"
                alt="Post"
                className="w-16 h-16 rounded-md"
              />
              <div>
                <p>Is fast food good for your body?</p>
                <span className="text-gray-400 text-sm">February 28, 2022</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/f1.png"
                alt="Post"
                className="w-16 h-16 rounded-md"
              />
              <div>
                <p>Change your food habit with organic food</p>
                <span className="text-gray-400 text-sm">February 28, 2022</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/f1.png"
                alt="Post"
                className="w-16 h-16 rounded-md"
              />
              <div>
                <p>Do you like fast food for your life?</p>
                <span className="text-gray-400 text-sm">February 28, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4 px-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-400 text-center">Copyright © 2024 by Aqsa Mansoor Qurayshi . All Rights Reserved.</p>
          <p className="text-gray-400 text-center">Roll no. 00136849</p>
          <div className="flex space-x-4 text-white">

          </div>
        </div>
      </div>   
    </footer> 
  );
};

export default Footer;