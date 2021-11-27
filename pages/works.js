import * as React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import * as s from '../styles/Layout.styled';

const headerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Works() {
  return (
    <Container title="Works / Kasper Viita" description="Things written and coded">
      <div>
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible">
          Works
        </motion.h1>
        <s.TextBlock>
          <p>Moi! Tähän tulee duuneja.</p>
        </s.TextBlock>
      </div>
    </Container>
  );
}
