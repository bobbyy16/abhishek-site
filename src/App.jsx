import React from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-auto max-w-7xl"
    >
      <Home />
    </motion.div>
  );
};

export default App;
