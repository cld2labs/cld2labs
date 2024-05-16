import React from 'react';
import { Container } from 'react-bootstrap';

export default function Blogs() {
  const baseUrl = 'https://cloud2labs.com';
  return (
    <Container fluid className="blogs-section" id="blogs">
      <div>
        <h1 className="project-heading">
          {/* <strong className="highlghter"> Blogs</strong> */}
        </h1>
      </div>
      <div >
        <img src={`${baseUrl}/Assets/coming-soon.png`} alt='coming-soon' />
      </div>
    </Container>
  );
}
