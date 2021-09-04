import styled from 'styled-components';

export const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 1rem auto 1rem auto;
  padding: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  min-height: 100vh;
`;

export const CenterSection = styled.div`
  padding: 10px;
  width: 90%;
  min-width: 300px;
`;

export const NavBar = styled.div`
  display: flex;
  width: 40%;
  min-width: 250px;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  a {
    color: var(--green);
    &:hover {
      color: var(--brightgreen);
    }
  }
`;

export const BlogPostDisplay = styled.div`
  margin: 20px 0;
`;
