import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function Introduction() {
  /*   const postsByDate = posts
    .sort(
      (a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt),
    )
    .slice(0, 3); */

  return (
    <Container>
      <s.HeaderEmoji>👋</s.HeaderEmoji>

      <s.TextBlock>
        <p>
          Hi! I&apos;m{' '}
          <Link href="/about">
            <em>Kasper Viita</em>
          </Link>
          , a journalist and a programmer.
        </p>
      </s.TextBlock>

      <s.TextBlock>
        <p>
          This is my hub, my digital garden. You&apos;ll find some scattered notes here,
          largely about my efforts to master the skills of a software engineer. Learning
          to code, that is.
        </p>
      </s.TextBlock>
      <s.TextBlock>
        <p>
          I made a career switch after nearly a decade in financial journalism. After 11
          months of determined self-study, I took up a professional programming role,
          leveraging my journalism background and hobby projects. If that sounds like a
          fascinating read to you, have a look{' '}
          <Link href="/blog/new-coder-at-35">
            <em>here</em>
          </Link>
          .
        </p>
      </s.TextBlock>
      <s.TextBlock>
        <p>
          I&apos;ve benefited enormously from the wealth of free resources and open-source
          software that helped me land my first programming job, and would like to
          contribute in turn. If you are new to web development or coding in general,
          I&apos;ve written down a few{' '}
          <Link href="/blog/starter-pack">
            <em>pointers</em>
          </Link>{' '}
          that worked for me.
        </p>
      </s.TextBlock>

      <s.TextBlock>
        <p>
          If you&apos;re interested in the technology behind this site, see{' '}
          <Link href="/blog/how-i-built-this-site">
            <em>here</em>
          </Link>
          .
        </p>
      </s.TextBlock>
      <s.TextBlock>
        <p>
          {' '}
          Otherwise, have a look around and let me know if you found something useful!
        </p>
      </s.TextBlock>

      {/*     <h3>Here are three of my recent posts:</h3>
      <s.IndexTextBlock>
        <ul>
          {postsByDate.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <em>{post.frontmatter.title}</em>
              </Link>
            </li>
          ))}
        </ul>
      </s.IndexTextBlock> */}
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
