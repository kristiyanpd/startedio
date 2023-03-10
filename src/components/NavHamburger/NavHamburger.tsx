import * as React from 'react';
import styles from './NavHamburger.module.css';

function NavHamburger() {
  const [expanded, setExpanded] = React.useState(false);

  function handleClick() {
    setExpanded((currentExpanded) => !currentExpanded);
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        aria-controls="primary-navigation"
        aria-expanded={expanded}
        onClick={handleClick}
      >
        <svg
          stroke="var(--text-color)"
          fill="none"
          className={styles.hamburger}
          viewBox="-10 -10 120 120"
          width="3rem"
        >
          <path
            className={styles.line}
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default NavHamburger;
