import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 h-60 border-white shadow-lg ">
      <div className="flex gap-6">
        <FaFacebookSquare />
        <AiOutlineInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="flex gap-4 font-bold mt-4">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
    </div>
  );
};

export default Footer;
