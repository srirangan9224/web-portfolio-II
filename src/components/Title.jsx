import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

function toggleDisplay(sectionName){
  document.querySelectorAll("section").forEach((section)=>{
    if (section.className === sectionName){
      section.style.display = 'block'
    }
    else{
      section.style.display = 'none'
    }
  })
}

function Title(){
    return(
        <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#about" data-name="about"><h3>Srirangan Sudarshan</h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={()=> {toggleDisplay("about")}}>About</Nav.Link>
            <Nav.Link href="#education"  onClick={()=> {toggleDisplay("education")}}>Education</Nav.Link>
            <Nav.Link href="#projects" onClick={()=> {toggleDisplay("projects")}}>Projects</Nav.Link>
            <Nav.Link href="#certifications" onClick={()=> {toggleDisplay("certifications")}}>Certifications</Nav.Link>
            <Nav.Link href="#contact" onClick={()=> {toggleDisplay("contact")}}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default Title