// Step 1: Import React
import * as React from "react";
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
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
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
