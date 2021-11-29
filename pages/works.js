import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import * as s from '../styles/Layout.styled';

const headerVariants = {
  hidden: {
    opacity: 0,
    rotate: 7,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
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
          <strong>🚧Under construction🚧</strong>
        </s.TextBlock>
        <s.TextBlock>
          <blockquote>
            If you&apos;re curious about the implementation of this site, have a look at
            the{' '}
            <Link href="https://github.com/kasperworks/puutarha">
              <a target="_blank" rel="noopener noreferrer">
                repo
              </a>
            </Link>
            . The key tools are React, Next.js, MDX, Styled Components and Framer Motion.
          </blockquote>
        </s.TextBlock>
      </div>
    </Container>
  );
}
