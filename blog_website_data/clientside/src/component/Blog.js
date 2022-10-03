import React from "react";
import Nav from "./Nav";
import BlogView from "./BlogView";
function Blog() {
  return (
    <>
      <Nav />
      <div className="container">
        <BlogView />
      </div>
    </>
  );
}

export default Blog;
