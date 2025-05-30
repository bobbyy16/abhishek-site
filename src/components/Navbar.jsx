import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 darkerText opacity-100 transform translate-y-0 transition-all duration-500">
      <h2 className="text-xl font-bold text-primary-color cursor-pointer hover:scale-110 transition-transform duration-200">
        AB
      </h2>
      <div className="flex gap-4 sm:gap-6 md:gap-10">
        {["About", "Projects"].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-secondary-color hover:text-gray-500 transition-all duration-200 hover:scale-110 transform opacity-100"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
