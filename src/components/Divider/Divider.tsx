import React, { forwardRef } from 'react';
import styles from './Divider.module.css';

interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    return <div className={styles.root} {...props} ref={ref} />;
  },
);
