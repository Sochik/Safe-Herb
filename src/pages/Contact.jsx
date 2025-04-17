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
    <main>
      <section
        className="container relative flex flex-col mx-auto lg:mx-0"
        style={{
          backgroundImage: `url(${formBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-6 items-center mx-auto pt-14 p-7 md:gap-6 m-20">
          <div className="flex flex-col lg:pt-6 items-center gap-1 lg:gap-3">
            <h2 className="text-primary font-extrabold text-2xl md:text-5xl font-calligraffitti">
              Contact Us!
            </h2>
          </div>
        </div>
        <div>
          <aside className="flex flex-col-reverse lg:flex-row w-full items-top rounded-lg lg:rounded-none lg:h-auto gap-5 lg:gap-0">
            <div className="w-full rounded-lg lg:rounded-none pb-5 px-2 lg:px-0"></div>
            <div className="rounded-lg lg:rounded-none p-3 shad lg:w-[100%] items-center justify-center font-bubblegum">
              <h5 className="font-semibold text-center text-secondary text-lg md:text-2xl">
                Enter your information here to send a direct message to Safe
                Herb.
              </h5>
              <form className=" flex flex-col w-full lg:w-[65%] gap-6 px-10 pt-10 pb-7">
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
          <div className="flex flex-col items-center py-5 font-bubblegum gap-10">
            <h3 className=" font-extrabold text-2xl md:text-3xl text-tertiary">
              Contact us through our social media handles
            </h3>
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-row item-center">
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
            <div className="flex flex-col gap-5 pb-7">
              <h5 className="text-secondary text-lg md:text-2xl font-bold">
                If you need any help or have any queries
              </h5>
              <a
                href="mailto:psychedeliestore@gmail.com"
                className="text-highlight font-semibold  md:text-xl mx-auto rounded-md py-3 md:p-5 bg-white hover:shadow-md"
              >
                Send an Email <span>psychedeliestore@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
