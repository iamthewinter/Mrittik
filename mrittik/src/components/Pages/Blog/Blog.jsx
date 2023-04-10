import React from "react";
import "../Blog/Blog.scss";
import BlogHeading from "./BlogHeading/BlogHeading";
import OurBlogs from "./OurBlogs/OurBlogs";

const Blog = () => {
  return (
    <div className="blog_main">
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
    </div>
  );
};

export default Blog;
