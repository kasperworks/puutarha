# Puutarha

This is my personal site, [kasper.works](https://kasper.works).

## Tooling

Built with Next.js, Styled Components, Framer Motion and a few other libraries. All blog posts are in MDX form, which allows using React components inside Markdown files.

## Structure of blog

The individual posts come from `data/blog/` directory, where only `.mdx` files are collected for static site generation. The metadata of each post is contained in the front matter that precedes the actual text. This metadata is used by `pages/blog` component in an overview, while the complete contents of an individual post are laid out for display by `pages/blog/[slug]`.

## Hosting

The site is hosted on Vercel, DNS handled by Cloudflare.

## Disclaimer

This is my first real project on Next.js, thus it's almost certainly not a showcase of best practices. However, it is functional and it looks good. Most importantly, it offers me a platform to write on.
