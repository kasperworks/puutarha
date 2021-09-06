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
  justify-content: space-between;
  align-items: baseline;
  a {
    color: var(--green);
    text-decoration: none;
    margin: 0 1rem 0 0;
    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  em {
    color: var(--accent);
    font-size: 1.05rem;

    font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    @media (max-width: 370px) {
      font-size: 0.9rem;
      margin-right: 5px;
    }
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-basis: 50%;
`;

export const NavEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
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
  font-size: 1rem;
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

export const SingleBlogTextBlock = styled.div`
  margin: 0 0 1rem 0;
  em {
    font-size: 0.8rem;
  }
`;

export const SingleBlogTextHeaderBlock = styled.div`
  background-color: var(--codeblock);
  margin-bottom: 50px;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  font-size: 1.1rem;
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
