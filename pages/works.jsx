import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/Container";
import WorksCards from "../components/WorksCards";

import codingWorks from "../data/works/coding_works.json";

const headerVariants = {
  hidden: {
    opacity: 0,
    rotate: 7,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export default function Works() {
  return (
    <Container
      title="Works / Kasper Viita"
      description="Things written and coded"
    >
      <div>
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible">
          Works
        </motion.h1>
        <div className="mx-0 my-[1.4rem] no-underline">
          A few picks among published code output, baked into news stories.
          Mostly in Finnish:
        </div>
      </div>
      <WorksCards cards={codingWorks} />

      <div className="mx-0 my-[1.4rem] no-underline">
        <blockquote>
          If you&apos;re curious about the implementation of this site, have a
          look at the{" "}
          <Link
            className="underline decoration-dotted"
            href="https://github.com/kasperworks/puutarha"
            target="_blank"
            rel="noopener noreferrer"
          >
            repo
          </Link>
          . The key tools are React, Next.js, MDX, Tailwind CSS and Framer
          Motion. A{" "}
          <Link
            className="underline decoration-dotted"
            href="https://github.com/kasperworks/puutarha/commit/7f40dff34f015d9db8e554a1aeb724a38e7a5e47"
            target="_blank"
            rel="noopener noreferrer"
          >
            migration
          </Link>{" "}
          from Styled Components was completed in March 2023.
        </blockquote>
      </div>

      <div className="mx-0 my-[1.4rem] no-underline">
        Stories written as a reporter can be found{" "}
        <Link
          href="https://muckrack.com/kasper-viita/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>
        .
      </div>
    </Container>
  );
}
