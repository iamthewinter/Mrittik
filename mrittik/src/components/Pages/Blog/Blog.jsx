import React, { useState, useEffect } from "react";
import "../Blog/Blog.scss";
import BlogHeading from "./BlogHeading/BlogHeading";
import OurBlogs from "./OurBlogs/OurBlogs";
import { motion } from "framer-motion";
import Preloader from "../../Preloader/Preloader";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          className="blog_main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <BlogHeading />
          <OurBlogs />
          <ul className="net_lines justify-content-between">
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
            <li className="animated_line"></li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Blog;
