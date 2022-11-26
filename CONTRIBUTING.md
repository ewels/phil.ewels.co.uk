# Contributing

This website was based on the _Astro Modern Personal Website_ template:
<https://github.com/manuelernestog/astro-modern-personal-website>

The rest of these contribution docs are basically a cut down version of the readme of that template at the time I used it (Nov 2022).

## Installation

Run the following command in your terminal

```bash
npm install
```

Once the packages are installed you are ready to run astro. Astro comes with a built-in development server that has everything you need for project development. The astro dev command will start the local development server so that you can see your new website in action for the very first time.

```bash
npm run dev
```

## Tech Stack

- [Astro](astro.build)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Project Strucutre

```php
├── src/
│   ├── components/
│   │   ├── cs/
│   │   │   ├── TimeLine
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── HorizontalCard.jsx
│   │   └── SideBar.jsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│   │   ├── blog/
│   │   │   ├── [page].astro
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── post3.md
│   │   └── cv.astro
│   │   └── index.astro
│   │   └── projects.astro
│   │   └── rss.xml.js
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── social-image.png
│   └── sprofile.jpg
│   └── social_img.webp
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

### Components usage

#### Layout Components

The `BaseHead`, `Footer`, `Header` and `SideBar` components are already included in the layout sistem. To change the website content you can edit the content of this componenets.

##### SideBar

In the Sidebar you can change the links to all your website pages.

You can change your avatar shape using [mask classes](https://daisyui.com/components/mask/).

The used social-icons are SVG form [BoxIcons](https://boxicons.com/) pack.

#### TimeLine

The timeline components are used to conform the CV.

```html
<div class="time-line-container">
  <TimeLineElement title="Element Title" subtitle="Subtitle" desc="Description" />
  ...
</div>
```

#### Card & HorizontalCard

```html
<HorizontalCard title="Card Title" img="imge_url" desc="Description" url="Link URL" target="Optional link target (_blank
default)" badge="Optional badge" tags={['Array','of','tags']} />
```

### Layouts

Include `BaseLayout` in each page you add and `PostLayout` to your post pages.

### Pages

#### Blog

Add your `md` blog post in the `/pages/blog/` folder.

##### [page].astro

The `[page].astro` is the route to work with the paginated post list. You can change there the number of items listed for each page and the pagination button labels.

##### Post format

Add code with this format in the top of each post file.

```
---
layout: "../../layouts/PostLayout.astro"
title: "Post Title"
description: "Description"
pubDate: "Post date format(Sep 10 2022)"
heroImage: "Post Hero Image URL"
---
```

#### Static pages

The other pages inlcuded in the template are static pages. The `index` page belong to the root page. You can add your pages directly in the `/pages` folder and then add a link to that pages in the `sidebar` component.

Feel free to modify the content included in the pages that the template contains or add the ones you need.

### Theming

For change the template theme change the `data-theme` atribute of the `<html>` tag in `BaseLayout.astro` file.

You can chose among 30 themes available or create your custom theme. See themes available [here](https://daisyui.com/docs/themes/).

## Sitemap

The Sitemap is generated automatically when you build your website in the root of the domain. Please update the `robots.txt` file in the public folder with your site name URL for the Sitemap.

## Deploy

You can deploy your site on your favorite static hosting service such as Vercel, Netlify, GitHub Pages, etc.

The configuration for the deployment varies depending on the platform where you are going to do it. See the [official Astro information](https://docs.astro.build/en/guides/deploy/) to deploy your website.

> **⚠️ CAUTION** </br>
> The Blog pagination of this template is implemented using dynamic route parameters in its filename and for now this format is incompatible with SSR deploy configs, so please use the default static deploy options for your deployments.

## Contributing

Suggestions and pull requests are welcomed! Feel free to open a discussion, an issue or create a pull request.

## License

Astro Modern Personal Website is licensed under the MIT license — see the [LICENSE](https://github.com/manuelernestog/astro-modern-personal-website/blob/main/LICENSE) file for details.
