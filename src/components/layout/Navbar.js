import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse col-12 justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="top-menu navbar-nav mr-auto">
            <li className="mx-3 nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link className="nav-link" to="/about">Sobre</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link className="nav-link"to="/contact">Contato</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link className="nav-link"to="/create-account">Criar conta</Link>
            </li>
            <li className="mx-3 nav-item">
              <Link className="nav-link"to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
