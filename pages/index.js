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
          This is my hub, my digital garden. You&apos;ll find some scattered notes here,
          largely about my efforts to master the skills of a software engineer. Learning
          to code, that is.
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>
          The purpose of this site is to share some stuff I&apos;ve picked up and ease the
          learning curve for others in a similar situation. If you&apos;re brand new to
          web development, you&apos;ll find a collection of resources and starting advice
          <em>
            <Link href="/blog/starter-pack">here.</Link>
          </em>
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>
          If you&apos;d like to read about the technology behind this site, see{' '}
          <em>
            <Link href="/blog/how-i-built-this-site">here.</Link>
          </em>
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>
          I made a start to my newest career path at 35 years old, with very limited
          knowledge of programming. I succeeded in getting employed in a professional
          programming role in 11 months, leveraging my journalist background and hobby
          projects. If that sounds like a fascinating read to you, have a look{' '}
          <em>
            <Link href="/blog/new-coder-at-35">here.</Link>
          </em>
        </p>
      </s.IndexTextBlock>
      <h3>Here are three of the most recent posts</h3>
      <s.IndexTextBlock>
        <ul>
          {postsByDate.map((post) => (
            <li key={post.slug}>
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
