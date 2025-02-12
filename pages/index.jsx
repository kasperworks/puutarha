import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { getAllPosts } from "../lib/mdx";

const headerVariants = {
  hidden: {
    opacity: 0,
    x: -5,
    y: -2,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    x: [-5, 2, -2, 1, -1, 0],
    y: -1,
    rotate: [-2, 2, -2, 1, -1, 0],
    transition: {
      ease: "linear",
    },
  },
  tap: {
    scale: 1.4,
  },
};

export default function Introduction() {
  return (
    <Container>
      <motion.h1
        className="text-shadow w-1/5 cursor-grab font-normal hue-rotate-[340deg] sepia-[45%]"
        variants={headerVariants}
        whileTap="tap"
        initial="hidden"
        animate="visible"
      >
        👋
      </motion.h1>

      <div className="mx-0 my-[1.4rem] no-underline">
        <p>Hi! I&apos;m Kasper, a writer and a programmer.</p>
      </div>

      <div className="mx-0 my-[1.4rem] no-underline">
        <p>
          This is a workshop with an open door. My digital garden. You&apos;ll
          find some scattered notes and links here, some of them are related to
          my efforts to master the skills of a software engineer. Others are
          more general musings about life.
        </p>
      </div>
      <div className="mx-0 my-[1.4rem] no-underline">
        <p>
          Have a look around, any tools or useful thoughts you come across are
          yours to keep.
        </p>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
