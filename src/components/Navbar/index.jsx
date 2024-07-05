import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <Navbar expand="lg"  data-bs-theme="dark" fixed='top' className='navbar-custom' style={{
      backgroundColor: '#38000e !important'
    }}>
      <Container>
        <Navbar.Brand href="#home">Los Pollos Hermanos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/restaurane/#home">Home</Nav.Link>
            <Nav.Link href="/restaurane/#about">Nosotros</Nav.Link>
            <Nav.Link href="/restaurane/#contáctanos">Contáctanos</Nav.Link>
            {/* <Nav.Link href="/reservas">Reservas</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;