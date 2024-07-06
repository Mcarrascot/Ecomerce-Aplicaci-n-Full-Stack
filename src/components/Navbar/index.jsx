import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar expand="lg"  fixed='top' className='navbar-custom'>
      <Container>
        <Navbar.Brand href="/">Los Pollos Hermanos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/checkout">Check Out</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavBar;