import Link from 'next/link';
import Container from '../components/Container';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function BlogList({ posts }) {
  return (
    <Container>
      <h1>Hei vaan kaikille</h1>
      <s.IndexTextBlock>
        <p>Tämä on digitaalinen puutarha</p>
      </s.IndexTextBlock>
      <h3>
        Täs on linkkejä testiposteihin <code>mdx-bundler</code>in rakentamana.
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
