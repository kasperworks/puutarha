import { useState } from 'react';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllPosts } from '../lib/mdx';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  /* const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()),
    ); */

  return (
    <Container title="Blog – Kasper Viita" description="Mietteitä siitä sun tästä">
      <div>
        <h1>Blog</h1>
        <p>{`Tänne tulee kirjoituksia, tähän mennessä ${posts.length} kappaletta.`}</p>
        {/* <div>
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
          />
        </div> */}
        {!searchValue && (
          <>
            <h2>Kovimmat hitit</h2>
            <BlogPost
              title="Kaikki koodista"
              summary="Tsiigaa näitä highlighteja"
              slug="code-post"
            />
            <BlogPost title="Eka posti" summary="Ensimmäinen postaus" slug="first-post" />
            <BlogPost title="Toka posti" summary="Tsekkaapa tää!" slug="second-post" />
          </>
        )}
        {/* <h3>All Posts</h3>
        {!filteredBlogPosts.length && <p>No posts found.</p>}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))} */}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts('blog');

  return { props: { posts } };
}
