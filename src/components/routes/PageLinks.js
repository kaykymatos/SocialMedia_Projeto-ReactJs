import {Link} from 'react-router-dom';
import styles from './css/PageLinks.module.css'
function PageLinks() {
    return (
        <ul className={styles.list_style}>
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
      );
}

export default PageLinks;