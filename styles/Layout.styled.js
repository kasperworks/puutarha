import styled from 'styled-components';

export const SiteBorderStyles = styled.div`
  background-color: #252b35;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23235353' fill-opacity='0.18'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1232px;
  width: 100%;
  margin: 0 auto 2rem auto;
  padding: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.45);
  min-height: 100vh;
  @media (hover: hover) {
    em:hover,
    em > a:hover {
      color: var(--accent);
    }
  }
  @media (hover: none) {
    em:active,
    em > a:active {
      color: var(--accent);
    }
  }
`;

export const CenterSection = styled.div`
  padding: 0 15px;
  width: 100%;
  max-width: 780px;
  .skip-nav {
    color: var(--codeblock);
    float: right;
    font-size: 0.8rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  font-size: 1.4rem;
  align-items: baseline;
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
`;

export const NavSection = styled.div`
  display: flex;
  flex-basis: 50%;
`;

export const NavEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 50%;
  gap: 1.2rem;
  @media (max-width: 370px) {
    justify-content: flex-start;
  }
`;

export const BlogPostDisplay = styled.div`
  border-radius: 0.5rem;
  margin: 15px 0;
  h4 {
    font-size: 1.5rem;
    text-shadow: 2px 6px 6px rgba(0, 0, 0, 0.1), 0px -5px 35px rgba(255, 255, 255, 0.12);
  }
  small {
    color: var(--grey);
  }
  a {
    text-decoration: none;
  }
  @media (hover: hover) {
    &:hover {
      h4 {
        color: var(--accent);
      }
    }
  }
  @media (hover: none) {
    &:active {
      h4 {
        color: var(--accent);
      }
    }
  }
`;

export const TextBlock = styled.div`
  margin: 1.4rem 0;
  em {
    text-decoration: none;
  }
`;

export const SingleBlogTextBlock = styled.div`
  margin: 0 0 20px 0;
  em {
    font-size: 0.8rem;
    cursor: default;
    padding: 3px 17px 1px 10px;
    margin: 3px -17px -1px -10px;
    pointer-events: none;
  }
  div {
    margin-bottom: 10px;
  }
`;

export const MainBlogTextBlock = styled.div`
  p {
    margin: 20px 0;
  }
  a > em {
    text-decoration: none;
  }
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

export const HeaderEmoji = styled.h1`
  filter: sepia(45%) hue-rotate(340deg);
  text-shadow: 1px 1px 3px var(--black);
  cursor: grab;
  width: 20%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: var(--grey);
  margin: 0 1rem 1rem 1rem;
  small {
    display: block;
  }
`;

export const BackUpStairsWrapper = styled.div`
  position: relative;
`;

export const BackUpStairsButton = styled.button`
  position: absolute;
  left: 50%;
  background-color: var(--darkgreen);
  width: 100px;
  height: 50px;
`;
