import { ExternalLink } from "lucide-react";
import React, { useEffect, useState, useMemo } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const query = `
        {
          user(username: "bobbyy16") {
            publications(first: 1) {
              edges {
                node {
                  posts(first: 6) {
                    edges {
                      node {
                        title
                        brief
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch(
        "https://hashnode-backend.onrender.com/hashnode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();

      if (data.errors) {
        console.error("GraphQL errors:", data.errors);
        throw new Error(data.errors.map((error) => error.message).join(", "));
      }

      const postsArray =
        data?.data?.user?.publications?.edges[0]?.node?.posts?.edges.map(
          (edge) => edge.node
        ) || [];
      setBlogs(postsArray);
    } catch (err) {
      console.error("Error details:", err);
      setError(err.message);
    }
  };

  const memoizedBlogs = useMemo(() => blogs, [blogs]);

  return (
    <div
      id="blogs"
      className="mt-8 opacity-100 transition-opacity duration-500"
    >
      <h1 className="text-2xl font-bold mb-4 transform translate-x-0 opacity-100 transition-all duration-500">
        Latest Blogs:
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memoizedBlogs.map((blog, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform translate-y-0 opacity-100"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
            <p className="text-sm mt-2 line-clamp-3 text-gray-700 darkerText">
              {blog.brief}
            </p>
            <div className="mt-4">
              <a
                href={`https://abhishek-software-engineer.hashnode.dev/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:text-white border-2 hover:darkerText rounded-lg transition-all duration-300 px-4 py-2 font-medium hover:scale-110 active:scale-90"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 opacity-100 transition-opacity duration-500">
        <a
          href="https://abhishek-software-engineer.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-3 text-primary-color hover:text-white border-2 border-primary-color hover:bg-primary-color rounded-lg transition-all duration-300 font-medium hover:scale-110 active:scale-90"
        >
          View All Blogs
          <ExternalLink
            size={20}
            className="group-hover:transform group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </div>
  );
};

export default Blogs;
