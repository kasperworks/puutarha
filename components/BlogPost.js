import Link from 'next/link';
import * as s from '../styles/Layout.styled';

const BlogPost = ({ title, publishedAt, summary, slug, index, amountOfPosts }) => {
  const lastPost = index - amountOfPosts === -1;

  return (
    <>
      <s.BlogPostDisplay>
        <Link href={`/blog/${slug}`}>
          <a>
            <div>
              <h4>{title}</h4>
              <small>{publishedAt}</small>
            </div>
            <p>{summary}</p>
          </a>
        </Link>
      </s.BlogPostDisplay>
      {lastPost ? null : <hr />}
    </>
  );
};

export default BlogPost;
