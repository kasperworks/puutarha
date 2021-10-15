import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Index.styled';

export default function Introduction() {
  return (
    <Container>
      <s.HeaderEmoji>👋</s.HeaderEmoji>

      <s.IndexTextBlock>
        <p>Hi! I&apos;m Kasper Viita, a journalist and a programmer.</p>
      </s.IndexTextBlock>

      <s.IndexTextBlock>
        <p>
          This is my hub, my digital garden and workshop. You&apos;ll find some scattered
          notes here, largely about my efforts to master the skills of a software
          engineer. Learning to code, that is.
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
        <p>
          For those further along the path, I wrote an overview of the{' '}
          <Link href="/blog/how-i-built-this-site">
            <a className="internal-link">
              <em>technology</em>
            </a>
          </Link>{' '}
          behind this site.
        </p>
      </s.IndexTextBlock>
      <s.IndexTextBlock>
        <p>Have a look around, any tools or thoughts you may find are yours to keep.</p>
      </s.IndexTextBlock>
      <s.DisclaimerWrapper>
        <s.IndexTextBlock>
          <s.DisclaimerHeader>A disclaimer</s.DisclaimerHeader>
          <ul>
            <li>Do I contradict myself?</li>
            <li>Very well then I contradict myself</li>
            <li>(I am large, I contain multitudes.) </li>
            <li>
              <small>- Walt Whitman, 1855</small>
            </li>
          </ul>
        </s.IndexTextBlock>
      </s.DisclaimerWrapper>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
