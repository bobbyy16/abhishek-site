import React, { useEffect, useState } from "react";
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
      <div className="mt-16 md:pl-16 text-gray-500 animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-10 animate-fade-in" id="about">
      <h1 className="text-3xl font-bold transform translate-y-0 opacity-100 transition-all duration-500">
        {userData.name}
      </h1>
      <h3 className="text-md font-bold darkerText transform translate-y-0 opacity-100 transition-all duration-500 delay-200">
        🌐 Full Stack Web Developer | Crafting seamless digital experiences!
      </h3>
      <br />
      <br />
      <div className="flex items-center gap-4">
        <div className="transform scale-100 transition-transform duration-300">
          {/* <img
            src={userData.avatar_url}
            alt="Profile Picture"
            className="rounded-full w-40"
          /> */}
        </div>
        <div className="stats darkerText text-lg transform translate-x-0 opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2 transform hover:translate-x-5 opacity-100 transition-all duration-500 delay-200">
            <Github className="text-primary-color" size={20} />
            <a
              href="https://www.github.com/bobbyy16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline transition-colors duration-300"
            >
              bobbyy16
            </a>
          </div>

          <div className="flex items-center gap-2 transform hover:translate-x-5 opacity-100 transition-all duration-500 delay-400">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
            </svg>{" "}
            <a
              href="https://x.com/bobsstwt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline transition-colors duration-300"
            >
              bobsstwt
            </a>
          </div>
          <div className="flex items-center gap-2 transform hover:translate-x-5 opacity-100 transition-all duration-500 delay-600">
            <Linkedin className="text-primary-color" size={20} />
            <a
              href="https://www.linkedin.com/in/bobbyy16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-color underline transition-colors duration-300"
            >
              bobbyy16
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />

      <h1 className="leading-relaxed transform translate-x-0 opacity-100 transition-all duration-500 delay-800">
        Hi, I'm <span className="font-bold darkerText">Abhishek K</span>, a
        passionate software engineer dedicated to crafting seamless digital
        experiences with code. I specialize in building full-stack applications,
        love exploring innovative solutions using the latest technologies, and
        also take on freelancing projects. Please feel free to contact me for
        more information! -
        <span className="darkerText inline-flex items-center gap-2 px-2 transform opacity-100 transition-all duration-500 delay-1000">
          <a
            href="https://x.com/bobsstwt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline text-primary-color hover:text-secondary-color flex items-center gap-1 animate-pulse hover:animate-none  px-2 py-1 rounded-md   shadow-lg hover:shadow-xl transition-all duration-300"
          >
            DM
            <ArrowRightCircle className="text-sm text-primary-color hover:text-secondary-color animate-bounce" />
          </a>
        </span>
      </h1>
      <br />
      <ContactLinks />
      <br />
      <Projects />
      <br />
      {/* <Blogs /> */}
    </div>
  );
};

export default Hero;
