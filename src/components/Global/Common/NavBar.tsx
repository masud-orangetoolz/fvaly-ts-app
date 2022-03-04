import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" href="!#">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" href="!#">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/help" href="!#">
            Help
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" href="!#">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
