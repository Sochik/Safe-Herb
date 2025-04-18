import React, { useEffect } from "react";
import { formBackground } from "../assets/images";
import { Link } from "react-router-dom";
import { FaScissors, FaUserDoctor } from "react-icons/fa6";
import { FaBabyCarriage, FaChalkboardTeacher } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { LuFacebook, LuInstagram } from "react-icons/lu";

export default function Contact() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    
      <section className="container relative flex flex-col mx-auto lg:mx-0 bg-light">
        <div className="w-full h-[60vh] mx-auto">
          <img
            className="object-cover w-full h-full"
            src={formBackground}
            alt="Contact Us"
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-primary text-center">
          Contact Us!
        </h2>
        <div>
          <aside className="flex flex-col-reverse lg:flex-row w-full items-top rounded-lg lg:rounded-none lg:h-auto gap-5 lg:gap-0">
            {/* Form Section */}
            <div className="rounded-md p-3 bg-backdrop shad lg:w-fit items-center mx-auto justify-center font-bubblegum">
              <h5 className="font-semibold text-center text-secondary text-lg md:text-2xl">
                Enter your information here to send Us <br></br> a direct
                message.
              </h5>
              <form className=" flex flex-col w-full gap-6 px-10 pt-10 pb-7">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className=" border-2 border-orange-300 inset-0 text-base rounded px-2 py-3 focus:border-orange-400  focus:border-2 hover:border-orange-400 font-cabin"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Email Address"
                  className=" border-2 border-orange-300 inset-0 text-base rounded px-2 py-3 focus:border-orange-400  focus:border-2 hover:border-orange-400 font-cabin"
                />
                <textarea
                  type="text"
                  required
                  placeholder="Your Message"
                  className="border-orange-300 border-2 inset-0 text-base rounded
                  px-2 py-3 h-36 focus:border-orange-400 focus:border-2
                  hover:border-orange-400 font-cabin"
                ></textarea>
                <button
                  type="submit"
                  className="text-white md:text-3xl rounded py-3 md:p-5 bg-secondary hover:shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </aside>
          <div className="flex flex-col items-center py-5 font-poppins gap-10">
            <h3 className=" font-bold px-5 text-2xl md:text-3xl text-tertiary">
              Contact us through our social media handles
            </h3>
            <div className=" gap-3 flex flex-row item-center font-bubblegum">
              <a
                href="https://www.instagram.com/adam_levine0nline?igsh=MXkwNDNoM3YyZmVqOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:shadow-md md:w-36 justify-center flex items-center gap-2 text-white text-center p-2 rounded-md"
              >
                <LuInstagram />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@safe.herbs?_t=ZM-8vaLVruk2cQ&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#69C9D0] to-[#EE1D52] hover:shadow-md justify-center md:w-36 flex items-center gap-2 text-light text-center p-2 rounded-md"
              >
                <PiTiktokLogo />
                TikTok
              </a>
              <a
                href="https://www.facebook.com/safeherb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877f2] hover:shadow-md justify-center md:w-36 flex items-center gap-2 text-light text-center p-2 rounded-md"
              >
                <LuFacebook />
                Facebook
              </a>
              {/* <a
                href="https://www.instagram.com/adam_levine0nline?igsh=MXkwNDNoM3YyZmVqOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-400 hover:bg-lime-500 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md"
              >
                <FaChalkboardTeacher />A Pet Trainer
              </a> */}
            </div>
            <div className="flex flex-col gap-1 pb-7 text-secondary text-lg md:text-2xl font-bold">
              <h5>If you need any help or have any queries</h5>
              <a
                href="mailto:psychedeliestore@gmail.com"
                className="text-highlight w-fit mx-auto rounded-md md:p-5 hover:text-tertiary"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    
  );
}
