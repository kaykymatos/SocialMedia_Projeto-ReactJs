import styles from './css/Navbar.module.css'
function Navbar({links}) {
  return (
    <nav className={styles.navbar_style}>      
        {links}    
    </nav>
  );
}

export default Navbar;
