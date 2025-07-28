import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Dogs from "../Assets/dogs.svg?react";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs className="logo" />
        </Link>
        <Link className={styles.logo} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
