import React, { useState } from "react";
import { ArrowRightCircle, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full z-50 flex justify-between items-center py-4 px-6 darkerText transition-all duration-500 shadow-md relative">
      <h2 className="text-xl font-bold text-primary-color cursor-pointer hover:scale-110 transition-transform duration-200">
        AB
      </h2>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 sm:gap-6 md:gap-10 items-center">
        {["About", "Projects"].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-secondary-color hover:text-gray-500 transition-all duration-200 hover:scale-110 transform"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {item}
          </a>
        ))}
        <a
          href="https://x.com/bobsstwt"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold bg-[--bg-color] text-[--secondary-color] px-5 py-3 rounded-md shadow-md hover:shadow-lg underline flex items-center gap-2 animate-pulse transition-all duration-300"
        >
          DM
          <ArrowRightCircle
            className="text-primary-color animate-bounce"
            size={16}
          />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-secondary-color hover:text-gray-500 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-full left-0 w-full text-black bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">
          {["About", "Projects"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="text-secondary-color hover:text-gray-500 transition-all duration-200 py-2 border-b border-gray-100 last:border-b-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <a
            href="https://x.com/bobsstwt"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="font-semibold bg-[--bg-color] text-[--secondary-color] px-5 py-3 rounded-md shadow-md hover:shadow-lg underline flex items-center justify-center gap-2 transition-all duration-300 mt-2"
          >
            DM
            <ArrowRightCircle className="text-primary-color" size={16} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-[-1] md:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
