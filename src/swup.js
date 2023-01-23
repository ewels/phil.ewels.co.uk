import SwupA11yPlugin from "@swup/a11y-plugin";
import SwupGaPlugin from "@swup/ga-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupProgressPlugin from "@swup/progress-plugin";
import Swup from "swup";

const swup = new Swup({
  plugins: [
    new SwupA11yPlugin(),
    new SwupHeadPlugin(),
    new SwupPreloadPlugin(),
    new SwupProgressPlugin(),
    new SwupGaPlugin({
      gaMeasurementId: "G-7F0L1P0KS1",
    }),
  ],
});

// Scroll page to top when we change content
swup.on("contentReplaced", function () {
  document.querySelector(".drawer-content").scrollTo(0, 0);
  if (document.getElementById("contact-form")) {
    grecaptcha.reset();
  }
});
