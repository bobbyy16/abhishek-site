import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [latestRepos, setLatestRepos] = useState([]);

  useEffect(() => {
    const fetchLatestRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/bobbyy16/repos?sort=created&per_page=6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const repos = await response.json();
        setLatestRepos(repos);
      } catch (error) {
        console.error("Error fetching repositories:", error.message);
      }
    };

    fetchLatestRepos();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="mt-8"
    >
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Latest Projects:
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestRepos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            className="border p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary-color underline"
            >
              {repo.name}
            </a>
            <p className="text-sm mt-2 line-clamp-3 darkerText">
              {repo.description || "No description available"}
            </p>
            <p className="text-sm mt-2">⭐ {repo.stargazers_count} stars</p>
            <p className="text-sm text-gray-400">
              Created on: {new Date(repo.created_at).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-8"
      >
        <motion.a
          href="https://github.com/bobbyy16?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group flex items-center gap-2 px-6 py-3 text-primary-color hover:text-white border-2 border-primary-color hover:bg-primary-color rounded-lg transition-all duration-300 font-medium"
        >
          View All Projects
          <ExternalLink
            size={20}
            className="group-hover:transform group-hover:translate-x-1 transition-transform"
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
