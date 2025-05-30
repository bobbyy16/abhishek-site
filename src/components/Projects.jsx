import React, { useEffect, useState } from "react";
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
    <div
      id="projects"
      className="mt-8 opacity-100 transition-opacity duration-500"
    >
      <h1 className="text-2xl font-bold mb-4 transform translate-x-0 opacity-100 transition-all duration-500">
        Latest Projects:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestRepos.map((repo, index) => (
          <div
            key={repo.id}
            className="border p-4 rounded shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform translate-y-0 opacity-100"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary-color underline hover:text-secondary-color transition-colors duration-200"
            >
              {repo.name}
            </a>
            <p className="text-sm mt-2 line-clamp-3 darkerText">
              {repo.description || "No description available"}
            </p>
            {/* <p className="text-sm mt-2">⭐ {repo.stargazers_count} stars</p> */}
            <p className="text-sm text-gray-400">
              Created on: {new Date(repo.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 opacity-100 transition-opacity duration-500">
        <a
          href="https://github.com/bobbyy16?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 text-primary-color hover:text-white border-2 border-primary-color hover:bg-primary-color rounded-lg transition-all duration-300 font-medium hover:scale-110 active:scale-90"
        >
          View All Projects
          <ExternalLink
            size={20}
            className="group-hover:transform group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
