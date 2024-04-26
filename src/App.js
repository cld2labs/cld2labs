import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Community from "./components/Community/Community";
import Pre from "./components/Pre";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const baseUrl = window?.location?.href
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  console.log(baseUrl)
  
  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      {
        load ? <Pre load={load} /> :
          <>
            <Navbar />
            <Home />
            <Projects />
            <About />
            <Contact />
            <Community />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
