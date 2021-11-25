import * as React from 'react';
import NextLink from 'next/link';
import * as s from '../styles/Layout.styled';
import BurgerMenu from './BurgerMenu';

const MobileNav = () => (
  <s.NavBar>
    <div>
      <NextLink href="/">
        <a className="internal-link">Kasper Viita</a>
      </NextLink>
    </div>
    <BurgerMenu />
  </s.NavBar>
);

export default MobileNav;
