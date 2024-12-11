import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-4 px-6 darkerText"
    >
      <motion.h2
        whileHover={{ scale: 1.1 }}
        className="text-xl font-bold text-primary-color cursor-pointer"
      >
        AB
      </motion.h2>
      <div className="flex gap-4 sm:gap-6 md:gap-10">
        {["About", "Projects", "Blogs"].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="text-secondary-color hover:text-gray-500 transition-colors duration-200"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
