import { Link } from "react-router-dom";
import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer_style}>
      <ul className={styles.footerlist_style}>
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
    </footer>
  );
}

export default Footer;
