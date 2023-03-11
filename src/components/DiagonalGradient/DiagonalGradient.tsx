import * as React from 'react';
import styles from './DiagonalGradient.module.css'

function DiagonalGradient({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default DiagonalGradient;
