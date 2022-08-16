import React from "react";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#03045E] text-gray-300  px-0">
      <br></br>
      <div className="grid grid-cols-4 gap-3 bg-[03045E]">
        <div className="text-center">
          <img src={logo} className="h-20 content-center px-28"></img>
          <b>SMECO</b>

          <p class="text-sm hover:text-base text-center hover:text-yellow-600">
            Platform SMECO which is a marketing <br></br>&loyalty programs for
            all the small medium Enterprises
          </p>
        </div>
        <div className="text-left">
          <p className="text-xl">
            <b>Information</b>
          </p>
          <br></br>

          <div className="grid grid-cols-2 gap-1">
            <div classname="hover:text-yellow-600">
              <p className="hover:text-yellow-600">0776198765</p>
              <div>
                <br></br>
                <p className="hover:text-yellow-600">Smeco@gmail.com</p>
              </div>
            </div>
            <div>
              <FaPhone className="text-2xl  hover:text-yellow-600" />
              <div>
                <br></br>
                <MdEmail className=" text-2xl hover:text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-left">
          <p className="text-xl">
            <b> Contact Us </b>
          </p>{" "}
          <br></br>
          <a href="" className="hover:text-yellow-600">
            About Us
          </a>
          <br></br>
          <a href="" className="hover:text-yellow-600">
            More searchs
          </a>
          <br></br>
          <a href="" className="hover:text-yellow-600">
            Promotional Offers
          </a>
          <br></br>
          <a href="" className="hover:text-yellow-600">
            Shops
          </a>
          <br></br>
        </div>
        <div className="text-left">
          <p className="text-xl">
            <b> Helpful Liks</b>
          </p>
          <br></br>

          <a href="" className="hover:text-yellow-600">
            Service
          </a>
          <br></br>
          <a href="#" className="hover:text-yellow-600">
            Support
          </a>
          <br></br>
          <a href="" className="hover:text-yellow-600">
            Terms & conditions
          </a>
          <br></br>
          <a href="" className="hover:text-yellow-600">
            Privacy policy
          </a>
          <br></br>
        </div>
        <br></br>
      </div>
      <hr></hr>
      <div className="flex justify-center sm:w-{400px} pt-4 text-2xl text-gray-300 gap-4">
        <FaFacebook className="hover:text-yellow-600 hover:text-3xl" />
        <FaInstagram className="hover:text-yellow-600 hover:text-3xl" />
        <FaTwitter className="hover:text-yellow-600 hover:text-3xl" />
        <FaYoutube className="hover:text-yellow-600 hover:text-3xl" /> <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Footer;
