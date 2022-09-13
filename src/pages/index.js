// Step 1: Import React
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import Sidebar from "../components/sidebar";
import AboutSection from "../sections/about";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Sidebar />
      <section id="content" class="bg-light p-5">
        <AboutSection />
      </section>
      <div id="borderbar"></div>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>Phil Ewels</title>
    <meta name="description" content="Phil Ewels' personal website" />
  </>
);

// Step 3: Export your component
export default IndexPage;
