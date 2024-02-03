import React, { forwardRef } from 'react';
import { ForwardRefWithStaticComponents } from '../../types/ForwardRefWithStaticComponents.ts';
import { Col } from './Col/Col.tsx';
import styles from './Grid.module.css';

interface GridProps extends React.ComponentPropsWithoutRef<'div'> {}

type GridComponent = ForwardRefWithStaticComponents<
  GridProps,
  { Col: typeof Col }
>;

export const Grid: GridComponent = forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    return <div className={styles.root} {...props} ref={ref} />;
  },
) as any;

Grid.Col = Col;
