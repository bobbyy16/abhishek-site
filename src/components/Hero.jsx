import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Coffee,
  Trees,
  FileUser,
  Github,
  X,
  ArrowRightCircle,
} from "lucide-react";
import Projects from "./Projects";
// import Blogs from "./Blogs";
import ContactLinks from "./ContactLinks";

const Hero = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      const response = await fetch("https://api.github.com/users/bobbyy16");
      const data = await response.json();
      setUserData(data);
    };
    fetchGithubData();
  }, []);

  if (!userData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-16 md:pl-16 text-gray-500"
      >
        Loading...
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10"
      id="about"
    >
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        {userData.name}
      </motion.h3>
      <motion.h3
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-md font-bold darkerText"
      >
        🌐 Full Stack Web Developer | Crafting seamless digital experiences!
      </motion.h3>
      <br />
      <br />
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* <img
            src={userData.avatar_url}
            alt="Profile Picture"
            className="rounded-full w-40"
          /> */}
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="stats darkerText text-lg"
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Github className="text-primary-color" size={20} />
            <a
              href="https://www.github.com/bobbyy16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline"
            >
              bobbyy16
            </a>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <X className="text-primary-color" size={20} />
            <a
              href="https://x.com/bobsstwt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline"
            >
              bobsstwt
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Linkedin className="text-primary-color" size={20} />
            <a
              href="https://www.linkedin.com/in/bobbyy16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline"
            >
              bobbyy16
            </a>
          </motion.div>
        </motion.div>
      </div>
      <br />
      <br />

      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="leading-relaxed"
      >
        Hi, I'm <span className="font-bold darkerText">Abhishek K</span>, a
        passionate software engineer dedicated to crafting seamless digital
        experiences with code. I specialize in building full-stack applications,
        love exploring innovative solutions using the latest technologies, and
        also take on freelancing projects. Please feel free to contact me for
        more information! -
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="darkerText inline-flex items-center gap-2 px-2"
        >
          <motion.a
            href="https://x.com/bobsstwt"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: 2,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="font-semibold underline text-primary-color hover:text-secondary-color flex items-center gap-1"
          >
            DM
            <ArrowRightCircle className="text-primary-color hover:text-secondary-color" />
          </motion.a>
        </motion.span>
      </motion.h1>
      <br />
      <ContactLinks />
      <br />
      <Projects />
      <br />
      {/* <Blogs /> */}
    </motion.div>
  );
};

export default Hero;
