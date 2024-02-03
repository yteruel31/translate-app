import React, { forwardRef } from 'react';
import { Icon } from '../Icon/Icon.tsx';
import { IconKey } from '../Icon/Icon.types.ts';
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
  leftIcon?: IconKey;
  rightIcon?: IconKey;
  size?: 'small' | 'medium';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leftIcon,
      rightIcon,
      size = 'medium',
      variant = 'primary',
      ...rest
    },
    ref,
  ) => {
    const _variant = size && variant ? `${size}-${variant}` : size || variant;

    return (
      <button className={styles[_variant]} {...rest} ref={ref}>
        <span className={styles.inner}>
          {leftIcon && <Icon src={leftIcon} />}
          <span className={styles.label}>{children}</span>
          {rightIcon && <Icon src={rightIcon} />}
        </span>
      </button>
    );
  },
);
