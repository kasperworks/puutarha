import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function BlogList({ posts }) {
  return (
    <Container>
      <h1>kasper.works</h1>
      <s.IndexTextBlock>
        <s.IntroText>
          <p>Hi! I&apos;m Kasper, a journalist and a programmer.</p>
        </s.IntroText>
      </s.IndexTextBlock>

      <s.IndexTextBlock>
        <p>
          This is my digital garden. You&apos;ll find some thoughts and scattered notes,
          mostly about coding.
        </p>
      </s.IndexTextBlock>
      <h3>
        Here are a few links, these ones built by <code>mdx-bundler</code>.
      </h3>
      <s.IndexTextBlock>
        <ul>
          {posts.map((post, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </s.IndexTextBlock>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
