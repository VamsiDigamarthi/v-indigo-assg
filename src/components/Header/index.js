import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./index.css";

const Header = () => (
  <Navbar bg="#2e357d" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="all-link-color bold">
        INDIGO LEARND
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto center-items">
          <Nav.Link className="all-link-color" href="#home">
            BUY COURSES
          </Nav.Link>
          <Nav.Link className="all-link-color" href="#link">
            BUY BOOKS
          </Nav.Link>
          <Nav.Link className="all-link-color" href="#link">
            PROGRAMS
          </Nav.Link>
          <Nav.Link className="all-link-color" href="#link">
            FREE RESOURCES
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="light">Log In/ Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
