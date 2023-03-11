import * as React from 'react';
import styles from './VerticalGradient.module.css'

function VerticalGradient({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default VerticalGradient;
