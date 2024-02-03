import React, { forwardRef } from 'react';
import styles from './Group.module.css';

interface GroupProps extends React.ComponentPropsWithoutRef<'div'> {
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
}

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  ({ justify = 'flex-start', align = 'flex-start', ...rest }, ref) => {
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
