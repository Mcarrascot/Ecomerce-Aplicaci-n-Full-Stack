import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()}Los Pollos Hermanos. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
