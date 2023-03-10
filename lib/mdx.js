/* eslint-disable no-param-reassign */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

import smartypants from "remark-smartypants";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

export const POSTS_PATH = path.join(process.cwd(), "data/blog");

export const getSourceOfFile = (fileName) =>
  fs.readFileSync(path.join(POSTS_PATH, fileName), "utf8");

export const getAllPosts = () =>
  fs
    .readdirSync(POSTS_PATH)
    // eslint-disable-next-line no-shadow
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug,
      };
    });

export const getSinglePost = async (slug) => {
  const mdxSource = getSourceOfFile(`${slug}.mdx`);

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    cwd: POSTS_PATH,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        remarkGfm,
        smartypants,
      ];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
      ];
      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
};
