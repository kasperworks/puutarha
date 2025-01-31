import Link from "next/link";

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
      <div className="my-4">
        <Link href={`/blog/${slug}`}>
          <div>
            <h4 className="text-shadow text-2xl font-bold hover:text-accent active:text-accent">
              {title}
            </h4>
            <small className="flex justify-between text-grey">
              {publishedAt}
              {lastUpdated ? <span> Updated: {lastUpdated}</span> : null}
            </small>
          </div>
          <p>{summary}</p>
        </Link>
      </div>
      {lastPost ? null : <hr />}
    </>
  );
};

export default BlogPost;
