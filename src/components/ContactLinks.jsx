import React from "react";
import { User, Mail, Coffee, TreePine } from "lucide-react";

const ContactLinks = () => {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-start justify-start gap-4 darkerText">
      {/* Resume Link */}
      <a
        href="https://drive.google.com/file/d/1M_dHjWcldFukt1UEqq_vQEti0aK8Nebs/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group underline flex items-center gap-2 hover:text-primary-color transform hover:-translate-y-1 transition-all duration-300 ease-out underline-offset-4 hover:underline-offset-8"
      >
        <User
          size={20}
          className="transform group-hover:scale-110 transition-transform duration-300 ease-out"
        />
        <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
          Resume
        </span>
      </a>

      {/* Divider */}
      <span className="text-gray-400 hidden sm:inline opacity-50 transition-opacity duration-300">
        |
      </span>

      {/* Email Link */}
      <div className="group flex items-center gap-2">
        <Mail
          className="text-primary-color transform group-hover:scale-110 transition-transform duration-300 ease-out"
          size={20}
        />
        <a
          href="mailto:abhishekkumara1620@mail.com"
          className="underline hover:text-primary-color transform hover:-translate-y-1 transition-all duration-300 ease-out underline-offset-4 hover:underline-offset-8"
        >
          <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
            Email me
          </span>
        </a>
      </div>

      {/* Divider */}
      <span className="text-gray-400 hidden sm:inline opacity-50 transition-opacity duration-300">
        |
      </span>

      {/* Buy Me a Coffee Link */}
      <a
        href="https://www.buymeacoffee.com/bobbyy16"
        target="_blank"
        rel="noopener noreferrer"
        className="group underline flex items-center gap-2 hover:text-primary-color transform hover:-translate-y-1 transition-all duration-300 ease-out underline-offset-4 hover:underline-offset-8"
      >
        <Coffee
          size={20}
          className="transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out"
        />
        <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
          Buy Me a Coffee
        </span>
      </a>

      {/* Divider */}
      <span className="text-gray-400 hidden sm:inline opacity-50 transition-opacity duration-300">
        |
      </span>

      {/* Linktree Link */}
      <a
        href="https://linktr.ee/bobbyy16"
        target="_blank"
        rel="noopener noreferrer"
        className="group underline flex items-center gap-2 hover:text-primary-color transform hover:-translate-y-1 transition-all duration-300 ease-out underline-offset-4 hover:underline-offset-8"
      >
        <TreePine
          size={20}
          className="transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 ease-out"
        />
        <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
          Linktree
        </span>
      </a>
    </div>
  );
};

export default ContactLinks;
