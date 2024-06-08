import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="#home">Sebastian Marrera</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link className='navLink' href="#home">Home</Nav.Link>
            <Nav.Link className='navLink' href="#link">React</Nav.Link>
            <Nav.Link className='navLink' href="#link">Unity</Nav.Link>
            <Nav.Link className='navLink' href="#link">3D Modeling</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;