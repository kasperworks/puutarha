import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkMenu = (state) => {
    setIsMenuOpen(state.isOpen);
    return null;
  };
  return (
    <Menu
      onStateChange={checkMenu}
      right
      noOverlay
      width="100%"
      customBurgerIcon={isMenuOpen ? <Cross /> : <Burger />}
      customCrossIcon={false}>
      <Link href="/blog" className="internal-link">
        Notes
      </Link>
      <Link href="/works" className="internal-link">
        Works
      </Link>
      <Link href="/about" className="internal-link">
        About
      </Link>
    </Menu>
  );
};

const IconContainer = styled.svg`
  width: 36px;
  height: 30px;
`;

const Cross = () => (
  <IconContainer
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </IconContainer>
);

const Burger = () => (
  <IconContainer
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </IconContainer>
);

export default BurgerMenu;
