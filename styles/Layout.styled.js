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
    color: var(--green);
    text-decoration: none;
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  em {
    color: var(--accent);
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
`;

export const NavEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-basis: 60%;
  @media (max-width: 350px) {
    justify-content: flex-start;
  }
`;

export const BlogPostDisplay = styled.div`
  margin: 20px 0;
  background-color: var(--codeblock);
  font-style: normal;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0.25rem;
  box-decoration-break: clone;
  h4 {
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
  }
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);
  padding: 5px 10px 12px 10px;
  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.45);
  }
`;

export const AboutTextBlock = styled.div`
  margin: 1.4rem 0;
`;

export const IndexTextBlock = styled.div`
  margin: 1.4rem 0;
  a {
    text-decoration: none;
  }
`;

export const SingleBlogTextBlock = styled.div`
  margin: 0 0 1rem 0;
  small {
    font-size: 0.8rem;
    background-color: var(--darkgreen);
    background: url('/static/brush-stroke-banner.svg');
    background-repeat: no-repeat;
    background-size: 100% 110%;
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
  font-size: 1.7rem;
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
