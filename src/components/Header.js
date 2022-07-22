import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Currency App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;