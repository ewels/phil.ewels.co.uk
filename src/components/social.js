import * as React from "react";

export const SocialLinks = [
  { url: "https://github.com/ewels/", title: "GitHub", icon_class: "github" },
  { url: "http://twitter.com/tallphil", title: "twitter", icon_class: "twitter" },
  { url: "http://linkedin.com/in/philewels", title: "ORCID", icon_class: "linkedin" },
  { url: "http://orcid.org/0000-0003-4101-2502", title: "LinkedIn", img: "ORCIDid_iconbwvector.svg" },
  {
    url: "https://scholar.google.se/citations?user=KJt8R0kAAAAJ&view_op=list_works&sortby=pubdate",
    title: "Google Scholar",
    img_url: "google_scholar.svg",
  },
  {
    url: "http://www.researchgate.net/profile/Philip_Ewels",
    title: "ResearchGate",
    img_url: "research_gate.svg",
  },
];

export const SocialIcon = ({ img_url, icon_class, title, children }) => {
  if (img_url) {
    return <img src={"assets/img/" + img_url} alt={title} />;
  } else {
    return <i class={"bi bi-" + icon_class}></i>;
  }
};
