import * as React from "react";
import { SocialLinks } from "../components/social.js";
import sweden_flag from "../images/flag_se.svg";
import uk_flag from "../images/flag_uk.svg";
import logo_seqera from "../images/seqera_icon.svg";
import logo_scilifelab from "../images/scilifelab_icon.svg";
import logo_babraham from "../images/bi_logo.svg";

const AboutSectionSocial = ({ url, title, icon, children }) => {
  return (
    <a href={url} title={title} target="_blank" rel="noreferrer" class="btn btn-outline-dark shadow-sm me-2">
      {title} {icon}
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
          <AboutSectionSocial url={social.url} title={social.title} icon={social.icon} />
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
            <img src={logo_seqera} alt="Seqera Labs" class="me-4" style={{ width: "30px" }} />
            <div style={{ flexGrow: 1 }}>
              <h5 class="mb-1">Seqera Labs</h5>
              <p class="text-muted mb-0">
                Stockholm, Sweden (remote)
                <img src={sweden_flag} alt="Sweden" class="mx-1 shadow-sm" style={{ width: "18px" }} />
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
            <img src={logo_scilifelab} alt="SciLifeLab Logo" class="me-4" style={{ width: "30px" }} />
            <div style={{ flexGrow: 1 }}>
              <h5 class="mb-1">SciLifeLab, The National Genomics Infrastructure (NGI)</h5>
              <p class="text-muted mb-0">
                Stockholm, Sweden
                <img src={sweden_flag} alt="Sweden" class="mx-1 shadow-sm" style={{ width: "18px" }} />
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
            <img src={logo_babraham} alt="Babraham Institute" class="me-4" style={{ width: "30px" }} />
            <div style={{ flexGrow: 1 }}>
              <h5 class="mb-1">The Babraham Institute</h5>
              <p class="text-muted mb-0">
                Cambridge, UK
                <img src={uk_flag} alt="United Kingdom" class="mx-1 shadow-sm" style={{ width: "18px" }} />
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
