import Link from 'next/link';
import * as s from '../styles/Layout.styled';

const BlogPost = ({ title, summary, slug }) => (
  <Link href={`/blog/${slug}`}>
    <a>
      <s.BlogPostDisplay>
        <div>
          <h4>{title}</h4>
        </div>
        <p>{summary}</p>
      </s.BlogPostDisplay>
    </a>
  </Link>
);

export default BlogPost;
