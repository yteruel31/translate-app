import React, { forwardRef } from 'react';
import styles from './Container.module.css';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return <div className={styles.root} {...props} ref={ref} />;
  },
);
