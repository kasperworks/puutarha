import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  position: relative;
  width: 100%;
  min-width: 250px;
  font-size: 1.4rem;
  align-items: baseline;
  padding-top: 16px;
  a {
    @media (hover: hover) {
      &:hover {
        color: var(--accent);
      }
    }
    @media (hover: none) {
      &:active {
        color: var(--accent);
      }
    }
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  @media (max-width: 370px) {
    font-size: 1.1rem;
  }
  div {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }
  div:nth-child(2) {
    justify-content: flex-end;
  }
  &.mobile-nav {
    @media (min-width: 640px) {
      display: none;
    }
  }
  &.desktop-nav {
    display: none;
    @media (min-width: 640px) {
      display: flex;
    }
  }
`;

export const TextBlock = styled.div`
  margin: 1.4rem 0;
`;

export const ImageCredit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 0 20px 0;
  font-size: 0.75rem;
  color: var(--grey);
`;

export const IntroText = styled.div`
  font-size: 1.6rem;
`;

export const BackUpStairsButton = styled.button`
  position: fixed;
  right: 27px;
  bottom: 17px;
  border: none;
  background-color: var(--darkgreen);
`;

export const WideImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;
