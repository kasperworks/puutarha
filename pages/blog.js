import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function Blog({ posts }) {
  const postsByDate = posts.sort(
    (a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt),
  );
  return (
    <Container title="Blog / Kasper Viita" description="Assorted notes">
      <div>
        <h1>Notes</h1>
        <s.TextBlock>
          <p>{`I've written ${posts.length} public notes thus far, you'll find them all here.`}</p>
        </s.TextBlock>
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
