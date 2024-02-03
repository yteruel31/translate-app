import { forwardRef } from 'react';
import styles from './Card.module.css';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return <div className={styles.root} {...props} ref={ref} />;
});
