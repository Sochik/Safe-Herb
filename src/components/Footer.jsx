import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer() {
  const location = useLocation(); // Get the current route

  return (
    <footer className="bg-dark text-highlight pt-20 pb-10">
      {/* Contact Section */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold font-poppins text-center text-white mb-4">
          Contact
        </h3>
        <a
          href="mailto:psychedeliestore@gmail.com"
          className="text-lg font-light text-center text-gray-400 mb-4 hover:text-highlight transition-all"
        >
          psychedeliestore@gmail.com
        </a>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <ul className="flex flex-col gap-4 text-center text-gray-400 mb-4">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/Shop" },
            { name: "About Us", path: "/About" },
            { name: "Terms & Conditions", path: "/terms" },
            { name: "Contact Us", path: "/Contact" },
            { name: "FAQ", path: "/FAQ" },
          ].map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-lg font-light transition-all ${
                  location.pathname === link.path
                    ? "text-highlight font-bold"
                    : "hover:text-highlight"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright Section */}
      <small className="pt-5 border-t border-light opacity-50 justify-center flex text-xs">
        Copyright &copy; {new Date().getFullYear()} Safe Herb. All rights
        reserved.
      </small>

      {/* Social Media Links */}
      <div className="flex items-center justify-center mt-4">
        <a
          href="https://www.instagram.com/adam_levine0nline?igsh=MXkwNDNoM3YyZmVqOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-highlight hover:text-white mx-2 text-2xl transition-all"
          aria-label="Instagram"
        >
          <LuInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@safe.herbs?_t=ZM-8vaLVruk2cQ&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-highlight hover:text-white mx-2 text-2xl transition-all"
          aria-label="TikTok"
        >
          <PiTiktokLogo />
        </a>
        <a
          href="https://www.facebook.com/safeherb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-highlight hover:text-white mx-2 text-2xl transition-all"
          aria-label="Facebook"
        >
          <LuFacebook />
        </a>
      </div>
    </footer>
  );
}
