import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" fixed="top" className="navbar-fixed">
        <Container>
          <Navbar.Brand href=".">K FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#sci-fi">SCI-FI</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
