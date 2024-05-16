import React from "react";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs/Blogs";
import Articles from "./components/Articles/Articles";
import Community from "./components/Community/Community";
import Footer from "./components/Footer";

function CommunityPage() {
  return (
    <div>
      <Navbar showArticlesBlogs/>
      <Blogs />
      {/* <Articles /> */}
    </div>
  );
}

export default CommunityPage;
