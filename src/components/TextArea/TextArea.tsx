import React, { forwardRef } from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...rest }, ref) => {
    return <textarea className={styles.root} {...rest} ref={ref} />;
  },
);
