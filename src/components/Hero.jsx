import React, { useEffect, useState } from "react";
import {
  Linkedin,
  Mail,
  Coffee,
  Trees,
  FileUser,
  Github,
  X,
} from "lucide-react";
import Projects from "./Projects";
import Blogs from "./Blogs";

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
    return <div className="mt-16 md:pl-16 text-gray-500">Loading...</div>;
  }

  return (
    <div className="mt-16 md:pl-16 md:pr-16" id="about">
      <h1 className="text-3xl font-bold">{userData.name}</h1>
      <h3 className="text-md font-bold darkerText">
        🌐 Full Stack Web Developer | Crafting seamless digital experiences!
      </h3>
      <br />
      <br />
      <div className="flex items-center gap-4">
        <div>
          <img
            src={userData.avatar_url}
            alt="Profile Picture"
            className="rounded-full w-40"
          />
        </div>
        <div className="stats darkerText text-lg">
          <div className="flex items-center gap-2">
            <Github className="text-primary-color" size={20} />
            <a
              href="https://www.github.com/bobbyy16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline"
            >
              bobbyy16
            </a>
          </div>

          <div className="flex items-center gap-2">
            <X className="text-primary-color" size={20} />
            <a
              href="https://x.com/bobsstwt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline"
            >
              bobsstwt
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="text-primary-color" size={20} />
            <a
              href="https://www.linkedin.com/in/bobbyy16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline"
            >
              bobbyy16
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1>
        Hi, I'm Abhishek K, a passionate software engineer dedicated to crafting
        seamless digital experiences with code. I specialize in building
        full-stack applications and love exploring innovative solutions using
        the latest technologies. With a keen eye for detail and a commitment to
        clean, efficient code, I transform ideas into robust digital solutions.
        Whether it's creating intuitive user interfaces or architecting scalable
        backend systems, I'm always ready to tackle new challenges. I'm
        currently open to exciting project opportunities and would love to help
        bring your ideas to life. Let's collaborate and build something amazing
        together!
      </h1>
      <br />
      <div className="mt-4 flex flex-col lg:flex-row gap-4 underline darkerText">
        <a
          href="https://drive.google.com/file/d/1o1MxfFGQOay7rpOI6Jk2obaWJCOzL3zn/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary-color"
        >
          <FileUser size={20} />
          Resume
        </a>
        <span className="text-gray-400 hidden lg:inline">|</span>
        <p className="flex items-center gap-2">
          <Mail className="text-primary-color" size={20} />
          <a href="mailto:bobbyyyyy16@mail.com" className="underline">
            Email me
          </a>
        </p>
        <span className="text-gray-400 hidden lg:inline">|</span>
        <a
          href="https://www.buymeacoffee.com/bobbyy16"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary-color"
        >
          <Coffee size={20} />
          Buy Me a Coffee
        </a>
        <span className="text-gray-400 hidden lg:inline">|</span>
        <a
          href="https://linktr.ee/bobbyy16"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary-color"
        >
          <Trees size={20} />
          Linktree
        </a>
      </div>
      <br />
      <br />
      <Projects setUserData={setUserData} />
      <br />
      <br />
      <Blogs />
    </div>
  );
};

export default Hero;
