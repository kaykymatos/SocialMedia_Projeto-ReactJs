import styles from "./css/Footer.module.css";

function Footer({links}) {
  return (
    <footer className={styles.footer_style}>
      {links}
    </footer>
  );
}

export default Footer;
