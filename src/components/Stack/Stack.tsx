import React, { forwardRef } from 'react';
import styles from './Stack.module.css';

interface StackProps extends React.ComponentPropsWithoutRef<'div'> {
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ justify = 'flex-start', align = 'stretch', ...rest }, ref) => {
    return (
      <div
        className={styles.root}
        data-justify={justify}
        data-align={align}
        {...rest}
        ref={ref}
      />
    );
  },
);
