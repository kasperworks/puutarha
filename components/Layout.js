import * as React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  margin: 0 auto;
`;

const SiteBorderStyles = styled.div`
  max-width: 1200px;
  margin: 12rem auto 4rem auto;
  padding: 5px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
`;

const Layout = ({ children }) => (
  <MainContainer>
    <SiteBorderStyles>{children}</SiteBorderStyles>
  </MainContainer>
);

export default Layout;
