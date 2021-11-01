import Link from 'next/link';
import Container from '../components/Container';
import IndexDisclaimer from '../components/IndexDisclaimer';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Index.styled';

export default function Introduction() {
  return (
    <Container>
      <s.HeaderEmoji>👋</s.HeaderEmoji>

      <s.IndexTextBlock>
        <p>Hi! I&apos;m Kasper, a journalist and a programmer.</p>
      </s.IndexTextBlock>

      <s.IndexTextBlock>
        <p>
          This is my hub, my digital garden and workshop. You&apos;ll find some scattered
          notes here, loosely related to my efforts to master the skills of a software
          engineer. These include{' '}
          <Link href="/blog/the-brain-is-a-magpie">
            <a className="internal-link">
              <em>clumsy metaphors</em>
            </a>
          </Link>{' '}
          and anecdotes, code snippets,{' '}
          <Link href="/blog/resources">
            <a className="internal-link">
              <em>link dumps</em>
            </a>
          </Link>
          .
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>
          I switched careers in 2021, mid-pandemic, after nearly a decade in financial
          journalism. Following about a year of determined self-study, I{' '}
          <Link href="/blog/switching-lanes">
            <a className="internal-link">
              <em>crossed over</em>
            </a>
          </Link>{' '}
          to a professional programming role, changing employers and countries in the
          process.
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
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
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>Have a look around, any tools or thoughts you find are yours to keep.</p>
      </s.IndexTextBlock>

      <IndexDisclaimer />
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
