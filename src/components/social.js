import * as React from "react";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";
import orcid_logo_mono from "../images/ORCIDid_iconbwvector.svg";
import orcid_logo from "../images/ORCIDid_iconvector.svg";
import google_scholar_logo from "../images/google_scholar.svg";
import research_gate_logo from "../images/research_gate.svg";
import research_gate_logo_mono from "../images/research_gate_bw.svg";

export const SocialLinks = [
  { url: "https://github.com/ewels/", title: "GitHub", icon: <Github />, icon_mono: <Github /> },
  {
    url: "http://twitter.com/tallphil",
    title: "twitter",
    icon: <Twitter className="text-info" />,
    icon_mono: <Twitter />,
  },
  {
    url: "http://linkedin.com/in/philewels",
    title: "LinkedIn",
    icon: <Linkedin className="text-primary" />,
    icon_mono: <Linkedin />,
  },
  {
    url: "http://orcid.org/0000-0003-4101-2502",
    title: "ORCiD",
    icon: <img src={orcid_logo} alt="ORCiD" />,
    icon_mono: <img src={orcid_logo_mono} alt="ORCiD" />,
  },
  {
    url: "http://www.researchgate.net/profile/Philip_Ewels",
    title: "ResearchGate",
    icon: <img src={research_gate_logo} alt="ResearchGate" />,
    icon_mono: <img src={research_gate_logo_mono} alt="ResearchGate" />,
  },
  {
    url: "https://scholar.google.se/citations?user=KJt8R0kAAAAJ&view_op=list_works&sortby=pubdate",
    title: "Google Scholar",
    icon: <img src={google_scholar_logo} alt="Google Scholar" />,
    icon_mono: <img src={google_scholar_logo} alt="Google Scholar" />,
  },
];
