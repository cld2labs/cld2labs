// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import {
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { MdContactPhone } from "react-icons/md";
// import { RiCommunityLine } from "react-icons/ri";

// function NavBar({ showArticlesBlogs }) {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);
//   const baseUrl = `https://cld2labs.github.io/cloud2labs`

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//       style={{ height: "10%" }}
//     >
//       <Container>
//         <Navbar.Brand href="#home" className="logo">
//           <img src={`${baseUrl}/Assets/icon.png`} alt="brand" className="logo-img" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             {!showArticlesBlogs && (
//               <>
//                 <Nav.Item>
//                   <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
//                     <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link
//                     href="#about"
//                     onClick={() => updateExpanded(false)}
//                   >
//                     <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link
//                     href="#projects"
//                     onClick={() => updateExpanded(false)}
//                   >
//                     <AiOutlineFundProjectionScreen
//                       style={{ marginBottom: "2px" }}
//                     />{" "}
//                     Projects
//                   </Nav.Link>
//                 </Nav.Item>
//               </>
//             )}
//             {showArticlesBlogs && (
//               <>
//                 <Nav.Item>
//                   <Nav.Link href="#blogs" onClick={() => updateExpanded(false)}>
//                     <RiCommunityLine style={{ marginBottom: "2px" }} /> Blogs
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link href="#articles" onClick={() => updateExpanded(false)}>
//                     <RiCommunityLine style={{ marginBottom: "2px" }} /> Articles
//                   </Nav.Link>
//                 </Nav.Item>
//               </>
//             )}
//             {!showArticlesBlogs && (
//               <>

//                 <Nav.Item>
//                   <Nav.Link
//                     href="/community"
//                     onClick={() => updateExpanded(false)}
//                     target="_blank"
//                   >
//                     <RiCommunityLine style={{ marginBottom: "2px" }} /> Community
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link
//                     href="#contact"
//                     onClick={() => updateExpanded(false)}
//                   >
//                     <MdContactPhone style={{ marginBottom: "2px" }} /> Contact
//                   </Nav.Link>
//                 </Nav.Item>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { RiCommunityLine } from "react-icons/ri";

function NavBar({ showArticlesBlogs }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const baseUrl = `https://cld2labs.github.io/cloud2labs`;

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ height: "10%" }}
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img
            src={`${baseUrl}/Assets/icon.png`}
            alt="brand"
            className="logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {showArticlesBlogs ? (
              <>
                <Nav.Item>
                  <Nav.Link href="#blogs" onClick={() => updateExpanded(false)}>
                    <RiCommunityLine style={{ marginBottom: "2px" }} /> Blogs
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#articles"
                    onClick={() => updateExpanded(false)}
                  >
                    <RiCommunityLine style={{ marginBottom: "2px" }} /> Articles
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link href="#home" onClick={() => updateExpanded(false)}>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about" onClick={() => updateExpanded(false)}>
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#projects"
                    onClick={() => updateExpanded(false)}
                  >
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="/community"
                    onClick={() => updateExpanded(false)}
                    target="_blank"
                  >
                    Community
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#contact"
                    onClick={() => updateExpanded(false)}
                  >
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
