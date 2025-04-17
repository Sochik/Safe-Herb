import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo } from "../assets/images";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/Home");
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link
    setIsMenuOpen(false); // Close the menu on small screens
  };

  return (
    <div className="w-full bg-inherit" data-aos="fade-down">
      <nav className="container flex items-center justify-between px-5 md:px-10 bg-secondary">
        {/* Logo Section */}
        <Link
          to="/Home"
          className="flex items-center"
          onClick={() => handleLinkClick("/Home")}
          data-aos="fade-left"
        >
          <img
            src={logo}
            alt="Safe Herb"
            className="w-14 h-14 md:w-16 md:h-16 object-cover"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-primary text-xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          data-aos="fade-left"
        >
          {isMenuOpen ? <FaTimes /> : <FaBarsStaggered />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } transition-transform z-50 duration-500 ease-in-out absolute top-16 left-0 w-full text-light bg-secondary bg-opacity-70 md:static md:bg-inherit md:flex md:flex-row md:items-center md:space-x-6 md:justify-between`}
        >
          <div className="flex flex-col items-start gap-2 w-full md:justify-center md:flex-row md:item-center md:gap-7">
            {[
              { name: "Home", to: "/Home" },
              {name:"Shop", to: "/Shop"},
              { name: "About", to: "/About" },
              { name: "Services", to: "/Services" },
              { name: "Contact Us", to: "/Contact" },
            ].map((link) => (
              <li
                key={link.to}
                className={`cursor-pointer px-5 py-2 md:px-0 transition-all duration-300 ${
                  activeLink === link.to
                    ? "text-dark font-bold"
                    : "hover:text-dark transform hover:scale-105"
                }`}
              >
                <Link to={link.to} onClick={() => handleLinkClick(link.to)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          {/* Icons Section */}
          <div className="flex w-max gap-4 items-center mt-4 md:mt-0 relative">
            {/* Search Icon */}
            <div
              className="h-8 w-8 text-primary hover:text-dark cursor-pointer flex justify-center items-center"
              aria-label="Search"
              onClick={toggleSearch}
            >
              <IoSearch />
            </div>
            {/* Search Bar */}
            {isSearchOpen && (
              <div className="absolute right-20 flex items-center rounded-md shadow-md z-40">
                <input
                  type="text"
                  className="w-48 p-1 text-sm rounded-md placeholder:text-primary focus:outline-none focus:ring-2 focus:ring-highlight focus:rounded-md bg-highlight"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            )}
            <Link
              to="/account"
              className="h-8 w-8 text-primary hover:text-dark cursor-pointer flex justify-center items-center"
              aria-label="Account"
            >
              <FaRegUser />
            </Link>
            <Link
              to="/cart"
              className="h-8 w-8 text-primary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative"
              aria-label="Cart"
            >
              <HiOutlineShoppingCart />
              <div className="absolute h-4 w-4 grid place-items-center text-white bg-secondary rounded-full -top-0.5 -right-0.5 text-xs">
                0 {/* Replace with cart.length */}
              </div>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
