import * as React from 'react';
import Link from 'next/link';
import * as s from '../styles/Layout.styled';
import NavMenuItems from './NavMenuItems';

const DesktopNav = () => (
  <s.NavBar className="desktop-nav">
    <div>
      <Link href="/" className="internal-link">
        Kasper Viita
      </Link>
    </div>
    <div>
      <NavMenuItems />
    </div>
  </s.NavBar>
);

export default DesktopNav;
