import * as React from 'react';
import Link from 'next/link';
import * as s from '../styles/Layout.styled';

const DesktopNav = () => (
  <s.NavBar>
    <div>
      <Link href="/" className="internal-link">
        Kasper Viita
      </Link>
    </div>
    <div>
      <Link href="/blog" className="internal-link">
        Notes
      </Link>
      <Link href="/works" className="internal-link">
        Works
      </Link>
      <Link href="/about" className="internal-link">
        About
      </Link>
    </div>
  </s.NavBar>
);

export default DesktopNav;
