import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.header_style}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/create-account">Criar conta</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
