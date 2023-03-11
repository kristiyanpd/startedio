import * as React from 'react';
import styles from './HorizontalGradient.module.css'

function HorizontalGradient({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default HorizontalGradient;
