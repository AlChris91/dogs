import styles from "./Footer.module.css";
import Dogs from "../Assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  );
};

export default Footer;
