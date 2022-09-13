import * as React from "react";
import { PersonCircle, JournalBookmark, Easel, FileEarmarkText, Envelope } from "react-bootstrap-icons";
import { SocialLinks } from "./social";
import avatar from "../images/phil_ewels.jpg";

const SideNavItem = ({ anchor, title, children }) => {
  return (
    <li class="nav-item mb-2">
      <a class="nav-link text-white" href="#{ anchor }">
        {children} {title}
      </a>
    </li>
  );
};

const SideNavSocial = ({ url, title, icon, children }) => {
  return (
    <li class="nav-item">
      <a class="nav-link text-white" target="_blank" rel="noreferrer" href={url} title={title} data-bs-toggle="tooltip">
        {icon}
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <header id="sidebar" class="bg-dark text-white">
      <div class="py-4">
        <div class="text-center pt-3">
          <div class="row d-flex align-items-center">
            <div class="col-3">
              <hr />
            </div>
            <div class="col-6">
              <img src={avatar} class="rounded-circle w-100 shadow mb-3" alt="Philip Ewels" />
            </div>
            <div class="col-3">
              <hr />
            </div>
          </div>
          <h1 class="display-1">Phil Ewels</h1>
        </div>
        <ul class="nav nav-pills flex-column mx-3 my-5" id="primary-nav">
          <SideNavItem anchor="about" title="About me">
            <PersonCircle />
          </SideNavItem>
          <SideNavItem anchor="projects" title="Projects">
            <JournalBookmark />
          </SideNavItem>
          <SideNavItem anchor="presentations" title="Presentations">
            <Easel />
          </SideNavItem>
          <SideNavItem anchor="publications" title="Publications">
            <FileEarmarkText />
          </SideNavItem>
          <SideNavItem anchor="contact" title="Contact me">
            <Envelope />
          </SideNavItem>
        </ul>
        <hr />
        <ul class="nav nav-pills nav-fill mt-4 px-5" id="social">
          {SocialLinks.map((social) => (
            <SideNavSocial url={social.url} title={social.title} icon={social.icon_mono} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
