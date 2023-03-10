import * as React from 'react';
import styles from './NavBar.module.css';
import NavLogo from '../NavLogo';
import NavHamburger from '../NavHamburger';

function NavBar() {
  return (
    <nav className={styles.wrapper}>
      <NavLogo />
      <NavHamburger />
    </nav>
  );
}

export default NavBar;
