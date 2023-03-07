import * as React from 'react';
import Link from 'next/link';
import * as s from '../styles/Layout.styled';
import NavMenuItems from './NavMenuItems';

const MobileNav = () => (
  <s.NavBar className="mobile-nav">
    <div>
      <Link href="/" className="internal-link">
        Kasper Viita
      </Link>
    </div>
    <div>
      <input id="menu-toggle" type="checkbox" />
      <label htmlFor="menu-toggle" id="menu-button-container">
        <div id="menu-button"></div>
      </label>
      <div id="menu">
        <NavMenuItems />
      </div>
    </div>
  </s.NavBar>
);

export default MobileNav;
