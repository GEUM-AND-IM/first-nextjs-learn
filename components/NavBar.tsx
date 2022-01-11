import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={`${styles.link} ${styles.nav}`}>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
    </nav>
  );
};

export default NavBar;
