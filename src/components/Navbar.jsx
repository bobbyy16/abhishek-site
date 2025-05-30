import React from "react";
import { ArrowRightCircle } from "lucide-react"; // Ensure this is imported

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50 flex justify-between items-center py-4 px-6 darkerText transition-all duration-500 shadow-md">
      <h2 className="text-xl font-bold text-primary-color cursor-pointer hover:scale-110 transition-transform duration-200">
        AB
      </h2>
      <div className="flex gap-4 sm:gap-6 md:gap-10 items-center">
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
          className="font-semibold  bg-[--bg-color] px-3 py-1 rounded-md shadow-md hover:shadow-lg underline flex items-center gap-2 animate-pulse transition-all duration-300"
        >
          DM
          <ArrowRightCircle className="text-primary-color animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
