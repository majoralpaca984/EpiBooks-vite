import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNav = ({ searchQuery, setSearchQuery }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
          </Nav>

          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Cerca un libro per titolo!"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
