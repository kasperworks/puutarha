# Puutarha

This is my personal site, [kasper.works](https://kasper.works).

## Tooling

The site is built with Next.js, Styled Components, Framer Motion
and a few other libraries. All blog posts are in MDX form,
which allows using React components inside Markdown files.

## Blog structure

The individual posts come from `data/blog/` directory,
where only `.mdx` files are collected for static site generation.
`lib/mdx` handles all the various plugins, which add functionality
such as code-syntax highlighting, which then feed `mdx-bundler`.

Post metadata is contained in the front matter, the very first section
of each post.

This metadata is used by `pages/blog` component in an overview, while the complete contents of
an individual post are laid out for display by `pages/blog/[slug]`.

## Under the hood notes

`@artsy/fresnel` handles media queries, which are trickier than usual due to certain
pages generated at build time. The solution is to create both desktop and mobile views
while the library handles which one to show, namely the full navbar or one with a burger menu.
The key part is located in `lib/media`, which is connected to
`components/Container`, a shared frame around most pages.

## Hosting

The site is hosted on Vercel, DNS handled by Cloudflare.

## Disclaimer

This is my first real project on Next.js, thus it's almost certainly
not a showcase of best practices. However, it is functional and it looks good.
Most importantly, it provides me a platform to write on.
