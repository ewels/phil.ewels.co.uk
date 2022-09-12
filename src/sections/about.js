import * as React from "react";
import { SocialLinks, SocialIcon } from "../components/social.js";

const AboutSectionSocial = ({ url, title, icon_class, img_url, children }) => {
  return (
    <a href={url} title={title} target="_blank" class="btn btn-outline-dark shadow-sm me-2">
      {title} <SocialIcon icon_class={icon_class} img_url={img_url} title={title} />
    </a>
  );
};

const AboutSection = () => {
  return (
    <article id="about">
      <h2 class="display-4">Hi there!</h2>
      <p class="lead mb-1">I'm a bioinformatician living in Stockholm, Sweden.</p>
      <p>I work with high-throughput genomics data and open-source software.</p>
      <p>
        {SocialLinks.map((social) => (
          <AboutSectionSocial
            url={social.url}
            title={social.title}
            icon_class={social.icon_class}
            img_url={social.img_url}
          />
        ))}
      </p>

      <h3 class="mt-5">Where I've worked</h3>
      <p class="lead">I'm a molecular biologist, turned bioinformatician, turned research-software engineer.</p>
      <p>
        I began my career working with research in epigenetics, notably 3D nuclear structure and DNA methylation. I
        later started working with infrastructure and development of open-source bioinformatics tools. These are the
        places I have worked - click to find out more about the positions.
      </p>
      <div class="list-group mx-n5">
        <a href="#work/ngi" class="list-group-item list-group-item-action details_btn">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <img src="assets/img/seqera_icon.svg" alt="Seqera Labs" class="me-4" style={{ width: "30px" }} />
            <div style={{ flexGrow: 1 }}>
              <h5 class="mb-1">Seqera Labs</h5>
              <p class="text-muted mb-0">
                Stockholm, Sweden (remote)
                <img src="assets/img/flag_se.svg" alt="Sweden" class="mx-1 shadow-sm" style={{ width: "18px" }} />
                <span class="badge bg-light text-secondary border fw-normal ms-2">1 position</span>
              </p>
            </div>
            <div>
              <i class="bi bi-arrow-right text-black-50"></i>
            </div>
          </div>
        </a>
        <a href="#work/ngi" class="list-group-item list-group-item-action details_btn">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <img src="assets/img/scilifelab_icon.svg" alt="SciLifeLab Logo" class="me-4" style={{ width: "30px" }} />
            <div style={{ flexGrow: 1 }}>
              <h5 class="mb-1">SciLifeLab, The National Genomics Infrastructure (NGI)</h5>
              <p class="text-muted mb-0">
                Stockholm, Sweden
                <img src="assets/img/flag_se.svg" alt="Sweden" class="mx-1 shadow-sm" style={{ width: "18px" }} />
                <span class="badge bg-light text-secondary border fw-normal ms-2">3 positions</span>
              </p>
            </div>
            <div>
              <i class="bi bi-arrow-right text-black-50"></i>
            </div>
          </div>
        </a>
        <a href="#work/babraham" class="list-group-item list-group-item-action details_btn">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <img src="assets/img/bi_logo.svg" alt="Babraham Institute" class="me-4" style={{ width: "30px" }} />
            <div style={{ flexGrow: 1 }}>
              <h5 class="mb-1">The Babraham Institute</h5>
              <p class="text-muted mb-0">
                Cambridge, UK
                <img
                  src="assets/img/flag_uk.svg"
                  alt="United Kingdom"
                  class="mx-1 shadow-sm"
                  style={{ width: "18px" }}
                />
                <span class="badge bg-light text-secondary border fw-normal ms-2">2 positions</span>
              </p>
            </div>
            <div>
              <i class="bi bi-arrow-right text-black-50"></i>
            </div>
          </div>
        </a>
      </div>
    </article>
  );
};

export default AboutSection;
