import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function Introduction() {
  return (
    <Container>
      <s.HeaderEmoji>👋</s.HeaderEmoji>

      <s.TextBlock>
        <p>Hi! I&apos;m Kasper Viita, a journalist and a programmer.</p>
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
          I switched careers in 2021, mid-pandemic, after nearly a decade in financial
          journalism. Following 11 months of determined self-study, I{' '}
          <Link href="/blog/crossing-over-to-tech">
            <a className="internal-link">
              <em>crossed over</em>
            </a>
          </Link>{' '}
          to a professional programming role, changing employers and countries in the
          process.
        </p>
      </s.TextBlock>
      <s.TextBlock>
        <p>
          I&apos;ve benefited greatly from a wealth of free resources and open-source
          software, and would like to contribute in turn. If you are new to web
          development or coding in general, I&apos;ve curated a{' '}
          <Link href="/blog/starter-pack">
            <a className="internal-link">
              <em>starter pack</em>
            </a>
          </Link>{' '}
          of assets based on what worked for me. It comes with a few pointers.
        </p>
      </s.TextBlock>

      <s.TextBlock>
        <p>
          For those further along the path, I wrote an overview of the{' '}
          <Link href="/blog/how-i-built-this-site">
            <a className="internal-link">
              <em>technology</em>
            </a>
          </Link>{' '}
          behind this site.
        </p>
      </s.TextBlock>
      <s.TextBlock>
        <p>
          {' '}
          Otherwise, have a look around and let me know if you found something useful!
        </p>
      </s.TextBlock>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
