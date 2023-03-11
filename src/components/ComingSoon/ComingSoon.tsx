import * as React from 'react';
import styles from './ComingSoon.module.css';
import HorizontalGradient from '../HorizontalGradient';

function ComingSoon() {
  return (
    <div className={styles.wrapper}>
      <HorizontalGradient>
        <p style={{ fontSize: '5rem' }}>Coming soon!</p>
      </HorizontalGradient>
    </div>
  );
}

export default ComingSoon;
