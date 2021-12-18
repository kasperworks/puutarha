import Link from 'next/link';
import { motion } from 'framer-motion';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Spacer from '../components/Spacer';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

const headerVariants = {
  hidden: {
    opacity: 0,
    rotate: 7,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
};

export default function Blog({ posts }) {
  const postsByDate = posts.sort(
    (a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt),
  );
  return (
    <Container title="Blog / Kasper Viita" description="Assorted notes">
      <div>
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible">
          Notes
        </motion.h1>
        <s.TextBlock>
          <p>
            {`I've written ${posts.length} public notes thus far. `}
            If you&apos;re looking to read one thing, I would recommend{' '}
            <Link href="/blog/switching-lanes">
              <a className="internal-link">
                <em>this one</em>
              </a>
            </Link>
            .
          </p>
        </s.TextBlock>
        <Spacer />
        <s.TextBlock>
          {postsByDate.map((item, index) => {
            const { title, publishedAt, summary } = item.frontmatter;
            const { slug } = item;
            return (
              <BlogPost
                title={title}
                publishedAt={publishedAt}
                summary={summary}
                slug={slug}
                key={slug}
                index={index}
                amountOfPosts={posts.length}
              />
            );
          })}
        </s.TextBlock>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts('blog');

  return { props: { posts } };
}
