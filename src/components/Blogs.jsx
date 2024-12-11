import { ExternalLink } from "lucide-react";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      id="blogs"
      className="mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Latest Blogs:
      </motion.h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memoizedBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            className="border p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
            <p className="text-sm mt-2 line-clamp-3 text-gray-700 darkerText">
              {blog.brief}
            </p>
            <div className="mt-4">
              <motion.a
                href={`https://abhishek-software-engineer.hashnode.dev/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="inline-block hover:text-white border-2 hover:darkerText rounded-lg transition-all duration-300 px-4 py-2 font-medium"
              >
                Read More
              </motion.a>
            </div>
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
          href="https://abhishek-software-engineer.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group flex items-center gap-2 px-6 py-3 text-primary-color hover:text-white border-2 border-primary-color hover:bg-primary-color rounded-lg transition-all duration-300 font-medium"
        >
          View All Blogs
          <ExternalLink
            size={20}
            className="group-hover:transform group-hover:translate-x-1 transition-transform"
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Blogs;
