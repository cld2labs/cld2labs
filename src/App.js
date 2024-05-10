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

function App() {
  const baseUrl = `https://cloud2labs.com`;
  console.log("baseUrl::",baseUrl)
  console.log("window.location.pathname::",window.location.pathname)
  const Iscommunity = window.location.pathname === "/community" ? true : false
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={baseUrl}>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {
          load ? <Pre load={load} /> :
            <>
              <Navbar showArticlesBlogs={window.location.pathname === "/community"} />
             {!Iscommunity && <Home /> } 
             {!Iscommunity && <Projects /> } 
             {!Iscommunity && <About /> } 
             {!Iscommunity && <Contact /> }  
              <Routes>
                <Route path="/community" element={<CommunityPages />} />
              </Routes>
              <Footer />
            </>
        }
      </div>
    </Router>
  );
}

function CommunityPages() {
  const location = useLocation();
  if (location.pathname === "/community") {
    return (
      <div>
        <Blogs />
        <Articles />
      </div>
    );
  }
  return null;
}

export default App;