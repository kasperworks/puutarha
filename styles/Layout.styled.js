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
  padding: 10px;
  width: 65%;
  min-width: 300px;
  .skip-nav {
    color: var(--codeblock);
    float: right;
    font-size: 0.8rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  min-width: 250px;
  margin-bottom: 1.5rem;
  justify-content: flex-end;
  font-size: 1.5rem;
  margin: 1rem 0;
  a {
    color: var(--green);
    text-decoration: none;
    margin: 0 1rem;
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
  }

  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);
  padding: 5px;
`;

export const AboutTextBlock = styled.div`
  font-size: 1.1rem;
  margin: 1.4rem 0;
`;

export const IndexTextBlock = styled.div`
  margin: 1.4rem 0;
  font-size: 1.1rem;
  li {
    list-style-type: square;
    margin: 0.5rem 0;
    &:hover {
      color: var(--green);
    }
  }
  a {
    text-decoration: none;
  }
`;

export const IntroText = styled.div`
  font-size: 1.5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--grey);
  margin-bottom: 1rem;
`;
