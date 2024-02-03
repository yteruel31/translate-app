import React from 'react';
import styles from './Main.module.css';
import hero from './assets/hero_img.jpg';

interface MainProps {
  children?: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className={styles.main} style={{ backgroundImage: `url(${hero})` }}>
      {children}
    </main>
  );
};
