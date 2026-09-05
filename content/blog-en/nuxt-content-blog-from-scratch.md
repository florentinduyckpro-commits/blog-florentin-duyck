---
title: "Building a blog with Nuxt Content: lessons learned"
description: "What I learned while structuring this blog with categories, client-side search, and sorting."
date: 2026-08-20
category: nuxt
tags: ["nuxt", "nuxt-content", "markdown"]
readTime: 5
draft: false
image: "nuxt-content-blog-from-scratch.svg"
---

This blog you are reading runs on `@nuxt/content`. No external CMS, no database: every article is a Markdown file versioned in the same Git repository as the rest of the portfolio.

## Why this choice

For a personal site with a reasonable number of articles, adding a headless CMS is often one dependency too many. A `.md` file can be reviewed, versioned, and edited in the same editor as the code.

## The chosen structure

All articles live in one flat `content/blog/` directory, with the category defined in frontmatter rather than in a subdirectory. This avoids moving files if an article changes category later.

## Filtering, searching, and sorting

The collection is loaded once on the client, then filtered in a dedicated composable. For a portfolio's volume of articles, this avoids a server request on every keystroke in the search bar while keeping the interface instant.

## Next step

Add an RSS feed and a sitemap generated automatically from the collection, so every new article can be indexed without manual configuration.
