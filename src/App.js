import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Community from "./components/Community/Community";
import Blogs from "./components/Blogs/Blogs";
import Articles from "./components/Articles/Articles";
import Pre from "./components/Pre";
import CommunityPage from "./CommunityPage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const communityPages = ["community", "blogs", 'articles']
const currentPage = window.location.href.split('#')[1]
let Iscommunity = communityPages.includes(currentPage) ? true : false

function App() {
  const baseUrl = `https://cloud2labs.com`;

  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentPage) {
      const section = document.getElementById(currentPage);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  })

  return (
    // <Router>
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      {
        load ? <Pre load={load} /> :
          <>
            <Navbar showArticlesBlogs={Iscommunity} />
            {!Iscommunity && <Home />}
            {!Iscommunity && <Projects />}
            {!Iscommunity && <About />}
            {!Iscommunity && <Contact />}
            {
              Iscommunity && <CommunityPages />
            }
            {/* <Routes>
                <Route path="/community" element={<CommunityPages />} />
              </Routes> */}
            <Footer />
          </>
      }
    </div>
    // </Router>
  );
}

function CommunityPages() {
  if (Iscommunity) {
    return (
      <div id='community'>
        <Blogs />
        <Articles />
      </div>
    );
  }
  return null;
}

export default App;