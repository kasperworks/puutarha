import * as React from 'react';
import Link from 'next/link';
import * as s from '../styles/Layout.styled';
import BurgerMenu from './BurgerMenu';

const MobileNav = () => (
  <s.NavBar>
    <div>
      <Link href="/" className="internal-link">
        Kasper Viita
      </Link>
    </div>
    <BurgerMenu />
  </s.NavBar>
);

export default MobileNav;
