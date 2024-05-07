import React from 'react'
import { Container} from "react-bootstrap";


export default function Blogs() {
  const baseUrl = `https://cld2labs.github.io/cloud2labs`
  return (
    <Container fluid className="blogs-section" id="blogs">
      <h1 className="project-heading">
        <strong className="highlghter"> Blogs</strong>
      </h1>
      <img src={`${baseUrl}/Assets/coming-soon.png`} alt='coming-soon' />

    </Container>
  )
}
