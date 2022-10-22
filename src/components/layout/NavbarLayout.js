import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";

function NavbarLayout() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav className={styles.links_style}>
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">Sobre</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Contato</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/create-account">Criar conta</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login">Login</Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
