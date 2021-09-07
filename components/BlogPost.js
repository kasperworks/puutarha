import Link from 'next/link';
import * as s from '../styles/Layout.styled';

const BlogPost = ({ title, publishedAt, summary, slug }) => (
  <s.BlogPostDisplay>
    <Link href={`/blog/${slug}`}>
      <a>
        <div>
          <s.BlogPostHeaderWrapper>
            <h4>{title}</h4>
          </s.BlogPostHeaderWrapper>
          <small>{publishedAt}</small>
        </div>
        <p>{summary}</p>
      </a>
    </Link>
  </s.BlogPostDisplay>
);

export default BlogPost;
