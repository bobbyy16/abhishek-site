import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 w-full darkerText">
      <h2 className="text-xl font-bold text-primary-color cursor-pointer">
        AB
      </h2>
      <div className="flex gap-4 sm:gap-6 md:gap-10">
        <a
          href="#about"
          className="text-secondary-color  hover:text-gray-500 transition-colors duration-200"
        >
          About
        </a>

        <a
          href="#projects"
          className="text-secondary-color hover:text-gray-500 transition-colors duration-200"
        >
          Projects
        </a>

        <a
          href="#blogs"
          className="text-secondary-color  hover:text-gray-500 transition-colors duration-200"
        >
          Blogs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
