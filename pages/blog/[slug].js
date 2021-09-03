import React from 'react';
import Link from 'next/link';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../lib/mdx';
import Container from '../../components/Container';

const CustomLink = ({ as, href, ...otherProps }) => (
  <Link as={as} href={href}>
    <a {...otherProps} />
  </Link>
);

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Container>
      <h1>{frontmatter.title}</h1>
      <Component components={{ a: CustomLink }} />
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
