import styled from 'styled-components';

export const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 2rem auto;
  padding: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.45);
  min-height: 100vh;
  @media (hover: hover) {
    em:hover {
      color: var(--accent);
    }
  }
  @media (hover: none) {
    em:active {
      color: var(--accent);
    }
  }
`;

export const CenterSection = styled.div`
  padding: 15px;
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
  margin-bottom: 1rem;
  font-size: 1.4rem;
  justify-content: space-between;
  align-items: baseline;
  a {
    text-decoration: none;
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  em {
    color: var(--white);
    padding: 4px 10px;
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    @media (max-width: 370px) {
      font-size: 1.1rem;
    }
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-basis: 40%;
  margin-right: 1rem;
  div {
    background-color: var(--darkgreen);
    font-style: normal;
    background: url('/static/brush-stroke-banner.svg');
    background-repeat: no-repeat;
    background-size: 95% 110%;
    cursor: pointer;
    padding: 22px 0;
  }
`;

export const NavEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-basis: 60%;
  div {
    background-color: var(--darkgreen);
    font-style: normal;
    background: url('/static/brush-stroke-banner.svg');
    background-repeat: no-repeat;
    background-size: 100% 105%;
    cursor: pointer;
    padding: 22px 0;
  }
  @media (max-width: 350px) {
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

export const BlogPostHeaderWrapper = styled.div`
  background: url('/static/brush-stroke-banner.svg');
  background-repeat: no-repeat;
  background-size: 104% 120%;
  width: fit-content;
  cursor: pointer;
  padding: 20px 0 15px 0;
`;

export const AboutTextBlock = styled.div`
  margin: 1.4rem 0;
`;

export const IndexTextBlock = styled.div`
  margin: 1.4rem 0;
`;

export const SingleBlogTextBlock = styled.div`
  margin: 0 0 1rem 0;
  div {
    background-color: var(--darkgreen);
    background: url('/static/brush-stroke-banner.svg');
    background-repeat: no-repeat;
    background-size: 80% 115%;
    padding: 15px 5px;
    width: 180px;
  }
  small {
    font-size: 0.8rem;
  }
`;

export const SingleBlogTextHeaderBlock = styled.div`
  background-color: var(--codeblock);
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
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
