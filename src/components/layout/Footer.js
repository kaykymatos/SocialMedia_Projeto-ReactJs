import styles from "./css/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark container-fluid text-center">
      <div className="row">
        <div className=" col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6">
          <ul className={styles.footer_list}>
            <li>
              <h5 className="text-white text-center pb-1">MENU</h5>
            </li>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
