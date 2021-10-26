import * as React from 'react';
import Link from 'next/link';
/* import Image from 'next/image'; */
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '../../lib/mdx';
import Container from '../../components/Container';
import * as s from '../../styles/Slug.styled';

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
        <h1>{frontmatter.title}</h1>
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
      <s.MainBlogTextBlock>
        <Component components={{ a: CustomLink }} />
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
