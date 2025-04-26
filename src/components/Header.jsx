import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { logo } from "../assets/images";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered, FaRegUser } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { allItems } from "../data/shopData"; // Import the allItems array

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const cart = useSelector((state) => state.cart); // Get cart state from Redux

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

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filteredItems = allItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      navigate("/search", { state: { results: filteredItems } }); // Navigate to SearchResults page
    } else {
      console.log("Please enter a search query.");
    }
  };

  return (
    <div
      className="w-full bg-inherit fixed z-20 top-0 left-0"
      data-aos="fade-down"
    >
      <nav className="container flex items-center justify-between px-5 md:px-10 bg-backdrop backdrop-blur-sm shadow-lg">
        {/* Logo Section */}
        <Link to="/" className="flex items-center" data-aos="fade-left">
          <img
            src={logo}
            alt="Safe Herb"
            className="w-14 h-14 md:w-16 md:h-16 object-cover"
          />
        </Link>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } transition-transform z-50 duration-500 ease-in-out absolute top-16 left-0 w-fit text-secondary font-bold bg-opacity-95 md:static md:bg-inherit md:flex md:flex-row md:items-center md:space-x-6 md:justify-between`}
        >
          <div className="flex flex-col bg-highlight  bg-opacity-85 md:bg-inherit items-start gap-1 w-fit md:justify-center md:flex-row md:items-center md:gap-7">
            {[
              { name: "Home", to: "/" },
              { name: "Shop", to: "/Shop" },
              { name: "About", to: "/About" },
              { name: "Services", to: "/Services" },
              { name: "Contact Us", to: "/Contact" },
              { name: "FAQ", to: "/FAQ" },
            ].map((link) => (
              <li
                key={link.to}
                className={`cursor-pointer px-5 py-2 md:px-0 transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-primary font-extrabold"
                    : "hover:text-primary transform hover:scale-105"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </div>
        </ul>
        {/* Icons Section */}
        <div className="flex w-max gap-2 md:gap-4 items-center mt-4 md:mt-0 relative">
          {/* Search Icon */}
          <button
            className="h-8 w-8 z-20 text-primary hover:text-dark cursor-pointer flex justify-center items-center"
            aria-label="Search"
            onClick={() => {
              if (isSearchOpen) {
                handleSearch(); // Execute the search query
              }
              setIsSearchOpen(!isSearchOpen); // Toggle search bar visibility
            }}
          >
            <IoSearch />
          </button>
          {/* Search Bar */}
          {isSearchOpen && (
            <div className="absolute z-10 right-20 top-5 md:-top-2 mx-2 my-2 flex items-center rounded-md">
              <input
                type="text"
                className="w-48 p-1 text-sm rounded-md placeholder:text-primary focus:outline-none shadow-md focus:ring-2 focus:ring-highlight focus:rounded-md bg-highlight"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          )}
          <Link
            to="/register"
            className="h-8 w-8 text-primary hover:text-dark cursor-pointer flex justify-center items-center"
            aria-label="Account"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaRegUser />
          </Link>
          <Link
            to="/cart"
            className="h-8 w-8 text-primary hover:text-dark cursor-pointer flex justify-center items-center text-lg relative"
            aria-label="Cart"
          >
            <HiOutlineShoppingCart />
            <div className="absolute h-4 w-4 grid place-items-center text-white bg-highlight rounded-full -top-0.5 -right-0.5 text-xs">
              {cart.length} {/* Dynamically display cart count */}
            </div>
          </Link>
          {/* Hamburger Menu Button */}
          <button
            className="block md:hidden ml-3 w-6 text-primary text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            data-aos="fade-left"
          >
            {isMenuOpen ? <FaTimes /> : <FaBarsStaggered />}
          </button>
        </div>
      </nav>
    </div>
  );
}
