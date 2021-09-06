import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../lib/mdx';
import Container from '../../components/Container';
import * as s from '../../styles/Layout.styled';

const CustomLink = ({ as, href, ...otherProps }) => (
  <Link as={as} href={href}>
    <a {...otherProps} />
  </Link>
);

const MAX_IMAGE_WIDTH = 780;

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Container>
      <h1>{frontmatter.title}</h1>
      <s.SingleBlogTextBlock>
        <small>Published: {frontmatter.publishedAt}</small>
      </s.SingleBlogTextBlock>

      <s.SingleBlogTextHeaderBlock>
        <p>{frontmatter.summary}</p>
      </s.SingleBlogTextHeaderBlock>
      {frontmatter.image && (
        <Image
          src={frontmatter.image}
          width={MAX_IMAGE_WIDTH}
          height={MAX_IMAGE_WIDTH / 1.5}
        />
      )}
      {frontmatter.imageCredit && (
        <s.ImageCredit>{frontmatter.imageCredit}</s.ImageCredit>
      )}

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
