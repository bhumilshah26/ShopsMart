import React from "react";
import ItemsContainer from "./ItemsContainer";
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pb-4 ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Customer Support</span>
        </h1>
        <div>
          {/* <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          /> */}
          <button
            className="text-xl bg-teal-500 hover:bg-teal-900 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            +91 987456320
          </button>
        </div>
      </div>
      <div className="pt-2 pb-4 px-10">
      <ItemsContainer />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        {/* <SocialIcons Icons={Icons} /> */}
        <div>
           {/* <h3 className="text-lg font-bold mb-4">Connect with us</h3> */}
           <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegram size={24} />
          </a>
        </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;