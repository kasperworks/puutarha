import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllPosts } from '../lib/mdx';
import * as s from '../styles/Layout.styled';

export default function Blog({ posts }) {
  const postsByDate = posts.sort(
    (a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt),
  );
  /* const [searchValue, setSearchValue] = useState(''); */
  /* const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()),
    ); */
  return (
    <Container title="Blog / Kasper Viita" description="Assorted notes">
      <div>
        <h1>Notes</h1>
        <s.TextBlock>
          <p>{`I've written ${posts.length} public notes thus far, you'll find them all here.`}</p>
        </s.TextBlock>
        {/* <div>
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
          />
        </div> */}
        <s.TextBlock>
          {postsByDate.map((item) => {
            const { title, publishedAt, summary } = item.frontmatter;
            const { slug } = item;
            return (
              <BlogPost
                title={title}
                publishedAt={publishedAt}
                summary={summary}
                slug={slug}
                key={slug}
              />
            );
          })}
        </s.TextBlock>
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
