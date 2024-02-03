import React, { forwardRef } from 'react';
import styles from './Col.module.css';

interface ColProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  return <div className={styles.root} {...props} ref={ref} />;
});
