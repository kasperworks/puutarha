import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/youtube';

import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../lib/mdx';

import Container from '../../components/Container';
import Spacer from '../../components/Spacer';
import Collapsible from '../../components/Collapsible';
import * as s from '../../styles/Slug.styled';

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: -1,
    transition: {
      type: 'tween',
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
      type: 'tween',
      duration: 0.5,
    },
  },
};

const YTPlayer = ({ url }) => <ReactPlayer light url={url} width="100%" height="auto" />;

const CustomLink = ({ children, href }) => {
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        <a className="internal-link">
          <em>{children}</em>
        </a>
      </Link>
    );
  }
  const onPage = href.startsWith('#');

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={href}
      target={onPage ? null : '_blank'}
      rel={onPage ? null : 'noopener noreferrer'}>
      {children}
    </a>
  );
};

/* const MAX_IMAGE_WIDTH = 780;
 */
const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container title={`${frontmatter.title} / Kasper Viita`}>
      <s.SingleBlogTextBlock>
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible">
          {frontmatter.title}
        </motion.h1>
      </s.SingleBlogTextBlock>

      <s.SingleBlogTextBlock>
        <s.DateBlock>
          <em>Published: {frontmatter.publishedAt}</em>
          {frontmatter.lastUpdated && <em>Updated: {frontmatter.lastUpdated}</em>}
        </s.DateBlock>
        <s.SummaryTextBlock>
          <p>{frontmatter.summary}</p>
        </s.SummaryTextBlock>
      </s.SingleBlogTextBlock>
      <s.MainBlogTextBlock variants={mainVariants} initial="hidden" animate="visible">
        <Component components={{ a: CustomLink, Spacer, YTPlayer, Collapsible }} />
      </s.MainBlogTextBlock>
      <s.Tags>
        Topics:
        {frontmatter.tags &&
          frontmatter.tags.map((item) => (
            <s.SingleTag key={`tag-${item}`}>{item}</s.SingleTag>
          ))}
      </s.Tags>
      <s.PostFooter>
        <Link href="/blog">
          <a>
            <em>More notes</em>
          </a>
        </Link>
      </s.PostFooter>
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
