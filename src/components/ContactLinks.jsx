import React from "react";
import { motion } from "framer-motion";
import { FileUser, Mail, Coffee, Trees } from "lucide-react";

const ContactLinks = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="mt-4 flex flex-col sm:flex-row items-start justify-start gap-4 darkerText"
    >
      {/* Resume Link */}
      <motion.a
        href="https://drive.google.com/file/d/1e2dLHAnjE2bcymV048x7QIUW8KIbFaAi/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="underline flex items-center gap-2 hover:text-primary-color transition-all duration-300 underline-offset-4"
      >
        <FileUser size={20} />
        Resume
      </motion.a>

      {/* Divider */}
      <span className="text-gray-400 hidden sm:inline">|</span>

      {/* Email Link */}
      <div className="flex items-center gap-2">
        <Mail className="text-primary-color" size={20} />
        <motion.a
          href="mailto:bobbyyyyy16@mail.com"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          className="underline hover:text-primary-color transition-all duration-300 underline-offset-4"
        >
          Email me
        </motion.a>
      </div>

      {/* Divider */}
      <span className="text-gray-400 hidden sm:inline">|</span>

      {/* Buy Me a Coffee Link */}
      <motion.a
        href="https://www.buymeacoffee.com/bobbyy16"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className="underline flex items-center gap-2 hover:text-primary-color transition-all duration-300 underline-offset-4"
      >
        <Coffee size={20} />
        Buy Me a Coffee
      </motion.a>

      {/* Divider */}
      <span className="text-gray-400 hidden sm:inline">|</span>

      {/* Linktree Link */}
      <motion.a
        href="https://linktr.ee/bobbyy16"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        className=" underline flex items-center gap-2 hover:text-primary-color transition-all duration-300 underline-offset-4"
      >
        <Trees size={20} />
        Linktree
      </motion.a>
    </motion.div>
  );
};

export default ContactLinks;
