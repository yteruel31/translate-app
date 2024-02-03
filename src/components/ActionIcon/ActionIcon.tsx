import React, { forwardRef } from 'react';
import { Icon } from '../Icon/Icon.tsx';
import { IconKey } from '../Icon/Icon.types.ts';
import styles from './ActionIcon.module.css';

interface ActionIconProps extends React.ComponentPropsWithoutRef<'button'> {
  icon: IconKey;
}

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ icon, ...rest }, ref) => {
    return (
      <button className={styles.root} {...rest} ref={ref}>
        <Icon src={icon} />
      </button>
    );
  },
);
