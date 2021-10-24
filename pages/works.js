import * as React from 'react';
import Container from '../components/Container';
import * as s from '../styles/Layout.styled';

export default function Works() {
  return (
    <Container title="Works / Kasper Viita" description="Things written and coded">
      <div>
        <h1>Works</h1>
        <s.TextBlock>
          <p>Moi! Tähän tulee duuneja.</p>
        </s.TextBlock>
      </div>
    </Container>
  );
}
