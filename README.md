# Puutarha

This is my personal site, [kasper.works](https://kasper.works).

## Tooling

_This branch is for Astro migration_

The site is built with Next.js, Tailwind CSS, Framer Motion
and a few other libraries. All blog posts are in MDX form,
which allows using React components inside Markdown files.

## Blog structure

The individual posts come from `data/blog/` directory,
where only `.mdx` files are collected for static site generation.
`lib/mdx` handles all the various plugins, which add functionality
such as code-syntax highlighting, which then feed `mdx-bundler`.

Post metadata is contained in the front matter, the very first section
of each post.

This metadata is used by `pages/blog` component in an overview, while the complete contents of an individual post are laid out for display by `pages/blog/[slug]`.

## Hosting

The site is hosted on Vercel, DNS handled by Cloudflare.

## Other

The blog was first built in Next.js, my first real project on that framework, thus it's almost certainly
not a showcase of best practices.

Most importantly, it provided me a platform to write on.

A migration from Styled Components to TailwindCSS was completed in March 2023.

I started an Astro migration in early 2025, also converting to SolidJS and TypeScript, which had become my tools of choice at work, too. Tailwind v4 upgrade too, because why not.
