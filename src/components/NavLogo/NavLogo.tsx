import * as React from 'react';
import styles from './NavLogo.module.css';
import Logo from '../Logo';

function NavLogo() {
  return (
    <div className={styles.wrapper}>
      <Logo />
    </div>
  );
}

export default NavLogo;
