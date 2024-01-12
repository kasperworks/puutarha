import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";

import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../lib/mdx";

import Container from "../../components/Container";
import Spacer from "../../components/Spacer";
import Collapsible from "../../components/Collapsible";

const dateBlockStyles = `text-sm pointer-events-none cursor-default -ml-2.5 mt-[3px] -mb-px pl-2.5 pr-[17px] pt-[3px] pb-px`;
const mainBlogTextStyles = `[&>p]:my-5 [&>a]:font-bold [&>small]:text-grey [&>small>p]:my-5 [&>h5]:text-grey`;

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: -1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const YTPlayer = ({ url }) => (
  <div className="aspect-video">
    <ReactPlayer light url={url} width="100%" height="100%" />
  </div>
);

const CustomLink = ({ children, href }) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className="internal-link hover:text-accent">
        <em>{children}</em>
      </Link>
    );
  }
  const onPage = href.startsWith("#");

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={href}
      target={onPage ? null : "_blank"}
      rel={onPage ? null : "noopener noreferrer"}
      className="underline decoration-dotted"
    >
      {children}
    </a>
  );
};

/* const MAX_IMAGE_WIDTH = 780;
 */
const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container
      title={`${frontmatter.title} / Kasper Viita`}
      description={frontmatter.summary}
    >
      <div>
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mx-0 mt-[0.9375em] pb-5 font-josefin text-4xl leading-[1.33em] text-[color:var(--accent)]"
        >
          {frontmatter.title}
        </motion.h1>
      </div>

      <div className="pb-2">
        <div className="pb-4">
          <em className={`${dateBlockStyles} mr-3`}>
            Published: {frontmatter.publishedAt}
          </em>
          {frontmatter.lastUpdated && (
            <em className={`${dateBlockStyles} text-green`}>
              Updated: {frontmatter.lastUpdated}
            </em>
          )}
        </div>
        <div className="ml-[-20px]  rounded bg-codeblock p-5 text-2xl shadow-md">
          <p>{frontmatter.summary}</p>
        </div>
      </div>
      <motion.div
        className={mainBlogTextStyles}
        variants={mainVariants}
        initial="hidden"
        animate="visible"
      >
        <Component
          components={{ a: CustomLink, Spacer, YTPlayer, Collapsible }}
        />
      </motion.div>
      <div className="mt-10 flex gap-2.5 text-base">
        Topics:
        {frontmatter.tags &&
          frontmatter.tags.map((item) => (
            <span
              className="rounded bg-codeblock px-2 py-0 shadow-md"
              key={`tag-${item}`}
            >
              {item}
            </span>
          ))}
      </div>
      <div className="mx-0 mb-8 mt-14 flex w-full justify-center rounded bg-codeblock p-3 no-underline shadow-sm">
        <Link className="hover:text-accent" href="/blog">
          More notes
        </Link>
      </div>
    </Container>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;
