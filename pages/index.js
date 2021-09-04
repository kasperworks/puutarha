import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function BlogList({ posts }) {
  const postsByDate = posts
    .sort(
      (a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt),
    )
    .slice(0, 3);

  return (
    <Container>
      <h1>Kasper Viita</h1>
      <s.IndexTextBlock>
        <s.IntroText>
          <p>Hi! I&apos;m Kasper, a journalist and a programmer.</p>
        </s.IntroText>
      </s.IndexTextBlock>

      <s.IndexTextBlock>
        <p>
          This is my hub, my digital garden. You&apos;ll find some thoughts and scattered
          notes, largely about my journey to master the skills of a web application
          engineer.
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>
          This site is built with Next.js, MDX and React. If you&apos;d like to read about
          that, see{' '}
          <em>
            <Link href="/blog/how-i-built-this-site">here</Link>
          </em>
          .
        </p>
      </s.IndexTextBlock>
      <h3>Here are three of the most recent posts</h3>
      <s.IndexTextBlock>
        <ul>
          {postsByDate.map((post, index) => (
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
