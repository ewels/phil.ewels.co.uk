import * as React from "react";
import { SocialLinks, SocialIcon } from "./social";

const SideNavItem = ({ anchor, title, children }) => {
  return (
    <li class="nav-item mb-2">
      <a class="nav-link text-white" href="#{ anchor }">
        <i class="bi bi-person-circle me-2"></i> {title}
      </a>
    </li>
  );
};

const SideNavSocial = ({ url, title, icon_class, img_url, children }) => {
  return (
    <li class="nav-item">
      <a class="nav-link text-white" target="_blank" href={url} title={title} data-bs-toggle="tooltip">
        <SocialIcon icon_class={icon_class} img_url={img_url} title={title} />
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
              <img src="assets/img/phil_ewels.jpg" class="rounded-circle w-100 shadow mb-3" alt="Philip Ewels" />
            </div>
            <div class="col-3">
              <hr />
            </div>
          </div>
          <h1 class="display-1">Phil Ewels</h1>
        </div>
        <ul class="nav nav-pills flex-column mx-3 my-5" id="primary-nav">
          <SideNavItem anchor="about" title="About me" />
          <SideNavItem anchor="projects" title="Projects" />
          <SideNavItem anchor="presentations" title="Presentations" />
          <SideNavItem anchor="publications" title="Publications" />
          <SideNavItem anchor="contact" title="Contact me" />
        </ul>
        <hr />
        <ul class="nav nav-pills nav-fill mt-4 px-5" id="social">
          {SocialLinks.map((social) => (
            <SideNavSocial
              url={social.url}
              title={social.title}
              icon_class={social.icon_class}
              img_url={social.img_url}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
