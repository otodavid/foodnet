import React from 'react';
import { Link } from 'react-scroll';

export function NavLink({ displayName, to, closeNav, ...others }) {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={closeNav}
      activeClass='active'
      spy={true}
      {...others}
    >
      {displayName}
    </Link>
  );
}
