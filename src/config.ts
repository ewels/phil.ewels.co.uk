// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Phil Ewels";
export const SITE_DESCRIPTION = "Personal website for Phil Ewels, a bioinformatician living in Stockholm, Sweden.";

// Used to give each generated Markdown page enough context to stand on its own, once
// it has been fetched away from the site.
export const SITE_AUTHOR = "Phil Ewels";
export const SITE_BLURB = "a software developer and bioinformatician in Stockholm, Sweden";

// Profiles elsewhere on the web. Rendered as icons in the sidebar and as buttons on
// the homepage, and listed at the top of llms.txt.
export const PROFILE_LINKS = [
  { label: "GitHub", href: "https://github.com/ewels/", icon: "mdi:github" },
  { label: "Bluesky", href: "https://bsky.app/profile/ewels.bsky.social", icon: "simple-icons:bluesky" },
  { label: "LinkedIn", href: "http://uk.linkedin.com/in/philewels", icon: "mdi:linkedin" },
  { label: "X (Twitter)", href: "http://twitter.com/tallphil", icon: "bi:twitter-x" },
  { label: "Mastodon", href: "https://genomic.social/@ewels", icon: "mdi:mastodon" },
  { label: "ORCiD", href: "http://orcid.org/0000-0003-4101-2502", icon: "simple-icons:orcid" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.se/citations?user=KJt8R0kAAAAJ&view_op=list_works&sortby=pubdate",
    icon: "simple-icons:googlescholar",
    // The sidebar's icon row is spaced for six, so this one stays off it.
    sidebar: false,
  },
] as const;
