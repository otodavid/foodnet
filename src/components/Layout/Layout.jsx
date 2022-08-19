import React, { useState } from 'react';
import { Footer, Header, SideNav } from '..';

export const Layout = ({ toggleTheme, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <SideNav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
      />

      <main>{children}</main>

      <Footer />
    </>
  );
};
