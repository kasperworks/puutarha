import Link from 'next/link';
import * as s from '../styles/Layout.styled';

const BlogPost = ({
  title,
  publishedAt,
  lastUpdated,
  summary,
  slug,
  index,
  amountOfPosts,
}) => {
  const lastPost = index - amountOfPosts === -1;

  return (
    <>
      <s.BlogPostDisplay>
        <Link href={`/blog/${slug}`}>
          <div>
            <h4>{title}</h4>
            <small>
              {publishedAt}
              {lastUpdated ? <span> Updated: {lastUpdated}</span> : null}
            </small>
          </div>
          <p>{summary}</p>
        </Link>
      </s.BlogPostDisplay>
      {lastPost ? null : <hr />}
    </>
  );
};

export default BlogPost;
