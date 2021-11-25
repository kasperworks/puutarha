import * as React from 'react';
import NextLink from 'next/link';
import * as s from '../styles/Layout.styled';

const DesktopNav = () => (
  <s.NavBar>
    <div>
      <NextLink href="/">
        <a className="internal-link">Kasper Viita</a>
      </NextLink>
    </div>
    <div>
      <NextLink href="/blog">
        <a className="internal-link">Notes</a>
      </NextLink>
      <NextLink href="/works">
        <a className="internal-link">Works</a>
      </NextLink>
      <NextLink href="/about">
        <a className="internal-link">About</a>
      </NextLink>
    </div>
  </s.NavBar>
);

export default DesktopNav;
