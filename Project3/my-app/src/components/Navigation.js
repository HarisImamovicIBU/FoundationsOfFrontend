import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationStyles.module.css';
function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
