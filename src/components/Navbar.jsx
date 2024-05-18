import React from 'react';
import logo from "../assets/logo.png";
import {FaLinkedin, FaGithub, FaInstagram, } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div>
        <Sidebar />
      </div>
        <div className="flex flex-shrink-0 text-center">
            <img className="mx-2 w-20 absolute left-20 top-6" src={logo} alt="logo" />
        </div>
        <div className="m-2 flex item-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/pulkit-jain-5428a1232/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Pulkitnj" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/pulkitt_jainn?igsh=M2NjeHhlMnF0aTEz" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://leetcode.com/u/Pulkit28/" target="_blank">
            <SiLeetcode />
          </a>
        </div>
    </nav>
  )
}

export default Navbar
