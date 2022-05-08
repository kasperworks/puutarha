import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import WorksCards from '../components/WorksCards';
import * as s from '../styles/Layout.styled';

import codingWorks from '../data/works/coding_works.json';

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
        <s.TextBlock>
          A few picks among published code output, baked into news stories. Mostly in
          Finnish:
        </s.TextBlock>
      </div>
      <WorksCards cards={codingWorks} />
      <s.TextBlock>
        Stories written as a reporter can be found{' '}
        <Link href="https://muckrack.com/kasper-viita/portfolio">
          <a target="_blank" rel="noopener noreferrer">
            here
          </a>
        </Link>
        .
      </s.TextBlock>
    </Container>
  );
}
