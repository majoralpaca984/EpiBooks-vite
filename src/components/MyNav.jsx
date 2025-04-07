import { useContext, useState } from 'react';
import { Navbar, Nav, Container, Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../modules/context';


const MyNav = ({ searchQuery, setSearchQuery }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <Navbar bg={theme} data-bs-theme={theme} expand="lg">
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
              placeholder ="Cerca un libro per titolo"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
        <Button variant="theme" onClick={() => 
          theme === 'light' ? setTheme ('dark') : setTheme ('light')
        }>🌝 / 🌚</Button>
      </Container>
    </Navbar>
  );
};

export default MyNav;