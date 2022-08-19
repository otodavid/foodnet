import React from 'react';
import { Link } from 'react-scroll';

export function NavLink({ displayName, to, toggleMenu, ...others }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={toggleMenu}
      activeClass='active'
      spy={true}
      {...others}
    >
      {displayName}
    </Link>
  );
}
